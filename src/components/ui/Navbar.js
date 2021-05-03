import React, { useContext } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../types/types";

// Navbar no es una ruta, es solo un compoenent por lo que no tiene accesos a el prop de history
export const Navbar = () => {
  const { user, dispatch } = useContext(AuthContext);

  // Hook de reac-router para rurilizar el history no por props
  const history = useHistory();

  const handleLogOut = () => {
    dispatch({
      type: types.logout,
    });
    history.replace("/login");
  };
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Asociaciones
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/marvel"
          >
            Marvel
          </NavLink>

          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/dc"
          >
            DC
          </NavLink>

          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/search"
          >
            Search
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul className="navbar-nav ml-auto">
          <span className="nav-item nav-link">{user.name}</span>
          <button className="nav-item nav-link btn" onClick={handleLogOut}>
            Logout
          </button>
        </ul>
      </div>
    </nav>
  );
};
