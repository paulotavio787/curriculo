import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import './index.css';
import App from './pages/Home/App';
import Abilidades from './pages/Abilidades';
import Portifolio from './pages/Portifolio';
import Sobre from "./pages/Sobre"
import Porques from "./pages/Por que me contratar"

ReactDOM.render(
  <BrowserRouter>

    <Switch>
      <Route path="/" component={App} exact/>
      <Route path="/abilidades" component={Abilidades}/>
      <Route path="/portifolio" component={Portifolio}/>
      <Route path="/sobre" component={Sobre}/>
      <Route path="/porque" component={Porques}/>
    </Switch>

  </BrowserRouter>,
  document.getElementById('root')
);
