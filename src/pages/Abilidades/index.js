import React from "react";
import PageDefault from "../../components/page default";
import { Div } from "./styles";
import css from "../../assets/img/cssLogo.webp";
import cs from "../../assets/img/csLogo.png";
import html from "../../assets/img/htmlLogo.webp";
import js from "../../assets/img/jsLogo.png";
import nodeJs from "../../assets/img/nodeJsLogo.jpg";
import ReactJs from "../../assets/img/ReactLogo.webp";
import reactNative from "../../assets/img/reactNativeLogo.png";
import { Title } from "../Home/styles";
const Abilidades = () => {
    return (
        <PageDefault>
            <Title>Frameworks Utilizados</Title>
            <Div>
                <div className="frameworkBox">
                    <img src={js} alt="logo do Framework" className="logo" alt="JS logo" />
                    <h1 className="ftitle">Java Script Avançado</h1>
                </div>
                <div className="frameworkBox">
                    <img src={html} alt="logo do Framework" className="logo" alt="html logo" />
                    <h1 className="ftitle">html Avançado</h1>
                </div>
                <div className="frameworkBox">
                    <img src={css} alt="logo do Framework" className="logo" alt="css logo"/>
                    <h1 className="ftitle">css Avançado</h1>
                </div>
                <div className="frameworkBox">
                    <img src={ReactJs} alt="logo do Framework" className="logo" alt="react js logo" />
                    <h1 className="ftitle">React-Js Avançado</h1>
                </div>
                <div className="frameworkBox">
                    <img src={reactNative} alt="logo do Framework" className="logo" alt="react native logo" />
                    <h1 className="ftitle">React-Native Intermediario</h1>
                </div>
                <div className="frameworkBox">
                    <img src={nodeJs} alt="logo do Framework" className="logo" alt="nodejs logo" />
                    <h1 className="ftitle">Node-Js Intermediario</h1>
                </div>
                <div className="frameworkBox">
                    <img src={cs} alt="logo do Framework" className="logo" alt="cs logo" />
                    <h1 className="ftitle">C Sharp Basico</h1>
                </div>
            </Div>
        </PageDefault>
    );
}

export default Abilidades