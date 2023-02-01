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
import chatConnectMiddleware from './middleware/chatConnectMiddleware';
import connectionMiddleware from './middleware/connectionMiddleware';
import sendTasksDBMiddleware from './middleware/sendTasksDBMiddleware';
import taskSlice from './taskSlice';
import getAllTasks from './middleware/getAllTasksMiddleware';

const store = configureStore({
  reducer: {
    drawer: drawerSlice,
    login: loginSlice,
    post: postSlice,
    protegesPosts: mentorProtegePostsSlice,
    chat: chatSlice,
    explore: exploreSlice,
    taskList: taskSlice,
  },

  middleware: [
    logger,
    loginMiddleware,
    chatConnectMiddleware,
    chatMiddleware,
    signUpMiddleware,
    newPostMiddleware,
    getPostMiddleware,
    exploreMiddleware,
    connectionMiddleware,
    getMentorProtegePosts,
    sendTasksDBMiddleware,
    getAllTasks,
  ],
});

export default store;
