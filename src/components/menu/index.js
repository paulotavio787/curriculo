import React from "react";
import { Nav, NavBar, NavBox } from "./styles";
import {Link} from "react-router-dom";
import navbar from "../../assets/icons/navbar.png"

const Menu = () => {
    return (
        <>
            <NavBar>
                <Nav>
                    <h1 className="title">Paulo Octavio de Paula</h1>
                    <img src={navbar} alt="navbarbutton" className="NavButton"/>
                </Nav>

                <NavBox>
                    <Link to="/" className="nav">Home</Link>
                    <Link to="/abilidades" className="nav">Habilidades</Link>
                    <Link to="/portifolio" className="nav">Portfólio</Link>
                    <Link to="/sobre" className="nav">Sobre</Link>
                    <Link to="/porque" className="nav">Por que me contratar</Link>
                </NavBox>
            </NavBar>
        </>
    );
}

export default Menu