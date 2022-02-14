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
        filter: brightness(1.3);
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
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        height: 100%;
        width: 100%;

        list-style-type: none;

        gap:10px;

        button {
            height: 1.8rem;
            width: 100%;
            
            padding: 2px;
            
            border-radius: 5px;
        }

        button:hover {
            filter: brightness(1.2);
        }
        

        .btn {
            display: flex;
            
            width: 90%;
            
            gap:8px;
        }

        .btn-editar {
            background: #A971FF;
            border: 1px solid #A971FF;
        }
        
        .btn-deletar {
            background: #E8723B;
            border: 1px solid #E8723B;

        }
    }

    .disp-onlines, .disp-offlines {
        display: flex;
        flex-direction: c
        justify-content: center;
        align-items: center;
        text-align: center;
        
        height: 30%;
        width: 17%;

        padding: 0 3px 0;

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