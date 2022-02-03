import React, { useState } from 'react';
import { ConexaoImg, Container, HeaderDiv, StatusDispositivos } from './styles';
import { BsBroadcastPin } from 'react-icons/bs';
import conexaoImg from '../../assets/images/conexao.png';
import { useDispositivos } from '../../hooks/useDispositivos';
// import conexaoImg from '../../assets/svgs/conexao-rede.svg';


const Header = (): JSX.Element => {

    const { dispositivos } = useDispositivos();

    console.log(dispositivos); 


    const totalStatus = dispositivos.reduce((somaTotal, dispositivo) => {
        
        dispositivo.status === true ? somaTotal.onlines += 1
        : somaTotal.offlines += 1;

        return somaTotal;
    }, { 
        onlines: 0,
        offlines: 0,
    });

    console.log(totalStatus);

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
                        <h2>{totalStatus.onlines}</h2>
                        <p>Onlines</p>
                    </div>
                    <div className="disp-offlines">
                        <h2>{totalStatus.offlines}</h2>
                        <p>Offlines</p>
                    </div>
                </StatusDispositivos>
            </HeaderDiv>
        </Container>
    )
}

export default Header;