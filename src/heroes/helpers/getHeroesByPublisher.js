// Data
import { heroes } from '../data/heroes';

const getHeroesByPublisher = (publisher) => {
  const validPublisher = ['DC Comics', 'Marvel Comics'];

  if (!validPublisher.includes(publisher)) {
    throw new Error(`${publisher} not found.`);
  }

  return heroes.filter((i) => i.publisher === publisher);
};

export default getHeroesByPublisher;
