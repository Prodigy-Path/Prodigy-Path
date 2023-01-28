/** @format */

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: true,
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    login: (state) => {
      state.opened = true;
    },
    logout: (state) => {
      state.opened = false;
    },
  },
});

export const { login, logout } = loginSlice.actions;

export default loginSlice.reducer;
