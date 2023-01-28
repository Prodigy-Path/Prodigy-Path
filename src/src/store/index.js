/** @format */

import { configureStore } from '@reduxjs/toolkit';
import clickReducer from './click';
import logger from './logger';


const store = configureStore({
  reducer: {
    click: clickReducer,
    
  },
  middleware: [logger],
});

export default store;
