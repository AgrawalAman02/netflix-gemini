import { createSlice } from "@reduxjs/toolkit";
import { SEARCH_OFFSET } from "./constants";

const gptSlice = createSlice({
    name : "gpt",
    initialState: {
        showGptSearch : false,
        movieNames : null,
        movieList : null,
        count : SEARCH_OFFSET,
    },

    reducers:{
        toggleGptSearch : (state)=>{
            state.showGptSearch = !state.showGptSearch;
        },
        addSearchResult : (state,action)=>{
            const {movieNames,movieList} = action.payload;
            state.movieNames = movieNames;
            state.movieList = movieList;
        },
        decreaseCount : (state)=>{
            state.count--;
        },
    }
});

export const {toggleGptSearch,addSearchResult,decreaseCount} = gptSlice.actions;
export default gptSlice.reducer;