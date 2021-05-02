import React from "react";
import { getHeroByPublisher } from "../../selectos/getHeroesByPublisher";
import { HeroCard } from "./HeroCard";

// por props enviamos el publisher con el cual filtramos dc o marvel
// de esta manera {...hero} se envia un objeto con las propiedades separadas a los prop
export const HeroList = ({ publisher }) => {
  const heros = getHeroByPublisher(publisher);
  return (
    <div className="card-columns">
      {heros.map((hero) => (
        <HeroCard key={hero.id} {...hero} />
      ))}
    </div>
  );
};
