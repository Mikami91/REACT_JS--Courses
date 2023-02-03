// IMPORTS
// const { heroes } =  require("../data/heroes");
import heroes from '../data/heroes.js';

export const getHeroById = (id) => heroes.find((heroe) => heroe.id === id);

export const getHeroesByOwner = (owner) =>
  heroes.filter((i) => i.owner === owner);
