import { number } from 'prop-types';
import { returnArray } from '../../src/bases/08-arrays-destructuring';

describe('TEST: 08-arrays-destructuring', () => {
  test('should return a string and a number', () => {
    const [letters, numbers] = returnArray();

    expect(letters).toBe('ABC');
    expect(numbers).toBe(123);

    // Other flexible way
    expect(letters).toEqual(expect.any(String));
  });
});
