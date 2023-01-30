/** @format */

import { configureStore } from '@reduxjs/toolkit';

import drawerSlice from './drawerSlice';
import logger from './middleware/logger';
import loginSlice from './loginSlice';
import loginMiddleware from './middleware/loginMiddleware';
import signUpMiddleware from './middleware/signUpMiddleware';
import exploreSlice from './exploreSlice';
import exploreMiddleware from './middleware/exploreMiddleware';


const store = configureStore({
  reducer: {
    drawer: drawerSlice,
    login: loginSlice,
    explore: exploreSlice
  },
  middleware: [logger, loginMiddleware, signUpMiddleware, exploreMiddleware],
});

export default store;
