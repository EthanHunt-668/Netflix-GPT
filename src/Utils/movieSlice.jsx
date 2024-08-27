import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    playing:null,
    playVideo:null,
    popularMovies:null,
    topRated: null,
    upcoming: null,
    clickedVideo:null,
  },
  reducers: {
    addMovie: (state, action) => {
      state.playing=action.payload;
    },
    movieKey: (state,action) => {
      state.playVideo=action.payload;
    },
    addPopularMovie:(state,action)=>{
      state.popularMovies=action.payload;
    },
    addTopRated:(state,action)=>{
      state.topRated=action.payload;
    },
    addUpcoming:(state,action)=>{
      state.upcoming=action.payload;
    },
    clickedKey:(state,action)=>{
      state.clickedVideo=action.payload;
    }
  },
});
export const {addMovie,movieKey,addPopularMovie,addTopRated,addUpcoming,clickedKey}=movieSlice.actions;
export default movieSlice.reducer;
