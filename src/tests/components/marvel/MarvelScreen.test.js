import React from 'react';
import { shallow } from "enzyme";
import { MarvelScreen } from "../../../components/marvel/MarvelScreen";

describe("Pruebas en el componente <MarvelScreen />", () => {
  test("Debe hacer match con el snapshot ", () => {
    const wrapper = shallow(<MarvelScreen />);
    expect(wrapper).toMatchSnapshot();
  });
});
