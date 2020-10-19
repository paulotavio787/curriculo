import React from "react";
import PageDefault from '../../components/page default';
import {Box} from "./styles"

const Sobre = () => {
    return (
        <PageDefault>
            <Box>
                <div>
                    <h1>Sobre Mim</h1>
                    <p>
                        Tenho 15 anos, e curso o 1º ano do ensino medio.
                        Iniciei meus estudos em progrmação aos 11 anos,
                        por conta própria, dos 11 aos 13 anos, foquei meus estudos
                        em desenvolvimento de games, mas, após essa jornada percebi
                        que não era aquilo que eu queria, então, entrei no mundo do
                        desenvolvimento web, e mobile. Apartir disso e de varias pesquisas
                        decidi me centrar a principio em js, tendo como principal fonte de
                        estudos os conteudos gratuitos da Rocket Seat, Alura, e Documentações. 
                        Atualmente tenho o objetivo de me tornar um programador full stack, portanto 
                        divido meu foco tanto para front-end em js através de frameworks como React, e
                        React Native, quanto para back-end em node-js através da stack MERN, sendo melhor em front-end
                    </p>
                </div>

            </Box>
        </PageDefault>
    );
}

export default Sobre