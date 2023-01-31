/** @format */

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  user: {},
  usersConnections: []
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;

      state.user = action.payload

    },
    logout: (state) => {
      state.isLoggedIn = false;
    },
    getConnections: (state, action) => {


      let filtered = [];
      if (state.user.role === 'protege') {
        filtered = action.payload.filter((item) => state.user._id === item.protege)

      } else {
        filtered = action.payload.filter((item) => state.user._id === item.mentor)
      }
      if (state.usersConnections?.length !== filtered.length) {
        state.usersConnections = [...filtered]
      }
    }
  },
});

export const { login, logout, getConnections } = loginSlice.actions;

export default loginSlice.reducer;
