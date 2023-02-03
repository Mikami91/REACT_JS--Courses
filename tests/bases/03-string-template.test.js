import { getUserName } from '../../src/bases/03-string-template';

describe('TEST: 03-string-template', () => {
  test('getUserName should return "Hello Mikami"', () => {
    const name = 'Mikami';
    const message = getUserName(name);

    expect(message).toBe(`Hello ${name}`);
  });
});