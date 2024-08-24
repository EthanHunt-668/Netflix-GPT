import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    playing:null,
    playVideo:null,
  },
  reducers: {
    addMovie: (state, action) => {
      state.playing=action.payload;
    },
    movieKey: (state,action) => {
      state.playVideo=action.payload;
    },
  },
});
export const {addMovie,movieKey}=movieSlice.actions;
export default movieSlice.reducer;
