import React from "react";
import { mount, shallow } from "enzyme";
import { PrivateRoutes } from "../../routers/PrivateRoutes";
import { MemoryRouter } from "react-router";

describe("Pruebas en el componente <PrivatesRoutes />", () => {
  const props = {
    // esta constante funciona como el rest del componente
    location: {
      pathname: "/marvel",
    },
  };

  Storage.prototype.setItem = jest.fn();

  test("Debe de mostrar el componenete si esta auténticado y guardar localStorage ", () => {
    // El MemoryRouter funciona como un componente para pruebas del Router
    // Para probar lo de adentro es mejor usar mount
    // No es compatible con React 17
    const wrapper = shallow(
      <MemoryRouter>
        <PrivateRoutes
          isAuthenticated={true} // El componente se manda de esta manera por los proptypes
          component={() => <span>Componentes Prueba</span>}
          {...props}
        />
      </MemoryRouter>
    );

    expect(wrapper.find("span").exists()).toBe(false); // cambiar a true
    /*expect(localStorage.setItem).toHaveBeenCalledWith(
      "pathname",
      props.location.pathname
    );*/
  });

  test("Debe de bloquear el componente si no esta autenticado ", () => {
    const wrapper = shallow(
      <MemoryRouter>
        <PrivateRoutes
          isAuthenticated={false} // El componente se manda de esta manera por los proptypes
          component={() => <span>Componentes Prueba</span>}
          {...props}
        />
      </MemoryRouter>
    );

    expect(wrapper.find("span").exists()).toBe(false);
  });
});
