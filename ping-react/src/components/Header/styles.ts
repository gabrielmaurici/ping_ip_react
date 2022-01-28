import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: 100vh;
    width: 25%;

    background: #2D333B;

    h1 { 
        font-size: 65px;
        font-weight: 200;
        color: #FFFFFF;
    }

    h2 { 
        font-weight: 200;
        color: #FFFFFF;
    }
`

export const ConexaoImg = styled.div`
    height: 350px;
    margin: 100px 40px;

    img { 
        height: 340px;
    }
`

export const StatusDispositivos = styled.div`
    display: flex;

    margin-top: 20px;
    gap: 40px;

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