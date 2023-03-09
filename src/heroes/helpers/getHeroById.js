// Data
import { heroes } from '../data/heroes';

const getHeroById = (id) => {
  return heroes.find((i) => (i.id === id));
};

export default getHeroById;
