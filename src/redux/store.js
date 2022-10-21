import {combineReducers, configureStore} from "@reduxjs/toolkit"
import {movieReducer} from "./slices/movie.slice";
import {genreReducer} from "./slices";


const rootReducer = combineReducers({
    movieReducer,
    genreReducer
})

const setupStore = () => configureStore({
    reducer: rootReducer
});

export {
    setupStore
}