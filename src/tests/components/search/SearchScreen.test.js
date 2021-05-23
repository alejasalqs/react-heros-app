import React from "react";
import { shallow } from "enzyme";
import { SearchScreen } from "../../../components/search/SearchScreen";
import { MemoryRouter, Route } from "react-router";

describe("Pruebas en el componente <SearchScreen />", () => {
  const historyMock = {
    replace: jest.fn(),
  };
  const authContext = {
    dispatch: jest.fn(),
  };

  test("Debe de mostrarse correctamente ", () => {
    const wrapper = shallow(
      <MemoryRouter initialEntries={["/search"]}>
        <Route path="/search" component={SearchScreen} />
      </MemoryRouter>
    );
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe mostrar a batman y el input con el valor del queryString ", () => {
    const wrapper = shallow(
      <MemoryRouter initialEntries={["/search?q=batman"]}>
        <Route path="/search" component={SearchScreen} />
      </MemoryRouter>
    );

    expect(wrapper.find("input").prop("value")).toBe("batman");
    expect(wrapper.find("HeroCard").exists()).toBe(true);
  });
});
