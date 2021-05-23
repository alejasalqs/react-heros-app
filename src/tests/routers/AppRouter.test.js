import React from "react";
import { shallow } from "enzyme";
import { AppRouter } from "../../routers/AppRouter";
import { AuthContext } from "../../auth/AuthContext";

describe("Pruebas en el componente <AppRouter/>", () => {
  const contextValue = {
    dispatch: jest.fn(),
    user: {
      logged: false,
    },
  };
  test("Debe de mostrar el login si no esta autenticado ", () => {
    const wrapper = shallow(
      // Aqui es mejor usar mount
      <AuthContext.Provider value={contextValue}>
        <AppRouter />
      </AuthContext.Provider>
    );

    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de mostrar el componente de marvel si está autenticado ", () => {
    const contextValue = {
      dispatch: jest.fn(),
      user: {
        name: "Alejandro",
        logged: true,
      },
    };
    const wrapper = shallow(
      // Aqui es mejor usar mount
      <AuthContext.Provider value={contextValue}>
        <AppRouter />
      </AuthContext.Provider>
    );

    // Esta prueba falla porque no puede ver dentro del wrapper el navbar
    expect(wrapper.find(".navbar").exists()).toBe(true);
  });
});
