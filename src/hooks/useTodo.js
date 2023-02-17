import { useEffect, useReducer } from 'react';
// Reducers
import todoReducer from '../reducers/todoReducer';

const init = () => JSON.parse(localStorage.getItem('state')) || [];

const useTodo = (initialState = []) => {
  const [state, dispatch] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem('state', JSON.stringify(state));
  }, [state]);

  const onAddTodo = (todo) => {
    const action = {
      type: 'ADD',
      payload: todo,
    };

    dispatch(action);
  };

  const onDeleteTodo = (id) => {
    const action = {
      type: 'REMOVE',
      payload: id,
    };

    dispatch(action);
  };

  const onToggleTodo = (id) => {
    const action = {
      type: 'TOGGLE',
      payload: id,
    };

    dispatch(action);
  };

  return {
    state,
    ...state,
    onAddTodo,
    onToggleTodo,
    onDeleteTodo,
  };
};

export default useTodo;
