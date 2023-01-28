/** @format */

import { configureStore } from '@reduxjs/toolkit';

import drawerSlice from './drawerSlice';
import logger from './middleware/logger';
import loginSlice from './loginSlice';

const store = configureStore({
  reducer: {
    drawer: drawerSlice,
    login: loginSlice,
  },
  middleware: [logger],
});

export default store;
