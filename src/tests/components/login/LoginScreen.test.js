import React from "react";
import { shallow } from "enzyme";
import { AuthContext } from "../../../auth/AuthContext";
import { LoginScreen } from "../../../components/login/LoginScreen";
import { types } from "../../../types/types";

describe("Pruebas en el componente <LoginScreen/>", () => {
  const historyMock = {
    replace: jest.fn(),
  };
  const authContext = {
    dispatch: jest.fn(),
  };
  const wrapper = shallow(
    <AuthContext.Provider value={authContext}>
      <LoginScreen history={historyMock} />
    </AuthContext.Provider>
  );
  test("Debe de mostrarse correctamente ", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de realizar el dispatch y la navegacion ", () => {
    wrapper.find("button").prop("onClick")();
    expect(authContext.dispatch).toHaveBeenCalledWith({
      type: types.login,
      payload: {
        name: "Alejandro",
      },
    });

    expect(historyMock.replace).toHaveBeenCalled();
  });
});
