import styled from "styled-components";

export const Nav = styled.nav`
    width: 100%;
    height: 94px;
    
    position: fixed;
    z-index: 100;
  
    top: 0;
    left: 0;
    right: 0;
    padding-left: 5%;
    padding-right: 5%;
  
    background: var(--black);
    border-bottom: 1px solid var(--primary);

    .title{
        text-align: center;
        margin: 0;
        color: var(--primary);
        font-family: 'Lobster', cursive;
        font-size: 45px;
        font-weight: inherit;
        padding-bottom: 10px;
    }

`;
export const NavBox = styled.nav`
    width: 100%;
    height: 47px;
  
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 100;
  
    top: 0;
    left: 0;
    right: 0;
    padding-left: 5%;
    padding-right: 5%;
    margin-top: 5%;
    
    background: var(--black);
    border-bottom: 1px solid var(--primary);

    .nav{
    color: var(--primary);
    box-sizing: border-box;
    cursor: pointer;
    padding: 14px 12px;
    margin: 10px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    outline: none;
    text-decoration: none;
    display: inline-block;
    transition: .5s;
    }
    .nav:hover{
    border: 1px solid transparent;
    border-radius: 5px;
    background-color: var(--primary);
    color: var(--black);
    font-size: 26px;
  }
  `;