/** @format */

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  opened: false,
};

const drawerSlice = createSlice({
  name: 'drawer',
  initialState,
  reducers: {
    setOpened: (state) => {
      state.opened = !state.opened;
    },
  },
});

export const { setOpened } = drawerSlice.actions;

export default drawerSlice.reducer;
