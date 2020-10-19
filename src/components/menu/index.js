import React from "react";
import { Nav, NavBox } from "./styles";
import {Link} from "react-router-dom";

const Menu = () => {
    return (
        <>
            <Nav>
                <h1 className="title">Paulo Octavio de Paula</h1>
            </Nav>
            <NavBox>
                <Link to="/" className="nav">Home</Link>
                <Link to="/abilidades" className="nav">Habilidades</Link>
                <Link to="/portifolio" className="nav">Portifolio</Link>
                <Link to="/sobre" className="nav">Sobre</Link>
                <Link to="/porque" className="nav">Por que me contratar</Link>
            </NavBox>
        </>
    );
}

export default Menu