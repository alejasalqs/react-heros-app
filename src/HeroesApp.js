import React, { useEffect, useReducer } from "react";
import { AuthContext } from "./auth/AuthContext";
import { authReducer } from "./auth/authReducer";
import { AppRouter } from "./routers/AppRouter";

const init = () => {
  // La funcion init lo que hace es ir al localStorage a buscar un objeto
  // Si el objeto existe significa que esta loggeado, si no exite devuelve un obj logged false
  // Lo que devuelva será el initialState por defecto
  return (
    JSON.parse(localStorage.getItem("user")) || {
      logged: false,
    }
  );
};

export const HeroesApp = () => {
  const [user, dispatch] = useReducer(authReducer, {}, init);

  useEffect(() => {
    // Cada vez que cambia el usuario guarda en localStorage
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      <AppRouter />
    </AuthContext.Provider>
  );
};
