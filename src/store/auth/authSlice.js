import { createSlice } from '@reduxjs/toolkit';

let initialState = {
  status: 'checking', // 'checking', 'authenticated'
  uid: null,
  email: null,
  displayName: null,
  photoURL: null,
  errorMessage: null,
  success: true,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    login: (state, { payload }) => {
      state.status = 'authenticated';
      state.uid = payload.uid;
      state.email = payload.email;
      state.displayName = payload.displayName;
      state.photoURL = payload.photoURL;
      state.errorMessage = null;
      state.success = true;
    },
    logout: (state, { payload }) => {
      state.status = 'not-authenticated';
      state.uid = null;
      state.email = null;
      state.displayName = null;
      state.photoURL = null;
      state.errorMessage = payload?.errorMessage;
      state.success = false;
    },
    checkingCredentials: (state) => {
      state.status = 'checking';
    },
  },
});

export const { login, logout, checkingCredentials } = authSlice.actions;
