import { createContext, ReactNode, useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { apiDispositivos } from '../services/apiDispositivos';
import { apiToken } from '../services/apiToken';
import { Dispositivo } from '../types'

interface DispositivosProviderProps {
    children: ReactNode;
}

type dispositivo = Omit<Dispositivo, "ip">;
type insereDispositivo = Omit<Dispositivo, "id status mensagem">

interface DispositivosContextData { 
    dispositivos: dispositivo[];
    modalAddDispositivos: boolean;
    abreFechaModal: (seta: boolean) => void;
    addDispositivo: (novoDispositivo: insereDispositivo) => Promise<void>;
    buscaStatusDispositivos: () => void;
}

const DispositivosContext = createContext<DispositivosContextData>({} as DispositivosContextData);

export function DispositivosProvider({ children } : DispositivosProviderProps): JSX.Element {
    const [dispositivos, setDispositivos] = useState<dispositivo[]>([]);
    const [modalAddDispositivos, setModalAddDispositivos] = useState(false);

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
    
                const retornoDispositivo = await apiDispositivos.post<dispositivo>('InserirDispositivo', novoDispositivo, tokenBearer);
    
                if(retornoDispositivo.status === 409){
                    toast.warning(retornoDispositivo.data.mensagem);
                } else{
                    toast.success(retornoDispositivo.data.mensagem);
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
                
                toast.success('Atualizando status'); 
                const statusDispositivos = await apiDispositivos.get<dispositivo[]>('/ObterStatusDispositivos', tokenBearer);
                setDispositivos(statusDispositivos.data);
    
                if(statusDispositivos.data) {      
                    clearTimeout();          
                    setTimeout(buscaStatusDispositivos, 30000);
                }
            }
        } catch (error: any) {
            toast.error("Aconteceu algum erro inesperado.");
        }
    }    

    const abreFechaModal = (seta: boolean) => {
        setModalAddDispositivos(seta);
    }

    return (
        <DispositivosContext.Provider
            value={{ dispositivos, modalAddDispositivos, abreFechaModal, addDispositivo, buscaStatusDispositivos }}
        >
            {children}
        </DispositivosContext.Provider>
    )
}

export function useDispositivos(): DispositivosContextData {
    const context = useContext(DispositivosContext);

    return context;
}