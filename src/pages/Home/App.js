import React from 'react';
import PageDefault from '../../components/page default';
import perfil from "../../assets/img/perfil.jpg"
import { Div, Title } from './styles';
import github from "../../assets/img/github.png"

const App = () => {
  return (
    <PageDefault>
      <Title>Dados</Title>
      <Div>
        <div className="dadosBox">
          <img src={perfil} className="Perfil" alt="foto de perfil"/>

          <div className="infosBox">

            <div className="infoBox">
              <strong className="pergunta">Telefone:</strong>
              <p className="resposta">(64) 99263-3600</p>
            </div>

            <div className="infoBox">
              <strong className="pergunta">E-mail:</strong>
              <p className="resposta">paulo.oc.paula@gmail.com</p>
            </div>

            <div className="infoBox">
              <strong className="pergunta">Cidade:</strong>
              <p className="cidade">Itumbiara</p>

              <strong className="pergunta">Estado:</strong>
              <p className="resposta">Goiás</p>
            </div>

            <div className="git">
              <a href="https://github.com/paulotavio787" className="gitLink">
                <img className="imgLink" src={github} alt="github img"/>
              Github</a>
            </div>

          </div>
        </div>
      </Div>
    </PageDefault>
  );
}

export default App;
