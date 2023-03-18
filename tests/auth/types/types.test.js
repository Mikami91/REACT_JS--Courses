// Types
import { types } from '../../../src/auth';

describe('TEST: types', () => {
  test('Should return types', () => {
    expect(types).toEqual({
      login: 'LOGIN',
      logout: 'LOGOUT',
    });
  });
});
