const todoReducer = (initialState = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case 'ADD':
      return [...initialState, payload];

    case 'EDIT':
      return initialState.map((i) =>
        i.id === payload.id ? { ...i, description: payload.description } : i
      );

    case 'REMOVE':
      return initialState.filter((i) => i.id !== payload);

    case 'TOGGLE':
      return initialState.map((i) =>
        i.id === payload ? { ...i, done: !i.done } : i
      );

    default:
      return initialState;
  }
};

export default todoReducer;
