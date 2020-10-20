import React from "react";
import PageDefault from "../../components/page default";
import SearchGit from "../../assets/img/searchgit.png";
import anomia from "../../assets/img/anomia.png";
import pofilx from "../../assets/img/poflix.png";
import AEB from "../../assets/img/AEB.png"
import { Box } from "./styles";
import { Title } from "../Home/styles";

const openAEB = () => {
    window.open("https://obsat.org.br/hackathonespacial/resultado.html")
}

const Portifolio = () => {
    return (
        <PageDefault>
            <Title>Portfólio</Title>
            <Box>
                <div className="AppBox">
                    <a href="https://www.anomiagaba.ml/" className="AppLink">
                        <img src={anomia} className="logo" alt="logo anomia"/>
                        <h1 className="titleApp">Anomia</h1>
                    </a>
                </div>

                <div className="AppBox">
                    <a href="https://search-gitihub.vercel.app/" className="AppLink">
                        <img src={SearchGit} className="logo" alt="logo Search Git"/>
                        <h1 className="titleApp">Search Git</h1>
                    </a>
                </div>

                <div className="AppBox">
                    <a href="https://poflix.vercel.app/" className="AppLink" type="button">
                        <img src={pofilx} className="logo" alt="logo Poflix"/>
                        <h1 className="titleApp">Poflix</h1>
                    </a>
                </div>

                <div className="AppBox">
                    <a href="https://www.instagram.com/p/CE4pCooF9bI/?igshid=vhw65yxd7typ" id="AEB" className="AppLink" onClick={openAEB}>
                        <img src={AEB} className="logo" alt="logo AEB"/>
                        <h1 className="titleApp">
                            2º lugar
                            <br />
                            na hackathon 
                            <br />
                            espacial AEB
                        </h1>
                    </a>
                </div>
            </Box>
        </PageDefault>
    );
}

export default Portifolio