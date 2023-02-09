// Helpers
import { getGifs } from '../../src/helpers/getGifs';

describe('TEST: helpers/getGifs', () => {
  test('Should return a gifs array ', async () => {
    const gifs = await getGifs('CR7');

    expect(gifs.length).toBeGreaterThan(0);
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    });
  });
});
