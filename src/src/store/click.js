/** @format */

import { createSlice } from '@reduxjs/toolkit';

const click = createSlice({
  name: 'city',
  initialState: 0,
  reducers: {
    setClick: (state, action) => {
      return;
    },
  },
});

export const { setClick } = click.actions;

export default click.reducer;
