import React from "react";
import { shallow } from "enzyme";
import { Navbar } from "../../../components/ui/Navbar";
import { AuthContext } from "../../../auth/AuthContext";
import { MemoryRouter, Router } from "react-router";
import { types } from "../../../types/types";

describe("Pruebas en el componente <Navbar/>", () => {
  const historyMock = {
    push: jest.fn(),
    location: {},
    listen: jest.fn(),
    createHref: jest.fn(),
    replace: jest.fn(),
  };
  const contextValue = {
    dispatch: jest.fn(),
    user: {
      logged: true,
      name: "AlejoTest",
    },
  };
  const wrapper = shallow(
    // Es mejor usar mount()
    <AuthContext.Provider value={contextValue}>
      <MemoryRouter>
        <Router history={historyMock}>
          <Navbar />
        </Router>
      </MemoryRouter>
    </AuthContext.Provider>
  ); // Aqui usamos el componente router porque le pasamos el historyMock que creamos para las pruebas

  afterEach(() => {
    // Limpiamos los mocks en cada pruebas
    jest.clearAllMocks();
  });
  test("Debe de mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  // Esta prueba falla porque no podemos ver dentro del wapper
  test("Debe de mostrar correctamente del nombre de usuario ", () => {
    expect(wrapper.find(".text-info").text().trim()).toBe(
      contextValue.user.name
    );
  });

  test("Debe de llamar el logOut y usar history ", () => {
    // Llamamos y ejecutamos la funcion de click de esta manera
    wrapper.find("button").prop("onClick")();

    expect(contextValue.dispatch).toBeCalledWith({
      type: types.logout,
    });

    expect(historyMock.replace).toHaveBeenLastCalledWith("/login");
  });
});
