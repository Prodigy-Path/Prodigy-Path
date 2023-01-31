import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  protegePosts: [],
  connections: []
};
const mentorProtegePosts = createSlice({
  name: 'mentorProtegePosts',
  initialState,
  reducers: {
    getPostProtege: (state, action) => {
      if (state.protegePosts?.length !== action.payload.connectionPosts.length) {
        state.protegePosts = [...action.payload.connectionPosts]
      }
      if (state.connections?.length !== action.payload.connections.length) {
        state.connections = [...action.payload.connections]
      }
    }

  },
});
export const { getPostProtege } = mentorProtegePosts.actions;

export default mentorProtegePosts.reducer;