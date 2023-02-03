import { getuser } from '../../src/bases/06-functions';

describe('TEST: 06-funtions', () => {
  test('getUser should return an object', () => {
    const testUser = {
      uid: 'ABCDE123',
      userName: 'Nameless',
    };

    const user = getuser();

    expect(testUser).toEqual(user);
  });
});
