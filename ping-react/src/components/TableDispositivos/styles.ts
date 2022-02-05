import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    height: 100vh;
    width: 100vw;
`;

export const ButtonAddDispositivo = styled.div`
    display: flex;
    justify-content: end;
    margin: 2% 0 0;

    width: 90%;

    button { 
        display: flex;
        gap: 7px;

        justify-content: center;
        align-items: center;

        height: 55px;
        width: 230px;

        border-radius: 5px;
        border-style: none;

        font-size: 17px;

        background: #8257E6;
        color: #FFF;
    }

    button:hover { 
        filter: brightness(1.2);
        transition: all 0.7s;
    }
`;

export const DispositivosContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    height: 80%;
    width: 90%;

    gap: 0 10%;
        
    li { 
        list-style-type: none;
    }
    
    .disp-onlines, .disp-offlines {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        
        height: 30%;
        width: 17%;

        padding: 5px;

        border-radius: 5px;

        p {
            margin-top: 5px;

            font-weight: 200;

            color: #FFF;
        }
    }
    
    .disp-onlines {
        border: 1px solid #1fbe0e;
    }

    .disp-offlines {
        border: 1px solid #eb3728;
    }
`;