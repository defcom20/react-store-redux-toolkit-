import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    isAuthenticated: false,
    isError: null,
    isLoader: false,
  },
  reducers: {
    setIsAuthenticated: (state /* action */) => {
      state.isAuthenticated += 1
    },
    setErrors: (state, action) => {
      state.isError = action.payload;
    },
    setLoader: (state, action) => {
      state.isLoader = action.payload;
    },
    setUser: (state, action) => {
      state.isError = null;
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    resetUser: (state) => {
      state.isError = null;
      state.isAuthenticated = false;
      state.user = null;
    },
  }
})

export const { setIsAuthenticated, setErrors, setLoader, setUser, resetUser } = authSlice.actions