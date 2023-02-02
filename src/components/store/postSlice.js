/** @format */

import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  posts: [],
  newTitle: '',
  newText: '',
  updateData: '',
  isEditing: false,
  postId: '',
};
const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    post: (state, action) => {
      state.posts.push(action.payload)
    },
    getPost: (state, action) => {
      if (state.posts?.length !== action.payload.length) {
        state.posts = [...action.payload];
      }
    },
    deletePost: (state, action) => {
      console.log(action.payload)
      const id = action.payload._id;
      let newPosts = state.posts.filter((post) => post._id !== id);
      state.posts = [...newPosts];
    },
    setIsEditing: (state, action) => {
      state.isEditing = !state.isEditing;
      state.postId = action?.payload?._id
      console.log(state.isEditing, state.postId)
    },
    resetIsEditing: (state) => {
      state.isEditing = !state.isEditing;
    },
    updatePost: (state, action) => {
      let filterRecords = [...state.posts].filter(
        (post) => post._id !== state.postId
      );
      state.posts = [...filterRecords, action.payload];
      console.log(state.posts)
    },
  },
});
export const { post, getPost, deletePost, updatePost, setNewText, setNewTitle, setUpdatePostData, setIsEditing, resetIsEditing } = postSlice.actions;

export default postSlice.reducer;
