import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LoginScreen } from "../components/login/LoginScreen";
import { DashboardRoutes } from "./DashboardRoutes";
// Sistema de rutas principal de la aplicacion
export const AppRouter = () => {
  return (
    <Router>
      <>
        <Switch>
          <Route exact path="/login" component={LoginScreen} />

          {/*En este caso no es necesario el exact por las rutas que estan abajo de esta*/}
          <Route path="/" component={DashboardRoutes} />
        </Switch>
      </>
    </Router>
  );
};
