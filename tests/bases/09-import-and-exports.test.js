import {
  getHeroById,
  getHeroesByOwner,
} from '../../src/bases/09-imports-and-exports';
import heroes from '../../src/data/heroes';

describe('TEST: 09-import-and-export', () => {
  test('getHeroeById should return a hero by ID', () => {
    const id = 1;
    const hero = getHeroById(id);

    expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
  });

  test('getHeroeById should return "undefined" if a hero ID not exist', () => {
    const id = 99;
    const hero = getHeroById(id);

    expect(hero).toBeFalsy();
  });

  test('getHeroeByOwner should return DC heroes', () => {
    const owner = 'DC';
    const ownerHeroes = getHeroesByOwner(owner);

    expect(ownerHeroes.length).toBe(3);
    expect(ownerHeroes).toEqual(heroes.filter((i) => i.owner === owner));
  });
});
