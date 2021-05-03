import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import { LoginScreen } from "../components/login/LoginScreen";
import { DashboardRoutes } from "./DashboardRoutes";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";
// Sistema de rutas principal de la aplicacion
export const AppRouter = () => {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <>
        <Switch>
          <PublicRoutes
            exact
            path="/login"
            component={LoginScreen}
            isAuthenticated={user.logged}
          />

          {/*En este caso no es necesario el exact por las rutas que estan abajo de esta*/}
          <PrivateRoutes
            path="/"
            component={DashboardRoutes}
            isAuthenticated={user.logged}
          />
        </Switch>
      </>
    </Router>
  );
};
