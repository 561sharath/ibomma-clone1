import { createSlice } from "@reduxjs/toolkit";

const MovieSlice = createSlice({
  name: "movies",
  initialState: {
    tmdbMoviesList: null,
    tmdbdetails: null,
    tmdbTrailer: null,
    tmdbSearchDetails: [],
    tmdbSearchMoviesList:null,
    mobileview:false
  },
  reducers: {
    ADD_MOVIES: (state, action) => {
      //console.log(action.payload)

      state.tmdbMoviesList = action.payload;
    },

    ADD_DETAILS: (state, action) => {
      state.tmdbdetails = action.payload;
    },
    ADD_TRAILER: (state, action) => {
      state.tmdbTrailer = action?.payload;
    },

    ADD_SEARCH_DETAILS: (state, action) => {
      state.tmdbSearchDetails = action.payload;
    },
    ADD_SEARCH_MOVIE_DETAILS:(state,action)=>{
        //console.log(action.payload)
        state.tmdbSearchMoviesList=action.payload
    },
    MOBILE_VIEW:(state,action)=>{
      console.log(action.payload)
      state.mobileview=action.payload

    }
  },
});

export const { ADD_MOVIES, ADD_DETAILS, ADD_TRAILER,ADD_SEARCH_MOVIE_DETAILS,MOBILE_VIEW } = MovieSlice.actions;
export default MovieSlice.reducer;
