/** @format */

import { configureStore } from '@reduxjs/toolkit';

import drawerSlice from './drawerSlice';
import logger from './middleware/logger';
import loginSlice from './loginSlice';
import chatSlice from './chatSlice';
import loginMiddleware from './middleware/loginMiddleware';
import signUpMiddleware from './middleware/signUpMiddleware';
import chatMiddleware from './middleware/chatMiddleware';
import newPostMiddleware from './middleware/posts/newPostMiddleware';
import postSlice from './postSlice';
import getPostMiddleware from './middleware/posts/getPostMiddleware';
import exploreSlice from './exploreSlice';
import exploreMiddleware from './middleware/exploreMiddleware';
import getMentorProtegePosts from './middleware/posts/getMentorProtegePosts';
import mentorProtegePostsSlice from './mentorProtegePostsSlice';
import chatConnectMiddleware from './middleware/chatConnectMiddleware';
import connectionMiddleware from './middleware/connectionMiddleware';
import sendTasksDBMiddleware from './middleware/tasks/sendTasksDBMiddleware';
import deleteTasksMiddleware from './middleware/tasks/deleteTasksMiddleware';
import taskSlice from './taskSlice';
import getAllTasks from './middleware/tasks/getAllTasksMiddleware';
import getConnectionNames from './middleware/getConnectionNames';
import getConnectionRequest from './middleware/getConnectionRequest';
import processConnectionRequest from './middleware/processRequestMiddleware';
import updateTasksMiddleware from './middleware/tasks/updateTasksMiddleware';
import deletePostMiddleware from './middleware/posts/deletePostMiddleware';
import updatePostMiddleware from './middleware/posts/updatePostMiddleware';

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
    loginMiddleware,
    chatConnectMiddleware,
    chatMiddleware,
    signUpMiddleware,
    newPostMiddleware,
    getPostMiddleware,
    deletePostMiddleware,
    updatePostMiddleware,
    exploreMiddleware,
    connectionMiddleware,
    getMentorProtegePosts,
    sendTasksDBMiddleware,
    getAllTasks,
    getConnectionNames,
    getConnectionRequest,
    processConnectionRequest,
    logger,
    updateTasksMiddleware,
    deleteTasksMiddleware,
  ],
});

export default store;
