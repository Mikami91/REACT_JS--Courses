// Data
import { heroes } from '../data/heroes';

const getHeroByName = (name = '') => {
  name = name.toLocaleLowerCase().trim();

  if (name.length === 0) return [];

  return heroes.filter((i) => i.superhero.toLocaleLowerCase().includes(name));
};

export default getHeroByName;
