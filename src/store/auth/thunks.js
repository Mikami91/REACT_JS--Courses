// Slices
import { checkingCredentials, login, logout } from './authSlice';
// Firebase
import {
  loginWithEmail,
  logoutFirebase,
  signInWithEmail,
  signInWithGoogle,
} from '../../firebase';

export const checkingAuthentication = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
  };
};

export const startGoogleSingIn = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    const result = await signInWithGoogle();

    if (!result.success) return dispatch(logout(result));

    dispatch(login(result));
  };
};

export const startEmailSingIn = ({ displayName, email, password }) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    const result = await signInWithEmail({ displayName, email, password });

    if (!result.success) return dispatch(logout(result));

    dispatch(login(result));
  };
};

export const startLoginWithEmail = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    const result = await loginWithEmail({ email, password });

    if (!result.success) return dispatch(logout(result));

    dispatch(login(result));
  };
};

export const startLogout = () => {
  return async (dispatch) => {
    await logoutFirebase();

    dispatch(logout());
  };
};
