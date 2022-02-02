import React, { useState } from 'react';
import { ConexaoImg, Container, HeaderDiv, StatusDispositivos } from './styles';
import { BsBroadcastPin } from 'react-icons/bs';
import conexaoImg from '../../assets/images/conexao.png';
// import conexaoImg from '../../assets/svgs/conexao-rede.svg';


const Header = (): JSX.Element => {
    const [listaDispositivos, setListaDispositivos] = useState();


    return(
        <Container>
            <HeaderDiv>
                <h1>Ping Ip App</h1>
                <ConexaoImg>
                    <img src={conexaoImg} alt="" />
                    {/* <BsBroadcastPin size="90%" color="white"/> */}
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
            </HeaderDiv>
        </Container>
    )
}

export default Header;