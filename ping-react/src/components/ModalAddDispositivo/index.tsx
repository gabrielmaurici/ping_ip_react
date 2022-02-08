import { useState } from 'react';
import { FormularioDisp, Modal, ModalOverlay, ModalOverlayActive } from './styles'
import closeImg from '../../assets/svgs/close.svg'
import { useDispositivos } from '../../hooks/useDispositivos';

const ModalAddDispositivo = (): JSX.Element => {
    const [foco, setFoco] = useState(true);
    const { modalAddDispositivos, abreFechaModal} = useDispositivos();

    console.log('alo', modalAddDispositivos);

    return(
        <>
            {
                modalAddDispositivos === true ?
                <ModalOverlay>
                    <ModalOverlayActive>
                        <Modal>
                            {
                                foco === true ?
                                <FormularioDisp>
                                    <div className="titulo">
                                        <h3>Preencha as informações do Dispositivo</h3>
                                        <img src={closeImg} alt="Fechar" onClick={() => abreFechaModal(false)} />
                                    </div>
                                    <input type="text" placeholder="Nome do dispositivo" autoFocus />
                                    <input type="text" placeholder="IP do dispositivo" onClick={() => setFoco(false)} />
                                    <div className="btn-group">
                                        <button className="btn-salvar">Salvar</button>
                                        <button className="btn-limpar">Limpar</button>
                                    </div>
                                </FormularioDisp>
                                : 
                                <FormularioDisp>
                                    <div className="titulo">
                                        <h3>Preencha as informações do Dispositivo</h3>
                                        <img src={closeImg} alt="Fechar" onClick={() => abreFechaModal(false)} />
                                    </div>
                                    <input type="text" placeholder="Nome do dispositivo" onClick={() => setFoco(false)} />
                                    <input type="text" placeholder="IP do dispositivo" autoFocus />
                                    <div className="btn-group">
                                        <button className="btn-salvar">Salvar</button>
                                        <button className="btn-limpar">Limpar</button>
                                    </div>
                                </FormularioDisp>
                            }
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