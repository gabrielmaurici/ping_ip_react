import { useEffect } from 'react';
import { ButtonAddDispositivo, Container, DispositivosContent } from './styles'
import { SiAmazonalexa, SiAmazonfiretv } from 'react-icons/si';
import { MdOutlinePhoneIphone, MdLightbulbOutline } from 'react-icons/md';
import { RiRemoteControlLine } from 'react-icons/ri';
import { HiOutlineDesktopComputer } from 'react-icons/hi';
import { AiFillPlusCircle } from 'react-icons/ai';
import { useDispositivos } from '../../hooks/useDispositivos';

const TableDispositivos = (): JSX.Element => {

    const { dispositivos, abreFechaModal, buscaStatusDispositivos } = useDispositivos();

    useEffect(() => {
        buscaStatusDispositivos();
    }, [])

    return(
        <Container>
            <ButtonAddDispositivo>
                <button onClick={() => abreFechaModal(true)}>
                    Novo dispositivo <AiFillPlusCircle size="23px" color="white" />
                </button>
            </ButtonAddDispositivo>
            <DispositivosContent>
                {
                    dispositivos.map((dispositivo: any) => 
                        <div key={dispositivo.id}  className={ dispositivo.status === true ? "disp-onlines" : "disp-offlines"}>
                            <li>
                                {(() => {
                                        if (dispositivo.tipoDispositivo === 'Alexa') {
                                            return (
                                                <>
                                                    <SiAmazonalexa size="35%" color="white" />
                                                    <p>{dispositivo.nome}</p>
                                                </>
                                            )
                                        } else if (dispositivo.tipoDispositivo === 'Computador') {
                                            return (
                                                <>
                                                    <HiOutlineDesktopComputer size="35%" color="white" /> 
                                                
                                                    <p>{dispositivo.nome}</p>
                                                </>
                                            )
                                        } else if (dispositivo.tipoDispositivo === 'Celular') {
                                            return (
                                                <>
                                                    <MdOutlinePhoneIphone size="35%" color="white" /> 
                                                    <p>{dispositivo.nome}</p>
                                                </>
                                            )
                                        } else if (dispositivo.tipoDispositivo === 'Luz') {
                                            return (
                                                <>
                                                    <MdLightbulbOutline size="35%" color="white" /> 
                                                    <p>{dispositivo.nome}</p>
                                                </>
                                            )
                                        } else if (dispositivo.tipoDispositivo === 'FireStickTv') {
                                            return (
                                                <>
                                                    <SiAmazonfiretv size="35%" color="white" /> 
                                                    <p>{dispositivo.nome}</p>
                                                </>
                                            )
                                        } else if (dispositivo.tipoDispositivo === 'ControleSmart') {
                                            return (
                                                <>
                                                    <RiRemoteControlLine size="35%" color="white" /> 
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