import styled from "styled-components";

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: 60vh;
    min-height: 60vh;

    div {
        width: 70%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    h1 {
        width: 400px;
        font-size: 70px;
        border-bottom: 5px solid var(--primary);
    }
    
    p {
        text-align: justify;
        font-size: 20px;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: lighter;
        line-height: 38px;
        padding: 10px;
        transition: .2s;
    }

    p:hover{
        border-bottom: 5px solid var(--primary);
    }

`