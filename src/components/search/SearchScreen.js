import React, { useMemo } from "react";
import { useLocation } from "react-router";
import { heroes } from "../../data/heroes";
import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../heroes/HeroCard";
import queryString from "query-string"; // -> npm i query-string
import { getHerosByName } from "../../selectos/getHerosByName";

export const SearchScreen = ({ history }) => {
  //hook de react router para obtener el location
  const location = useLocation();

  // Como es dificil trabajar los queryparams instalamos esta libreria para facilitar
  // regresa un obj con los queryparams que existan, si no hay params es undefined
  // para evitar errores se asigna un string vacio
  const { q = "" } = queryString.parse(location.search);

  const [formValues, handleInputChange] = useForm({
    search: q, // definimos el valor del query como defecto por si refrescan el navegador
  });

  const { search } = formValues;

  const heroesFilter = useMemo(() => getHerosByName(search), [q]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // con este push ponemos lo del form de busqueda como query param, sin navegar a otro componente
    history.push(`?q=${search}`);
  };

  return (
    <>
      <h1>Search:</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Search form</h4>
          <hr />
          <form onSubmit={handleSubmit}>
            <input
              className="form-control"
              placeholder="Search"
              name="search"
              onChange={handleInputChange}
              value={search}
            />
            <button type="submit" className="btn btn-block btn-outline-primary">
              Search
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results:</h4>
          <hr />
          {heroesFilter.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  );
};
