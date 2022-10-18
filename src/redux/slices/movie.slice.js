import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    movies: [],
}
const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
        getAll:(state,action) =>{
            state.movies = action.payload;
        },
    },

});

const{reducer:movieReducer, actions:{getAll}} = movieSlice;

const movieActions = {
    getAll
}

export{
    movieReducer,
    movieActions
}

// export const {addMovies} = movieSlice.actions;
// export const getAllMovies = (state) => state.movies.movies
// export default movieSlice.reducer;