/** @format */

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

const click = createSlice({
  name: 'click',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = click.actions;

export default click.reducer;
