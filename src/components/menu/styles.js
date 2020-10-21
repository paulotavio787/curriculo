import styled from "styled-components";

export const Nav = styled.nav`
    min-width: 100%;
    height: 94px;
    display: flex;
    align-items: center;
    justify-content: center;
    
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
        font-size: 4.26vh;
        font-weight: inherit;
        padding-bottom: 10px;
        display: inline
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

    @media screen and (max-width: 768px) {
        width: 0%;
        height: 100%;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: fixed;

        .nav {
            margin: 70px;
            font-size: 0px;
            border-bottom: 0;
            transition: .4s;
        }
    }
`;

export const NavBar = styled.div`
    width: 100vh;
    height: 93px;

    .NavButton{
        width: 6.56vh;
        height: 6.56vh;
        position: fixed;
        top: 2.2%;
        display: none;
        z-index: 1;
    }

    @media screen and (max-width: 768px) {
            display: flex;
            align-items: center;
            justify-content: center;
            position: fixed;

            .NavButton {
                display: block;
                position: absolute;
                cursor: pointer;
                left: 90%;
                top: 50%;
                transform: translate(-5%, -50%)
            }

            @media screen and (max-width: 768px) {
            display: flex;
            align-items: center;
            justify-content: center;
            position: fixed;
            
            .NavButton {
                display: block;
                position: absolute;
                cursor: pointer;
                left: 90%;
                top: 50%;
                transform: translate(-5%, -50%);
                z-index: 1;
            }

            &&:hover {
                ${NavBox}{
                    transition: .7s;
                    width: 100%;
                    height: 100%;
                    padding: 0;
                    margin: 0;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    position: fixed;
                    z-index: -1;

                    .nav {
                        margin: 70px;
                        font-size: 26px;
                        border-bottom: 5px solid var(--primary);
                        transition: .4s;
                        margin-top: 100px
                    }
                }
            }
        }
    }
`