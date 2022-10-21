import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {moviesService as movieService} from "../../services/movie.services";
import {genresService} from "../../services/genresService";


const initialState = {
     genres:{}
};

const getGenres = createAsyncThunk(
    'genreSlice/getGenres',
    async (_, {rejectWithValue}) => {

        try {
            const {data} = await genresService.getGenres();
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const genreSlice = createSlice({
    name: 'genreSlice',
    initialState,

    extraReducers: builder =>
        builder

            .addCase(getGenres.fulfilled, (state, action) => {
                state.genres = action.payload
                state.loading = false
            })
});


const{reducer:genreReducer, actions} = genreSlice;


const genreActions = {
    getGenres

}

export{

    genreReducer,

    genreActions


}
