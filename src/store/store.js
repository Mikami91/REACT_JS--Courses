import { configureStore } from '@reduxjs/toolkit';
import { todosApi } from './apis';
// Slices
import { counterSlice } from './slices/counter';
import { pokemonSlice } from './slices/pokemon';

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    pokemons: pokemonSlice.reducer,
    // RTK Query
    [todosApi.reducerPath]: todosApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todosApi.middleware),
});

export default store;
