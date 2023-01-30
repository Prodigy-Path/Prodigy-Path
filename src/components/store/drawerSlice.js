/** @format */

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  opened: false,
  menuClass: 'closed',

};

const drawerSlice = createSlice({
  name: 'drawer',
  initialState,
  reducers: {
    setOpened: (state) => {
      state.opened = !state.opened;
    },
    setDrawer: (state) => {
      if (!state.opened) {
        state.menuClass = 'closed'
      } else {
        state.menuClass = 'opened'
      }
    },

  },
});

export const { setOpened, setDrawer, } = drawerSlice.actions;

export default drawerSlice.reducer;
