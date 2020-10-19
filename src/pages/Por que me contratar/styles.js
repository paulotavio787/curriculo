import styled from "styled-components";

export const Container = styled.div`
    min-width: 100vh;
    min-height: 85vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    *{
        list-style-type: none;
    }

    h1 {
        text-align: center;
        margin-top: 5%;
        font-family: 'Lobster', cursive;
        font-size: 60px;
        font-weight: inherit;
        border-bottom: 5px solid var(--primary);
    }

    li {
        margin: 60px 0 60px 0;
        font-size: 30px;
        height: 50px;
        line-height: 50px;
        padding-left: 10px;
        border-left: 8px solid var(--primary);
    }
`

