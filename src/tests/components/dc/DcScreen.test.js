import React from 'react';
import { shallow } from "enzyme";
import { DcScreen } from "../../../components/dc/DcScreen";

describe("Pruebas en el componente <DcScreen />", () => {
  test("Debe hacer match con el snapshot ", () => {
    const wrapper = shallow(<DcScreen />);
    expect(wrapper).toMatchSnapshot();
  });
});
