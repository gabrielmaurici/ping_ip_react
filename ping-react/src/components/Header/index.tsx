import React from 'react';
import { ConexaoImg, Container } from './styles';

import conexaoImg from '../../assets/images/conexao.png';

const Header = (): JSX.Element => {
    return(
        <Container>
            <h1>Ping Ip App</h1>
            <ConexaoImg>
                <img src={conexaoImg} alt="" />
            </ConexaoImg>
        </Container>
    )
}

export default Header;