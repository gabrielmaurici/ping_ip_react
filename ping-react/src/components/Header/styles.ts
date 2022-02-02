import styled from 'styled-components'

export const Container = styled.div`
    height: 100vh;
    width: 35%;

    background: #22272E;
`

export const HeaderDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: 100%;

    background: #22272E;

    h1 { 
        font-size: 400%;
        font-weight: 200;
        color: #FFFFFF;
    }

    h2 { 
        font-weight: 200;
        color: #FFFFFF;
    }
`;

export const ConexaoImg = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    margin: 13% 0;

    img {
        height: 200px;
    }
`

export const StatusDispositivos = styled.div`
    display: flex;

    margin-top: 20px;
    gap: 40px;

    p {
        font-weight: 200;
    }

    .disp-onlines {
        text-align: center;

        border: 1px solid #1fbe0e;
        border-radius: 5px;
        
        padding: 5px 20px;

        h2, p {
            color: #1fbe0e;
        }
    }

    .disp-offlines {
        text-align: center;

        border: 1px solid #eb3728;
        border-radius: 5px;

        padding: 5px 20px;

        h2, p {
            color: #eb3728;
        }
    }
`;