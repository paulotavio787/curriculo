import styled from "styled-components";

export const Box = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-width: 100vh;
    margin: 10%;

    .logo{
        width: 200px;
        height: 200px;
        transition: .5s;
    }
    .AppBox{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .titleApp{
        font-family: 'Permanent Marker', cursive;
        font-weight: inherit;
        color: #FDE42E;
        font-size: 32;
        opacity: 0%;
        transition: .5s;
        text-align: center;
    }

    .AppLink{
        text-decoration: none;
    }

    .AppBox:hover{
        .titleApp{
            opacity: 100%;
        }

        .logo{
            width: 300px;
            height: 300px;
        }
    }

    @media screen and (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-width: 100vw;
    }
`;