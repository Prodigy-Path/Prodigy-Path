import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  posts: []
};
const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    post: (state, action) => {
      state.posts.push(action.payload)
      console.log(action.payload)
    },
    getPost: (state, action) => {
      console.log(action.payload)
      if (state.posts?.length !== action.payload.length) {
        state.posts = [...action.payload]
      }
    }

  },
});
export const { post, getPost } = postSlice.actions;

export default postSlice.reducer;