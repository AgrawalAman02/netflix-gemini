import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name : "movie",
    initialState : {
        nowPlayingMovies : null,
        popularMovies : null,
        topRatedMovies : null,
        upcomingMovies : null,
        recommendedMovies : null,
        recommendedTvShows: null,
        trailerVideo : null,
        cardVideo : null,
    },
    reducers : {
        addNowPlayingMovie : (state, action)=>{
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovie : (state, action)=>{
            state.popularMovies = action.payload;
        },
        addTopRatedMovie : (state, action)=>{
            state.topRatedMovies = action.payload;
        },
        addUpcomingMovie : (state, action)=>{
            state.upcomingMovies = action.payload;
        },
        addRecommendedMovie : (state, action)=>{
            state.recommendedMovies = action.payload;
        },
        addRecommendedTvShows : (state, action)=>{
            state.recommendedTvShows = action.payload;
        },
        addTrailerVideo: (state , action)=>{
            state.trailerVideo = action.payload;
        },
        addCardVideo : (state,action)=>{
            state.cardVideo = action.payload;
        }
    }
})

export const {
    addNowPlayingMovie, 
    addTrailerVideo,
    addPopularMovie,
    addTopRatedMovie,
    addUpcomingMovie,
    addCardVideo,
    addRecommendedMovie,
    addRecommendedTvShows,
} = movieSlice.actions;
export default movieSlice.reducer;