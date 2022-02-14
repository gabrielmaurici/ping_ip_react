import styled from 'styled-components';

export const ModalOverlay = styled.div`
    width: 100vw;
    height: 100vh;

    background-color: rgb(0, 0, 0 ,0.7);

    position: fixed;
    top: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    opacity: 1;

    z-index: 999;
`

export const ModalOverlayActive = styled.div`
    opacity: 1;
`;

export const Modal = styled.div`
    padding: 2.0rem;
    position: relative;
    z-index: 1;
    
    background: #22272E;
    border-radius: 5px;
`;

export const FormularioDisp = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 500px;

    gap: 1.5rem;

    .titulo {
        display: flex;
        align-items: center;
        justify-content: space-between;

        width: 100%;

        h3 {
            color: #FFF;
        
            font-weight: 500;
            font-size: 18px;
        }

        img {
            height: 25px;
            cursor: pointer;
        }

        img:hover { 
            filter: blur(0.8px);
            transition: all 0.5s;
        }
    }

    input, select { 
        height: 2.5rem;
        width: 100%;

        padding: 0 8px;

        border: 1px solid;
        border-radius: 3px;

        color: #5e5e5e;
        font-size:16px;
        background: #FFF;
    }

    input::placeholder {
        font-size: 16px;

        color: #858585;
    }

    input:focus {
        border: 1px solid #8257E6;
        box-shadow: 0 0 5px 0 #8257E6;
    }

    select::placeholder {
        font-size: 16px;

        color: #858585;
    }

    select:focus {
        border: 1px solid #8257E6;
        box-shadow: 0 0 5px 0 #8257E6;
    }

    .btn-group {
        display: flex;
        justify-content: end;

        gap:10px;
        width: 100%;

        button {
            height: 40px;
            width: 140px;
        }

        button:hover { 
            filter: brightness(1.3);
            transition: all 0.7s;
        }

        .btn-salvar {
            background: #8257E6;
            
            border: 1px solid #8257E6;
            border-radius: 4px;

            color: #FFF;
        }

        .btn-limpar {
            background: #e8723b;

            border: 1px solid #e8723b;
            border-radius: 4px;

            color: #FFF;
        }
    }
    
`;