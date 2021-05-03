import React, { useContext, useReducer } from "react";
import { AuthContext } from "../../auth/AuthContext";
import { authReducer } from "../../auth/authReducer";
import { types } from "../../types/types";

export const LoginScreen = ({ history }) => {
  // props history lo tenemos gracias a react router

  const { dispatch } = useContext(AuthContext);

  const handleLogin = () => {
    // el push nos redirecciona a otra pagina usando react router
    //history.push("/");
    // el replace lo que hace es reemplazar el historail, lo cual evitar usar el boton de atras
    dispatch({
      type: types.login,
      payload: {
        name: "Alejandro",
      },
    });
    history.replace("/");
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
