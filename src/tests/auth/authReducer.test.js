import { authReducer } from "../../auth/authReducer";
import { types } from "../../types/types";

describe("Pruebas en authReducer", () => {
  test("Debe retornar el estado por defecto ", () => {
    const state = authReducer({ logged: false }, {});
    expect(state).toEqual({ logged: false });
  });

  test("Debe de autenticar el name del usuario ", () => {
    const action = {
      type: types.login,
      payload: {
        name: "Andres",
      },
    };
    const state = authReducer({ logged: false }, action);
    expect(state).toEqual({ logged: true, name: "Andres" });
  });

  test("Debe de borrar el name del usuario y poner logged en false ", () => {
    const action = {
      type: types.logout,
    };
    const state = authReducer({ logged: true, name: "Andres" }, action);
    expect(state).toEqual({ logged: false });
  });
});
