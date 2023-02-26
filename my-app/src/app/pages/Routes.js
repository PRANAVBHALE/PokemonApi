import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//app component
import App from "./App/App";
import PokemonDetailPage from "./PokemonDetailPage/PokemonDetailPage";
import Header from "../components/Header/Header";

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/pokemon/:name" exact component={PokemonDetailPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
