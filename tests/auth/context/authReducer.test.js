// Contexts
import { authReducer } from '../../../src/auth';
// Action Types
import { types } from '../../../src/auth';

describe('TEST: authReducer', () => {
  test('Should return initial state', () => {
    const state = authReducer({ logged: false }, {});
    expect(state).toEqual({ logged: false });
  });

  test('Should call LOGIN action', () => {
    const action = {
      type: types.login,
      payload: {
        id: '123',
        name: 'Mikami',
      },
    };

    const state = authReducer({ logged: false }, action);
    expect(state).toEqual({
      logged: true,
      user: action.payload,
    });
  });

  test('Should call LOGOUT action', () => {
    const state = {
      logged: true,
      user: {
        id: '123',
        name: 'Mikami',
      },
    };

    const action = {
      type: types.logout,
    };

    const newState = authReducer(state, action);

    expect(newState).toEqual({
      logged: false,
    });
  });
});
