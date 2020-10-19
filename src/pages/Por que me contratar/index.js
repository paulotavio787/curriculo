import React from "react";
import PageDefault from "../../components/page default";
import { Title } from "../Home/styles";
import {Container} from "./styles"

const Porques = () => {
    return (
        <PageDefault>
            <Container>
                <h1>Por Que Me Contratar</h1>
                <ul>
                    <li>Tenho muita sede de conhecimento</li>
                    <li>Trabalho bem em grupo</li>
                    <li>Sou muito focado em meus objetivos</li>
                    <li>Aprendo muito rapido</li>
                    <li>Sou criativo</li>
                    <li>Tenho facilidade em desenvolver soluções</li>
                    <li>Tenho muito a aprender e sei disso</li>
                </ul>
            </Container>
        </PageDefault>
    );
}

export default Porques