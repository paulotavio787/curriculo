import React from "react";
import Menu from "../menu";
import styled from "styled-components";

const Main = styled.div`
    background-color: var(--darkgray);
    color: var(--white);
    flex: 1;
    padding-top: 10%;
    padding-left: 5%;
    padding-right: 5%;

`;
const PageDefault = ({children}) => (
    <>
        <Menu />
            
            <Main>
                {children}
            </Main>
    </>
);

export default PageDefault