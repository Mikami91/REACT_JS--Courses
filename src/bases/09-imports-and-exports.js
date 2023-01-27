// IMPORTS
// const { heroes } =  require("../data/heroes");
import heroes, { owners } from "../data/heroes.js";

console.log(owners);

export const getHeroById = (id) => heroes.find((heroe) => heroe.id === id);

console.log(getHeroById(2));

const getHeroesByOwner = (owner) => heroes.filter((i) => i.owner === owner);

console.log(getHeroesByOwner("DC"));
