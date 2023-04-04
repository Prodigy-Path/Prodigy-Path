/** @format */

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  user: {},
  usersConnections: [],
  userConnectionsUsers: [],
  checked: false,
  connectionRequestUsers: [],
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = {};
      state.usersConnections = [];
      state.userConnectionsUsers = [];
      state.checked = false;
    },
    setChecked: (state) => {
      state.checked = !state.checked;
    },
    cookieLogin: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    getConnections: (state, action) => {
      let filtered = [];
      if (state.user.role === 'protege') {
        filtered = action.payload.filter(
          (item) => state.user._id === item.protege,
        );
      } else {
        filtered = action.payload.filter(
          (item) => state.user._id === item.mentor,
        );
      }
      if (state.usersConnections?.length !== filtered.length) {
        state.usersConnections = [...filtered];
      }
    },
    convertToNames: (state, action) => {
      if (action.payload.users) {
        state.userConnectionsUsers = [...action.payload.users];
      }
    },
    getConnectionRequests: (state, action) => {
      state.connectionRequestUsers = [...action.payload];
    },
    processConnectionRequest: (state, action) => {
      state.user = action.payload.user
      state.connectionRequestUsers = state.connectionRequestUsers.filter(user => user._id !== action.payload.connection._id)
      if(action.payload.action === 'DELETE') state.userConnectionsUsers = state.userConnectionsUsers.filter(user => user._id !== action.payload.connection._id)
      if(action.payload.action === 'ACCEPT') state.userConnectionsUsers = [...state.userConnectionsUsers, action.payload.connection]
    },
    updateUser: (state,action) => {
      state.user = action.payload.user
    }

  },
});

export const {
  login,
  logout,
  getConnections,
  convertToNames,
  getConnectionRequests,
  setChecked,
  cookieLogin,
  processConnectionRequest,
  updateUser
} = loginSlice.actions;

export default loginSlice.reducer;
