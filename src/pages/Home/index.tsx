import { ToastContainer } from 'react-toastify';
import Header from '../../components/Header';
import ModalAddDispositivo from '../../components/ModalAddDispositivo';
import TableDispositivos from '../../components/TableDispositivos';
import { DispositivosProvider } from '../../hooks/useDispositivos';
import { Container } from './styles';

const Home = (): JSX.Element => {

    return(
        <Container>
            <DispositivosProvider>
                <ModalAddDispositivo />
                <Header/>
                <TableDispositivos/>
            </DispositivosProvider>
            <ToastContainer autoClose={5000} position="bottom-right" theme="colored" />
        </Container>
    )
}

export default Home;