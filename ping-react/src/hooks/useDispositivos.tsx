import { createContext, ReactNode, useContext, useState } from 'react';
import { apiDispositivos } from '../services/apiDispositivos';
import { apiToken } from '../services/apiToken';
import { toast } from 'react-toastify';
import { Dispositivo } from '../types'

interface DispositivosProviderProps {
    children: ReactNode;
}

interface DispositivosContextData { 
    dispositivos: Dispositivo[];
    buscaStatusDispositivos: () => void;
}

const DispositivosContext = createContext<DispositivosContextData>({} as DispositivosContextData);

export function DispositivosProvider({ children } : DispositivosProviderProps): JSX.Element {

    const [dispositivos, setDispositivos] = useState<Dispositivo[]>([]);

    const capturaToken = async () => {
        try {
            const usuario = { 
                userName: 'gabriel',
                senha: '123'
            };
            
            const token = await apiToken.post('/loginAuth', usuario);

            return token.data['token'];
        } catch (error: any) {
            toast.error(error.response.data['mensagem']);
        }
    }
    
    const criaTokenBearer  = (token: any) => {
        const tokenBearer = {
            headers: {"Authorization": "bearer " + token}
        };

        return tokenBearer;
    }
    
    const buscaStatusDispositivos = async () => {
        try {            
            const token = await capturaToken();
            console.log('Token' + token);

            const tokenBearer = criaTokenBearer(token);
            console.log('Bearer' + tokenBearer);

            const statusDispositivos = await apiDispositivos.get<Dispositivo[]>('/ObterStatusDispositivos', tokenBearer);
            
            setDispositivos(statusDispositivos.data);
        } catch (error: any) {
            toast.error(error.response.data);
        }
    }    

    return (
        <DispositivosContext.Provider
            value={{ dispositivos, buscaStatusDispositivos }}
        >
            {children}
        </DispositivosContext.Provider>
    )
}

export function useDispositivos(): DispositivosContextData {
    const context = useContext(DispositivosContext);

    return context;
}