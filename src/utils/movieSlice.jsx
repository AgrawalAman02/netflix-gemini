import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name : "movie",
    initialState : {
        nowPlayingMovies : null,
        popularMovies : null,
        topRatedMovies : null,
        upcomingMovies : null,
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
        addTrailerVideo: (state , action)=>{
            state.trailerVideo = action.payload;
        },
        addCardVideo : (state,action)=>{
            state.cardVideo = action.payload;
        }
    }
})

export const {addNowPlayingMovie, addTrailerVideo,addPopularMovie,addTopRatedMovie,addUpcomingMovie,addCardVideo} = movieSlice.actions;
export default movieSlice.reducer;