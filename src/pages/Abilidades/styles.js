import styled from "styled-components";

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    justify-content: center;
    align-items: center;

    .logo{
        width: 125px;
        height: 125px;
        border-radius: 50%;
        margin-right: 10px;
        transition: .4s;
    }
    .frameworkBox{
        display: flex;
        align-items: center;
        border: 4px solid var(--primary);
        padding: 20px;
        border-radius: 20px;
        margin: 25px;
    }
    
    .frameworkBox:hover{
        .logo{
            width: 200px;
            height: 200px;
        }
        .ftitle{
            font-size: 48px;
        }
    }

    .ftitle{
        margin-left: 10px;
        transition: .4s;
    }

`;