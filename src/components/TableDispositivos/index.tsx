import { useEffect } from 'react';
import { useDispositivos } from '../../hooks/useDispositivos';

import { SiAmazonalexa, SiAmazonfiretv } from 'react-icons/si';
import { MdOutlinePhoneIphone, MdLightbulbOutline } from 'react-icons/md';
import { RiRemoteControlLine } from 'react-icons/ri';
import { GoDeviceDesktop } from 'react-icons/go';
import { AiFillPlusCircle } from 'react-icons/ai';
import { CgArrowUpO } from 'react-icons/cg';
import { MdOutlineDeleteOutline } from 'react-icons/md';
import { BsPlug } from 'react-icons/bs';
import { MdOutlineDevicesOther } from 'react-icons/md';

import { ButtonAddDispositivo, Container, DispositivosContent } from './styles'

const TableDispositivos = (): JSX.Element => {

    const { dispositivos, setDispositivoModal , setModalAddDispositivos, buscaStatusDispositivos, deletaDispositivo } = useDispositivos();

    useEffect(() => {
        buscaStatusDispositivos();
    }, [])

    const atualizaDispositivo = (dispositivo: any) => {
        setDispositivoModal(dispositivo);
        setModalAddDispositivos(true);
    }

    return(
        <Container>
            <ButtonAddDispositivo>
                <button onClick={() => setModalAddDispositivos(true)}>
                    Novo dispositivo <AiFillPlusCircle size="23px" color="white" />
                </button>
            </ButtonAddDispositivo>
            <DispositivosContent>
                {
                    dispositivos.map((dispositivo: any) => 
                        <div key={dispositivo.id}  className={ dispositivo.status === true ? "disp-onlines" : "disp-offlines" }>
                            <li>
                                {(() => {
                                        if (dispositivo.tipoDispositivo === 'Alexa') {
                                            return (
                                                <>
                                                    <SiAmazonalexa size="35%" color="white" />
                                                    <p>{dispositivo.nome}</p>
                                                    <div className="btn">
                                                        <button className="btn-editar" 
                                                            onClick={() => atualizaDispositivo(dispositivo)}
                                                        >
                                                            <CgArrowUpO size="100%" color="white" />
                                                        </button>
                                                        <button className="btn-deletar"
                                                            onClick={() => deletaDispositivo(dispositivo.id)}
                                                        >
                                                            <MdOutlineDeleteOutline size="100%" color="white" />
                                                        </button>
                                                    </div>
                                                </>
                                            )
                                        } else if (dispositivo.tipoDispositivo === 'Computador') {
                                            return (
                                                <>
                                                    <GoDeviceDesktop size="35%" color="white" /> 
                                                    <p>{dispositivo.nome}</p>
                                                    <div className="btn">
                                                        <button className="btn-editar" 
                                                            onClick={() => atualizaDispositivo(dispositivo)}
                                                        >
                                                            <CgArrowUpO size="100%" color="white" />
                                                        </button>
                                                        <button className="btn-deletar"
                                                            onClick={() => deletaDispositivo(dispositivo.id)}
                                                        >
                                                            <MdOutlineDeleteOutline size="100%" color="white" />
                                                        </button>
                                                    </div>
                                                </>
                                            )
                                        } else if (dispositivo.tipoDispositivo === 'Celular') {
                                            return (
                                                <>
                                                    <MdOutlinePhoneIphone size="35%" color="white" />
                                                    <p>{dispositivo.nome}</p>
                                                    <div className="btn">
                                                        <button className="btn-editar" 
                                                            onClick={() => atualizaDispositivo(dispositivo)}
                                                        >
                                                            <CgArrowUpO size="100%" color="white" />
                                                        </button>
                                                        <button className="btn-deletar"
                                                            onClick={() => deletaDispositivo(dispositivo.id)}
                                                        >
                                                            <MdOutlineDeleteOutline size="100%" color="white" />
                                                        </button>
                                                    </div>
                                                </>
                                            )
                                        } else if (dispositivo.tipoDispositivo === 'Luz') {
                                            return (
                                                <>
                                                    <MdLightbulbOutline size="35%" color="white" /> 
                                                    <p>{dispositivo.nome}</p>
                                                    <div className="btn">
                                                        <button className="btn-editar" 
                                                            onClick={() => atualizaDispositivo(dispositivo)}
                                                        >
                                                            <CgArrowUpO size="100%" color="white" />
                                                        </button>
                                                        <button className="btn-deletar"
                                                            onClick={() => deletaDispositivo(dispositivo.id)}
                                                        >
                                                            <MdOutlineDeleteOutline size="100%" color="white" />
                                                        </button>
                                                    </div>
                                                </>
                                            )
                                        } else if (dispositivo.tipoDispositivo === 'FireStickTv') {
                                            return (
                                                <>
                                                    <SiAmazonfiretv size="35%" color="white" /> 
                                                    <p>{dispositivo.nome}</p>
                                                    <div className="btn">
                                                        <button className="btn-editar" 
                                                            onClick={() => atualizaDispositivo(dispositivo)}
                                                        >
                                                            <CgArrowUpO size="100%" color="white" />
                                                        </button>
                                                        <button className="btn-deletar"
                                                            onClick={() => deletaDispositivo(dispositivo.id)}
                                                        >
                                                            <MdOutlineDeleteOutline size="100%" color="white" />
                                                        </button>
                                                    </div>
                                                </>
                                            )
                                        } else if (dispositivo.tipoDispositivo === 'ControleSmart') {
                                            return (
                                                <>
                                                    <RiRemoteControlLine size="35%" color="white" /> 
                                                    <p>{dispositivo.nome}</p>
                                                    <div className="btn">
                                                        <button className="btn-editar" 
                                                            onClick={() => atualizaDispositivo(dispositivo)}
                                                        >
                                                            <CgArrowUpO size="100%" color="white" />
                                                        </button>
                                                        <button className="btn-deletar"
                                                            onClick={() => deletaDispositivo(dispositivo.id)}
                                                        >
                                                            <MdOutlineDeleteOutline size="100%" color="white" />
                                                        </button>
                                                    </div>
                                                </>
                                            )
                                        } else if (dispositivo.tipoDispositivo === 'Outros') {
                                            return (
                                                <>
                                                    <MdOutlineDevicesOther size="35%" color="white" /> 
                                                    <p>{dispositivo.nome}</p>
                                                    <div className="btn">
                                                        <button className="btn-editar" 
                                                            onClick={() => atualizaDispositivo(dispositivo)}
                                                        >
                                                            <CgArrowUpO size="100%" color="white" />
                                                        </button>
                                                        <button className="btn-deletar"
                                                            onClick={() => deletaDispositivo(dispositivo.id)}
                                                        >
                                                            <MdOutlineDeleteOutline size="100%" color="white" />
                                                        </button>
                                                    </div>
                                                </>
                                            )
                                        } else if (dispositivo.tipoDispositivo === 'Tomada') {
                                            return (
                                                <>
                                                    <BsPlug size="35%" color="white" /> 
                                                    <p>{dispositivo.nome}</p>
                                                    <div className="btn">
                                                        <button className="btn-editar" 
                                                            onClick={() => atualizaDispositivo(dispositivo)}
                                                        >
                                                            <CgArrowUpO size="100%" color="white" />
                                                        </button>
                                                        <button className="btn-deletar"
                                                            onClick={() => deletaDispositivo(dispositivo.id)}
                                                        >
                                                            <MdOutlineDeleteOutline size="100%" color="white" />
                                                        </button>
                                                    </div>
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