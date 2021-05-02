import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HeroScreen } from "../components/heroes/HeroScreen";
import { LoginScreen } from "../components/login/LoginScreen";
import { Navbar } from "../components/ui/Navbar";
// Sistema de rutas principal de la aplicacion
export const AppRouter = () => {
  return (
    <Router>
      <>
        <Navbar />
        <Switch>
          <Route exact path="/login" component={LoginScreen} />
          <Route exact path="/" component={HeroScreen} />
        </Switch>
      </>
    </Router>
  );
};
