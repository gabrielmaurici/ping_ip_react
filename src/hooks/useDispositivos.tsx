import { createContext, ReactNode, useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { apiDispositivos } from '../services/apiDispositivos';
import { apiToken } from '../services/apiToken';
import { Dispositivo } from '../types'

interface DispositivosProviderProps {
    children: ReactNode;
}

type insereDispositivo = Omit<Dispositivo, "id status mensagem">
type atualizaDispositivo = Omit<Dispositivo, "status mensagem">

interface DispositivosContextData { 
    dispositivos: Dispositivo[];
    modalAddDispositivos: boolean;
    dispositivoModal: atualizaDispositivo;
    setDispositivoModal: (atualiza: atualizaDispositivo) => void;
    setModalAddDispositivos: (seta: boolean) => void;
    addDispositivo: (novoDispositivo: insereDispositivo) => Promise<void>;
    atualizaDispositivo: (dispositivoAtualizado: atualizaDispositivo) => Promise<void>;
    buscaStatusDispositivos: () => void;
    deletaDispositivo: (id: number) => Promise<void>;
}

const DispositivosContext = createContext<DispositivosContextData>({} as DispositivosContextData);

export function DispositivosProvider({ children } : DispositivosProviderProps): JSX.Element {
    const [dispositivos, setDispositivos] = useState<Dispositivo[]>([]);
    const [modalAddDispositivos, setModalAddDispositivos] = useState(false);
    const [dispositivoModal, setDispositivoModal] = useState<atualizaDispositivo>(Object);

    const capturaToken = async () => {
        try {
            const usuario = { 
                userName: 'gabriel',
                senha: '123'
            };
            
            const token = await apiToken.post('/loginAuth', usuario);

            if(token.status === 400) {
                toast.warning(token.data.mensagem);
                return false;
            }

            return token.data.token;
        } catch (error: any) {
            toast.error("Alconteceu algum erro inesperado.");

            return false;
        }
    }
    
    const criaTokenBearer = (token: any) => {
        const tokenBearer = {
            headers: {"Authorization": "bearer " + token}
        };

        return tokenBearer;
    }

    const addDispositivo = async (novoDispositivo: insereDispositivo) => {
        try {
            const token = await capturaToken();

            if(token) {
                const tokenBearer = criaTokenBearer(token);
    
                const retornoDispositivo = await apiDispositivos.post('InserirDispositivo', novoDispositivo, tokenBearer);

                if(retornoDispositivo.status === 409){
                    console.log(retornoDispositivo.data)
                    toast.warning(retornoDispositivo.data);
                } else{
                    toast.success(retornoDispositivo.data);
                    buscaStatusDispositivos();
                }
            }
        } catch (error: any) {
            toast.error("Aconteceu algum erro inesperado.");
        }
    }

    const atualizaDispositivo = async (dispositivoAtualizado: atualizaDispositivo) => {
        try {
            const token = await capturaToken();

            if(token) {
                const tokenBearer = criaTokenBearer(token);
    
                const retornoDispositivo = await apiDispositivos.put('AtualizarDispositivo', dispositivoAtualizado, tokenBearer);

                if(retornoDispositivo.status === 409){
                    toast.warning(retornoDispositivo.data);
                } else{
                    toast.success(retornoDispositivo.data);
                    buscaStatusDispositivos();
                }
            }
        } catch (error: any) {
            toast.error("Aconteceu algum erro inesperado.");
        }
    }
    
    const deletaDispositivo = async (id: number) => {
        try {
            const token = await capturaToken();

            if(token) {
                const tokenBearer = criaTokenBearer(token);
    
                const retornoDispositivo = await apiDispositivos.delete(`DeletarDispositivo/${id}`, tokenBearer);
    
                if(retornoDispositivo.status === 409){
                    toast.warning(retornoDispositivo.data);
                } else{
                    toast.success(retornoDispositivo.data);
                    buscaStatusDispositivos();
                }
            }
        } catch (error: any) {
            toast.error("Aconteceu algum erro inesperado.");
        }
    }

    const buscaStatusDispositivos = async () => {
        try {            
            const token = await capturaToken();
            
            if(token) {
                const tokenBearer = criaTokenBearer(token);
                
                const statusDispositivos = await apiDispositivos.get<Dispositivo[]>('/ObterStatusDispositivos', tokenBearer);
                setDispositivos(statusDispositivos.data);
                toast.success('Atualizando status'); 
                
                if(statusDispositivos.status === 409) {
                    toast.warning(statusDispositivos.data);
                } else {
                    if(statusDispositivos.data) {      
                        clearTimeout();          
                        setTimeout(buscaStatusDispositivos, 30000);
                    }
                }
            }
        } catch (error: any) {
            toast.error("Aconteceu algum erro inesperado.");
        }
    }

    return (
        <DispositivosContext.Provider
            value={{ dispositivoModal, dispositivos, modalAddDispositivos, setDispositivoModal,
                setModalAddDispositivos, addDispositivo, atualizaDispositivo, buscaStatusDispositivos, 
                deletaDispositivo 
            }}
        >
            {children}
        </DispositivosContext.Provider>
    )
}

export function useDispositivos(): DispositivosContextData {
    const context = useContext(DispositivosContext);

    return context;
}