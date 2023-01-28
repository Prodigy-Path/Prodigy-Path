/** @format */

import { configureStore } from '@reduxjs/toolkit';
import clickReducer from './clickSlice';
import totals from './logger';


const store = configureStore({
  reducer: {
    click: clickReducer,
    
  },
  middleware: [totals],
});

export default store;
