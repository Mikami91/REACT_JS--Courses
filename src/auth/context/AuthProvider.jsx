// Context
import { useReducer } from 'react';
// Action types
import { types } from '../types/types';
// Contexts
import AuthContext from './AuthContext';
import authReducer from './authReducer';

const init = () => {
  const user = localStorage.getItem('user');
  return {
    logged: !!user,
    user: user,
  };
};

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {}, init);

  const onLogin = (name = '') => {
    const user = {
      id: 'ABC',
      name: name,
      age: 20,
    };

    const action = {
      type: types.login,
      payload: user,
    };

    localStorage.setItem('user', JSON.stringify(user));

    dispatch(action);
  };

  const onLogout = () => {
    const action = {
      type: types.logout,
    };

    localStorage.removeItem('user');

    dispatch(action);
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        login: onLogin,
        logout: onLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
