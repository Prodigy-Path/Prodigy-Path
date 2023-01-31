/** @format */

import { configureStore } from '@reduxjs/toolkit';

import drawerSlice from './drawerSlice';
import logger from './middleware/logger';
import loginSlice from './loginSlice';
import chatSlice from './chatSlice';
import loginMiddleware from './middleware/loginMiddleware';
import signUpMiddleware from './middleware/signUpMiddleware';
import chatMiddleware from './middleware/chatMiddleware';
import newPostMiddleware from './middleware/newPostMiddleware';
import postSlice from './postSlice';
import getPostMiddleware from './middleware/getPostMiddleware';
import exploreSlice from './exploreSlice';
import exploreMiddleware from './middleware/exploreMiddleware';
import getMentorProtegePosts from './middleware/getMentorProtegePosts';
import mentorProtegePostsSlice from './mentorProtegePostsSlice';

const store = configureStore({
  reducer: {
    drawer: drawerSlice,
    login: loginSlice,
    post: postSlice,
    protegesPosts: mentorProtegePostsSlice,
    chat: chatSlice,
    explore: exploreSlice
  },
  middleware: [logger, loginMiddleware, signUpMiddleware, newPostMiddleware, getPostMiddleware, getMentorProtegePosts, exploreMiddleware, chatMiddleware],
});

export default store;
