import React, { useState } from 'react';
import { ConexaoImg, Container, StatusDispositivos } from './styles';
import { SiHyperledger } from 'react-icons/si';
import conexaoImg from '../../assets/images/conexao.png';
// import conexaoImg from '../../assets/svgs/conexao-rede.svg';


const Header = (): JSX.Element => {
    const [listaDispositivos, setListaDispositivos] = useState();


    return(
        <Container>
            <h1>Ping Ip App</h1>
            <ConexaoImg>
                {/* <img src={conexaoImg} alt="" /> */}
                <SiHyperledger size="300px" color="white"/>
            </ConexaoImg>
            <h2>Status dos seus dispositivos:</h2>
            <StatusDispositivos>
                <div className="disp-onlines">
                    <h2>4</h2>
                    <p>Onlines</p>
                </div>
                <div className="disp-offlines">
                    <h2>2</h2>
                    <p>Offlines</p>
                </div>
            </StatusDispositivos>
        </Container>
    )
}

export default Header;