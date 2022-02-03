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
            </DispositivosProvider>
        </Container>
    )
}

export default Dispositivos;