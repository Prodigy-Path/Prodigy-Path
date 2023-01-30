/** @format */

import { configureStore } from '@reduxjs/toolkit';

import drawerSlice from './drawerSlice';
import logger from './middleware/logger';
import loginSlice from './loginSlice';
import loginMiddleware from './middleware/loginMiddleware';
import signUpMiddleware from './middleware/signUpMiddleware';

const store = configureStore({
  reducer: {
    drawer: drawerSlice,
    login: loginSlice,
  },
  middleware: [logger, loginMiddleware, signUpMiddleware],
});

export default store;
