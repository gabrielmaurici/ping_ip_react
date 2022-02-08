import { createContext, ReactNode, useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { apiDispositivos } from '../services/apiDispositivos';
import { apiToken } from '../services/apiToken';
import { Dispositivo } from '../types'

interface DispositivosProviderProps {
    children: ReactNode;
}

interface DispositivosContextData { 
    dispositivos: Dispositivo[];
    modalAddDispositivos: boolean;
    abreFechaModal: (seta: boolean) => void;
    buscaStatusDispositivos: () => void;
}

const DispositivosContext = createContext<DispositivosContextData>({} as DispositivosContextData);

export function DispositivosProvider({ children } : DispositivosProviderProps): JSX.Element {

    const [dispositivos, setDispositivos] = useState<Dispositivo[]>([]);
    const [modalAddDispositivos, setModalAddDispositivos] = useState(false);

    const capturaToken = async () => {
        try {
            const usuario = { 
                userName: 'gabriel',
                senha: '123'
            };
            
            const token = await apiToken.post('/loginAuth', usuario);

            return token.data['token'];
        } catch (error: any) {
            toast.error(error.response.data);
        }
    }
    
    const criaTokenBearer = (token: any) => {
        const tokenBearer = {
            headers: {"Authorization": "bearer " + token}
        };

        return tokenBearer;
    }

    const buscaStatusDispositivos = async () => {
        try {            
            const token = await capturaToken();
            
            const tokenBearer = criaTokenBearer(token);
            
            
            toast.success('Atualizando status'); 
            const statusDispositivos = await apiDispositivos.get<Dispositivo[]>('/ObterStatusDispositivos', tokenBearer);
            setDispositivos(statusDispositivos.data);

            if(statusDispositivos.data) {                
                // setTimeout(buscaStatusDispositivos, 30000);
            }
        } catch (error: any) {
            toast.error(error.response.data);
        }
    }    

    const abreFechaModal = (seta: boolean) => {
        setModalAddDispositivos(seta);
    }

    console.log(modalAddDispositivos);
    return (
        <DispositivosContext.Provider
            value={{ dispositivos, modalAddDispositivos, abreFechaModal, buscaStatusDispositivos }}
        >
            {children}
        </DispositivosContext.Provider>
    )
}

export function useDispositivos(): DispositivosContextData {
    const context = useContext(DispositivosContext);

    return context;
}