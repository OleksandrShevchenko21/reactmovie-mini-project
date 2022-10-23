import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {moviesService as movieService} from "../../services/movie.services";
import {genresService} from "../../services/genresService";


const initialState = {
    movies: [],
    loading: false,
    error: null,
    movieFromApi: {},
    // movieByGenres:[],
    activeGenre:0

};

const getAll = createAsyncThunk(
    'movieSlice/getAll',
    async ({page,activeGenre},{rejectWithValue}) => {

        try {
            const {data} = await movieService.getAll(page,activeGenre);
            return data.results

        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);


const getById = createAsyncThunk(
    'movieSlice/getById',
    async (id, {rejectWithValue}) => {

        try {
            const {data} = await movieService.getById(id);
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);
const getByGenres = createAsyncThunk(
    'movieSlice/getByGenres',
    async (_, {rejectWithValue}) => {

        try {
            const {data} = await movieService.getByGenres();
            return data.results
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,

    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.movies = action.payload
                state.loading = false
            })
            .addCase(getAll.rejected, (state, action) => {
                state.error = action.payload
                state.loading = false
            })
            .addCase(getAll.pending, (state, action) => {
                state.loading = true
            })
            .addCase(getById.fulfilled, (state, action) => {
                state.movieFromApi = action.payload
            })
            .addCase(getByGenres.fulfilled, (state, action) => {
                state.movieByGenres = action.payload
            })
    // .addCase(getBySearch.fulfilled, (state, action) => {
    //     state.moviesBySearch = action.payload
    // })

});


const{reducer:movieReducer, actions} = movieSlice;

const movieActions = {
    getAll,
    getById,
    // getBySearch
    getByGenres
}

export{
    movieReducer,
    movieActions,
}
