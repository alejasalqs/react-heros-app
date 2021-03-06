import React from "react";
import PropTypes from "prop-types";
import { Redirect, Route } from "react-router";

export const PublicRoutes = ({
  isAuthenticated,
  component: Component, // Se renombre la variable component por Component
  ...rest // Los demas elementos
}) => {
  return (
    <Route
      {...rest}
      component={(props) =>
        !isAuthenticated ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

PublicRoutes.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};
