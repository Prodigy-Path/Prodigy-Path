import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchParam: '',
  results: [],
}

const exploreSlice = createSlice({
  name: 'explore',
  initialState,
  reducers: {
    setParams: (state, action) => {
      state.searchParam = action.payload.query
    },
    setResults: (state, action) => {
      state.results = action.payload.filter(user => state.searchParam ? user.tags.includes(state.searchParam) : user)
    }
  }
})

export const { setParams, setResults } = exploreSlice.actions;

export default exploreSlice.reducer