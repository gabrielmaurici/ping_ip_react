import { ToastContainer } from 'react-toastify';
import Header from '../../components/Header';
import TableDispositivos from '../../components/TableDispositivos';
import { DispositivosProvider } from '../../hooks/useDispositivos';
import { Container } from './styles';

const Dispositivos = (): JSX.Element => {
    return(
        <Container>
            <DispositivosProvider>
                <Header/>
                <TableDispositivos/>
                <ToastContainer autoClose={5000}/>
            </DispositivosProvider>
        </Container>
    )
}

export default Dispositivos;