import React, { useMemo } from "react";
import { Redirect, useParams } from "react-router";
import { getHeroById } from "../../selectos/getHeroByID";

export const HeroScreen = ({ history }) => {
  // Hook de react.router que nos permite obtener los paramentros del url
  // retorna un objeto por lo que se puede desestructurar
  const { heroId } = useParams();

  //const hero = getHeroById(heroId);
  const hero = useMemo(() => getHeroById(heroId), [heroId]);

  if (!hero) {
    // Como buena practica un componente siempre deve devolver algo que no sea un error
    // En este caso si el heroes no existe nos devuleve un redirect a otra pagina
    return <Redirect to="/marvel" />;
  }

  const {
    superhero,
    alter_ego,
    first_appearance,
    characters,
    publisher,
  } = hero;

  const handleReturn = () => {
    history.goBack();
  };

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={`../Assets/heroes/${heroId}.jpg`}
          className="img-thumbnail animate__animated animate__fadeInLeft"
          alt={superhero}
        />
      </div>
      <div className="col-8 animate__animated animate__fadeIn">
        <h3>{superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter ego: </b>
            {alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publisher: </b>
            {publisher}
          </li>
          <li className="list-group-item">
            <b>Firts apperance: </b>
            {first_appearance}
          </li>
        </ul>
        <h5>Characters:</h5>
        <p>{characters}</p>
        <button className="btn btn-outline-info" onClick={handleReturn}>
          Return
        </button>
      </div>
    </div>
  );
};
