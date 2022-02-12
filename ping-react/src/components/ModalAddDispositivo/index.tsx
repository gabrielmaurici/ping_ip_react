import { FormularioDisp, Modal, ModalOverlay, ModalOverlayActive } from './styles'
import closeImg from '../../assets/svgs/close.svg'
import { useDispositivos } from '../../hooks/useDispositivos';

const ModalAddDispositivo = (): JSX.Element => {
    const { dispositivoModal, modalAddDispositivos, setDispositivoModal, setModalAddDispositivos, addDispositivo, atualizaDispositivo } = useDispositivos();

    const dispositivoModalInicial = {
        id: 0,
        nome: "",
        ip: "",
        tipoDispositivo: "Selecione o tipo do dispositivo",
        status: false,
        mensagem: "",
    }

    const handleSubmit = () => {
        setModalAddDispositivos(false);
        
        dispositivoModal.id > 0 ? atualizaDispositivo(dispositivoModal) : addDispositivo(dispositivoModal);
        setDispositivoModal(dispositivoModalInicial);
    }

    const fechaModal = () => {
        setDispositivoModal(dispositivoModalInicial);
        setModalAddDispositivos(false);
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
                                    <img src={closeImg} alt="Fechar" onClick={() => fechaModal()} />
                                </div>

                                <input required type="text" placeholder="Nome do dispositivo" autoFocus 
                                    onChange={(event) => setDispositivoModal({ ...dispositivoModal, nome: event.target.value })}
                                    value={dispositivoModal.nome} 
                                />
                                <input required type="text" placeholder="IP do dispositivo" 
                                    onChange={(event) => setDispositivoModal({ ...dispositivoModal, ip: event.target.value })}
                                    value={dispositivoModal.ip}
                                />
                                
                                <select required 
                                    onChange={(event) => setDispositivoModal({ ...dispositivoModal, tipoDispositivo: event.target.value })}
                                    value={dispositivoModal.tipoDispositivo}
                                >
                                    <option selected disabled >Selecione o tipo do dispositivo</option>
                                    <option value="Celular">Celular</option>
                                    <option value="Computador">Computador</option>
                                    <option value="Alexa">Alexa</option>
                                    <option value="FireStickTv">Fire Stick Tv</option>
                                    <option value="ControleSmart">Controle Universal</option>
                                    <option value="Luz">Luz</option>
                                    <option value="Tomada">Tomada</option>
                                    <option value="Outros">Outros</option>
                                </select>

                                <div className="btn-group">
                                    <button className="btn-salvar" type="submit">Salvar</button>
                                    <button onClick={() => setDispositivoModal(dispositivoModalInicial)} className="btn-limpar" type="button">Limpar</button>
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