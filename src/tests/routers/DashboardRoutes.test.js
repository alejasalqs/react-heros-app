import React from "react";
import { shallow } from "enzyme";
import { AuthContext } from "../../auth/AuthContext";
import { DashboardRoutes } from "../../routers/DashboardRoutes";
import { MemoryRouter } from "react-router";

describe("Pruebas en el componente <DashboardRoutes/>", () => {
  const contextValue = {
    dispatch: jest.fn(),
    user: {
      logged: false,
      name: "Alejo",
    },
  };
  test("Debe de mostrarse correctamente", () => {
    // Es mejor usar mount()
    const wrapper = shallow(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
          <DashboardRoutes />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(wrapper).toMatchSnapshot();
    //expect(wrapper.find(".text-info").text().trim()).toBe("Alejo");
  });
});
