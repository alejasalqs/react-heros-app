import React from "react";
import { shallow } from "enzyme";
import { HeroScreen } from "../../../components/heroes/HeroScreen";
import { MemoryRouter, Route } from "react-router";

describe("Pruebas en el componente <HeroScreen />", () => {
  const historyMock = {
    push: jest.fn(),
    location: {},
    listen: jest.fn(),
    createHref: jest.fn(),
    replace: jest.fn(),
    length: 10,
    goBack: jest.fn(),
  };

  // Esta prueba falla porque no se puede ver lo que hay dentro del wrapper
  test("Debe de mostrar el componente <Redirect /> si no hay parametros en el URL ", () => {
    // Se debe usar mount en este caso
    const wrapper = shallow(
      // InitialEntries es como el url que se va a enviar al ruter
      <MemoryRouter initialEntries={["/hero"]}>
        <HeroScreen history={historyMock} />
      </MemoryRouter>
    );
    expect(wrapper.find("Redirect").exists()).toBe(true);
  });

  test("Debe de  mostrar un heroe si el parametro existe y se encuentra", () => {
    // Se debe usar mount en este caso
    const wrapper = shallow(
      // InitialEntries es como el url que se va a enviar al ruter
      // usando el componente route podemos leer los paramentros
      // que se envian por url en el useParams()
      <MemoryRouter initialEntries={["/hero/marvel-spider"]}>
        <Route path="/hero/:heroId" component={HeroScreen} />
      </MemoryRouter>
    );

    expect(wrapper.find(".row").exists()).toBe(true);
  });

  test("Debe de regresar a la pantalla anterior con push ", () => {
    const historyMock = {
      push: jest.fn(),
      location: {},
      listen: jest.fn(),
      createHref: jest.fn(),
      replace: jest.fn(),
      length: 1,
      goBack: jest.fn(),
    };
    // Se debe usar mount en este caso
    const wrapper = shallow(
      // InitialEntries es como el url que se va a enviar al ruter
      // Aqui el componente es una funcion que devuelve el componente
      // A la funcion se le pasan los propr por paramentro
      <MemoryRouter initialEntries={["/hero/marvel-spider"]}>
        <Route
          path="/hero/:heroId"
          component={(props) => <HeroScreen history={historyMock} />}
        />
      </MemoryRouter>
    );
    wrapper.find("button").prop("onClick")();
    expect(historyMock.push).toHaveBeenCalled();
    expect(historyMock.goBack).not.toHaveBeenCalled();
  });

  test("Si el history es mayor a 2 no se debe llamar la funcion push ", () => {
    const historyMock = {
      push: jest.fn(),
      location: {},
      listen: jest.fn(),
      createHref: jest.fn(),
      replace: jest.fn(),
      length: 10,
      goBack: jest.fn(),
    };
    // Se debe usar mount en este caso
    const wrapper = shallow(
      // InitialEntries es como el url que se va a enviar al ruter
      // Aqui el componente es una funcion que devuelve el componente
      // A la funcion se le pasan los propr por paramentro
      <MemoryRouter initialEntries={["/hero/marvel-spider"]}>
        <Route
          path="/hero/:heroId"
          component={(props) => <HeroScreen history={historyMock} />}
        />
      </MemoryRouter>
    );
    wrapper.find("button").prop("onClick")();
    expect(historyMock.goBack).toHaveBeenCalled();
    expect(historyMock.push).not.toHaveBeenCalled();
  });

  test("Debe llamar el redirect si el heroe no existe ", () => {
    // Se debe usar mount en este caso
    const wrapper = shallow(
      // InitialEntries es como el url que se va a enviar al ruter
      // usando el componente route podemos leer los paramentros
      // que se envian por url en el useParams()
      <MemoryRouter initialEntries={["/hero/marvel-spider234234235344"]}>
        <Route path="/hero/:heroId" component={HeroScreen} />
      </MemoryRouter>
    );

    expect(wrapper.find("Redirect").exists()).toBe(true);
  });
});
