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
                    Tenho 15 anos e curso o 1º ano do ensino médio.
                    Iniciei, por conta própria, meus estudos em programação aos 11 anos.
                    Dos 11 aos 13 anos, foquei meus estudos em desenvolvimento de games,
                    mas após essa jornada percebi que não era aquilo que eu queria, então
                    entrei no mundo do desenvolvimento web e mobile. A partir disso e de
                    varias pesquisas decidi me centrar, a principio, em js, tendo como principal
                    fonte de estudos os conteúdos gratuitos da Rocket Seat, Alura e Documentações.
                    Atualmente tenho o objetivo de me tornar um programador full stack, mas divido
                    meu foco tanto para front-end em js, através de frameworks como React e React Native,
                    quanto para back-end em node-js, através da stack MERN, sendo melhor em front-end.
                    </p>
                </div>

            </Box>
        </PageDefault>
    );
}

export default Sobre