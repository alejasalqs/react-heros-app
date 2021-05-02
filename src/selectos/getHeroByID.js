import { heroes } from "../data/heroes";

export const getHeroById = (id) => {
  // con .find() devolvemos el primer match que se encuentre
  return heroes.find((hero) => hero.id === id);
};
