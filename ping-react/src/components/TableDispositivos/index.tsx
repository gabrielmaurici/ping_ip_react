import { useEffect } from 'react';
import { Container, DispositivosContent } from './styles'
import { SiAmazonalexa, SiAmazonfiretv } from 'react-icons/si';
import { MdOutlinePhoneIphone, MdLightbulbOutline } from 'react-icons/md';
import { RiRemoteControlLine } from 'react-icons/ri';
import { HiOutlineDesktopComputer } from 'react-icons/hi';
import { useDispositivos } from '../../hooks/useDispositivos';

const TableDispositivos = (): JSX.Element => {

    const { dispositivos, buscaStatusDispositivos } = useDispositivos();
    
    useEffect(() => {
        buscaStatusDispositivos();
    }, [])

    return(
        <Container>
            <DispositivosContent>
                {
                    dispositivos.map((dispositivo: any) => 
                        <div key={dispositivo.id}  className={ dispositivo.status === true ? "disp-onlines" : "disp-offlines"}>
                            <li>
                                {(() => {
                                        if (dispositivo.tipoDispositivo === 'SmartHome') {
                                            return (
                                                <>
                                                    <SiAmazonalexa size="40%" color="white" />
                                                    <p>{dispositivo.nome}</p>
                                                </>
                                            )
                                        } else if (dispositivo.tipoDispositivo === 'Computador') {
                                            return (
                                                <>
                                                    <HiOutlineDesktopComputer size="40%" color="white" /> 
                                                
                                                    <p>{dispositivo.nome}</p>
                                                </>
                                            )
                                        } else if (dispositivo.tipoDispositivo === 'Celular') {
                                            return (
                                                <>
                                                    <MdOutlinePhoneIphone size="40%" color="white" /> 
                                                    <p>{dispositivo.nome}</p>
                                                </>
                                            )
                                        } else if (dispositivo.tipoDispositivo === 'Luz') {
                                            return (
                                                <>
                                                    <MdLightbulbOutline size="40%" color="white" /> 
                                                    <p>{dispositivo.nome}</p>
                                                </>
                                            )
                                        } else if (dispositivo.tipoDispositivo === 'FireStickTv') {
                                            return (
                                                <>
                                                    <SiAmazonfiretv size="40%" color="white" /> 
                                                    <p>{dispositivo.nome}</p>
                                                </>
                                            )
                                        } else if (dispositivo.tipoDispositivo === 'ControleSmart') {
                                            return (
                                                <>
                                                    <RiRemoteControlLine size="40%" color="white" /> 
                                                    <p>{dispositivo.nome}</p>
                                                </>
                                            )
                                        }
                                    })()
                                }                        
                            </li>
                        </div>
                    )
                }
            </DispositivosContent>
        </Container>
    );
}

export default TableDispositivos;