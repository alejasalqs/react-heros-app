import React from "react";

export const LoginScreen = ({ history }) => {
  // props history lo tenemos gracias a react router
  const handleLogin = () => {
    // el push nos redirecciona a otra pagina usando react router
    //history.push("/");
    // el replace lo que hace es reemplazar el historail, lo cual evitar usar el boton de atras
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
