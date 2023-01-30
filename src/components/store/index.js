/** @format */

import { configureStore } from '@reduxjs/toolkit';

import drawerSlice from './drawerSlice';
import logger from './middleware/logger';
import loginSlice from './loginSlice';
import loginMiddleware from './middleware/loginMiddleware';
import signUpMiddleware from './middleware/signUpMiddleware';
import newPostMiddleware from './middleware/newPostMiddleware';
import postSlice from './postSlice';
import getPostMiddleware from './middleware/getPostMiddleware';

const store = configureStore({
  reducer: {
    drawer: drawerSlice,
    login: loginSlice,
    post: postSlice
  },
  middleware: [logger, loginMiddleware, signUpMiddleware, newPostMiddleware, getPostMiddleware],
});

export default store;
