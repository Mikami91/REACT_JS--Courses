import { getHeroByIdAsync } from '../../src/bases/10-promises';

describe('TEST: 10-promises', () => {
  test('getHeroeByIdAsync should return a hero', (done) => {
    const id = 1;
    getHeroByIdAsync(id).then((hero) => {
      expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' });

      // This tells Jest that the process is finished
      done();
    });
  });

  test('getHeroeByIdAsync should return a error if not exist hero ID', (done) => {
    const id = 100;
    getHeroByIdAsync(id).catch((error) => {
      expect(error).toBe('Not found hero ID: ' + id);

      // This tells Jest that the process is finished
      done();
    });
  });
});
