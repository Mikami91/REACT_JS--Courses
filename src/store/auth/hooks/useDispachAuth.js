import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';

// Thunks
import * as thunks from './../thunks';
// Slices
import { authSlice } from './../authSlice';

export const useDispatchAuth = () => {
  const dispatch = useDispatch();

  return useMemo(
    () =>
      bindActionCreators(
        {
          ...thunks,
          ...authSlice.actions,
        },
        dispatch
      ),
    []
  );
};
