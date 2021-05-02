import React from "react";
import { Redirect, Route, Switch } from "react-router";
import { DcScreen } from "../components/dc/DcScreen";
import { HeroScreen } from "../components/heroes/HeroScreen";
import { MarvelScreen } from "../components/marvel/MarvelScreen";
import { Navbar } from "../components/ui/Navbar";
// Router para la aplicacion cuando se esta logeado, son rutas hijas
// La diferencia de este con el principal es que no tiene la etiqueta <Router />
export const DashboardRoutes = () => {
  return (
    <>
      <Navbar />

      <div className="container">
        <Switch>
          <Route exact path="/marvel" component={MarvelScreen} />
          <Route exact path="/hero/:heroId" component={HeroScreen} />
          <Route exact path="/dc" component={DcScreen} />
          <Redirect path="/marvel" />
        </Switch>
      </div>
    </>
  );
};
