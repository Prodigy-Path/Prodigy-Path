import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchParam: '',
  results: [],
  currentPage: 1,
  newConnection: []
}

const exploreSlice = createSlice({
  name: 'explore',
  initialState,
  reducers: {
    setParams: (state, action) => {
      state.searchParam = action.payload.query
    },
    setResults: (state, action) => {
      state.results = action.payload
    },
    setPage: (state, action) => {
      state.currentPage = action.payload.page
    },
    newConnection: (state, action) => {
        state.results = state.results.filter(user => user._id === action.payload._id ? action.payload : user)
      }
  }
})

export const { setParams, setResults, setPage, newConnection } = exploreSlice.actions;

export default exploreSlice.reducer