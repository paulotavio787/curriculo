import styled from "styled-components";

export const Div = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .Perfil{
        width: 422px;
        height: 422px;
        margin: 30px;
        border-radius: 30px;
    }

    .pergunta{
        margin: 10px;
        font-size: 25px;
    }

    .resposta{
        font-size: 20px;
    }
    
    .infoBox{
        display: flex;
        align-items: center
    }
    .infosBox{
        display: flex;
        flex-direction: column;
        border: 3px solid var(--primary);
        padding: 10px;
        border-radius: 15px;
        justify-content: center;
    }

    .git{
        display: flex;
        justify-content: center;
    }

    .gitLink {
    color: var(--white);
    border: 1px solid var(--white);
    box-sizing: border-box;
    cursor: pointer;
    padding: 16px 24px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    outline: none;
    border-radius: 5px;
    text-decoration: none;
    display: flex;
    transition: opacity .3s;
    align-items: center;

  }
  .gitLink:hover {
    opacity: .5;
  }

    .imgLink{
        width: 30px;
        height: 30px;
    }

    .cidade{
        margin-right: 20%;
        font-size: 20px;
    }
    .dadosBox{
        display: flex;
    }
`;

export const Title = styled.h1`
    text-align: center;
    margin-top: 5%;
    font-family: 'Lobster', cursive;
    font-size: 60px;
    font-weight: inherit;
`;