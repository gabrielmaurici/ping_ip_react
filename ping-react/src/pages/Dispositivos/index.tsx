import React from 'react';

import Header from '../../components/Header';
import TableDispositivos from '../../components/TableDispositivos';
import { Container } from './styles';

const Dispositivos = (): JSX.Element => {
    return(
        <Container>
            <Header/>
            <TableDispositivos/>
        </Container>
    )
}

export default Dispositivos;