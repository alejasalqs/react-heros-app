import React, { useContext, useReducer } from "react";
import { AuthContext } from "../../auth/AuthContext";
import { authReducer } from "../../auth/authReducer";
import { types } from "../../types/types";

export const LoginScreen = ({ history }) => {
  // props history lo tenemos gracias a react router

  const { dispatch } = useContext(AuthContext);

  const handleLogin = () => {
    // Revisa si hay una pagina en el localStorage y lo regresa ahi mismo
    const lastPath = localStorage.getItem("pathname") || "/";
    // el push nos redirecciona a otra pagina usando react router
    //history.push("/");
    // el replace lo que hace es reemplazar el historail, lo cual evitar usar el boton de atras
    dispatch({
      type: types.login,
      payload: {
        name: "Alejandro",
      },
    });
    history.replace(lastPath);
  };
  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />
      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};
