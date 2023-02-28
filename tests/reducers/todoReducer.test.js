import todoReducer from '../../src/reducers/todoReducer';

describe('TEST: todoReducer', () => {
  const initialState = [
    {
      id: 1,
      description: 'Test description',
      done: false,
    },
  ];

  test('Should return initial state', () => {
    const newState = todoReducer(initialState, {});
    expect(newState).toBe(initialState);
  });

  test('Should add a todo', () => {
    const action = {
      type: 'ADD',
      payload: {
        id: 2,
        description: 'Description 2',
        done: false,
      },
    };

    const newState = todoReducer(initialState, action);
    expect(newState.length).toBe(2);
    expect(newState).toContain(action.payload);
  });

  test('Should remove a todo', () => {
    const action = {
      type: 'REMOVE',
      payload: 2,
    };

    const newState = todoReducer(initialState, action);
    expect(newState.length).toBe(1);
  });

  test('Should toggle a todo', () => {
    const action = {
      type: 'TOGGLE',
      payload: 1,
    };

    const newState = todoReducer(initialState, action);
    expect(newState[0].done).toBe(true);
  });
});
