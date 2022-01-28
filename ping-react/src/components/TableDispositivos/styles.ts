import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    height: 100vh;
    width: 100vw;
`;

export const DispositivosContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    height: 70%;
    width: 85%;

    gap: 0 10%;
        
    li { 
        list-style-type: none;
    }
    
    img {
        height: 90px;
    }
    
    .disp-onlines, .disp-offlines {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        
        height: 30%;
        width: 15%;

        

        border-radius: 5px;
    }
    
    .disp-onlines {
        border: 1px solid #1fbe0e;

        p { 
            color: #fff;
        }
    }

    .disp-offlines {
        border: 1px solid #eb3728;

        p { 
            color: #FFF;
        }
    }
`;