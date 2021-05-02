import React from "react";
import { getHeroByPublisher } from "../../selectos/getHeroesByPublisher";

// por props enviamos el publisher con el cual filtramos dc o marvel
export const HeroList = ({ publisher }) => {
  const heros = getHeroByPublisher(publisher);
  return (
    <ul>
      {heros.map((hero) => (
        <li key={hero.id}>{hero.superhero}</li>
      ))}
    </ul>
  );
};
