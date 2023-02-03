import { getGiphyGif } from '../../src/bases/12-async-await';

describe('TEST: 12-async-await', () => {
  test('getGiphyGif should return a url', async () => {
    const url = await getGiphyGif();

    expect(typeof url).toBe('string');
  });
});
