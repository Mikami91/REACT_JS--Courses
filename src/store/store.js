import { configureStore } from '@reduxjs/toolkit';
// Slices
import { authSlice } from './auth';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});
