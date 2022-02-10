import { useState } from 'react';
import { FormularioDisp, Modal, ModalOverlay, ModalOverlayActive } from './styles'
import closeImg from '../../assets/svgs/close.svg'
import { useDispositivos } from '../../hooks/useDispositivos';
import { Dispositivo } from '../../types';

const ModalAddDispositivo = (): JSX.Element => {
    const { modalAddDispositivos, abreFechaModal, addDispositivo } = useDispositivos();
    const [dispositivo, setDispositivo] = useState<Dispositivo>(Object);

    const handleSubmit = () => {
        abreFechaModal(false);

        addDispositivo(dispositivo);
    }

    return(
        <>
            {
                modalAddDispositivos === true ?
                <ModalOverlay>
                    <ModalOverlayActive>
                        <Modal>
                            <FormularioDisp onSubmit={(event) => {
                                event.preventDefault();
                                event.stopPropagation();

                                handleSubmit();
                            }}
                            >
                                <div className="titulo">
                                    <h3>Preencha as informações do Dispositivo</h3>
                                    <img src={closeImg} alt="Fechar" onClick={() => abreFechaModal(false)} />
                                </div>

                                <input required type="text" placeholder="Nome do dispositivo" autoFocus onChange={(event) => setDispositivo({ ...dispositivo, nome: event.target.value })}/>
                                <input required type="text" placeholder="IP do dispositivo" onChange={(event) => setDispositivo({ ...dispositivo, ip: event.target.value })} />
                                
                                <select required onChange={(event) => setDispositivo({ ...dispositivo, tipoDispositivo: event.target.value })}>
                                    <option value="Outros" selected disabled >Selecione o tipo do dispositivo</option>
                                    <option value="Celular">Celular</option>
                                    <option value="Computador">Computador</option>
                                    <option value="Alexa">Alexa</option>
                                    <option value="FireStickTv">Fire Stick Tv</option>
                                    <option value="ControleSmart">Controle Universal</option>
                                    <option value="Luz">Luz</option>
                                    <option value="Outros">Outros</option>
                                </select>

                                <div className="btn-group">
                                    <button className="btn-salvar" type="submit">Salvar</button>
                                    <button className="btn-limpar">Limpar</button>
                                </div>
                            </FormularioDisp>
                        </Modal>
                    </ModalOverlayActive>
                </ModalOverlay>
                :
                <></>
            }
        </>
    )
}

export default ModalAddDispositivo;