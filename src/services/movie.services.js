import {axiosService} from "./axios.service";
import {urls} from "../config";
import {useState} from "react";
import useGenre from "../components/useGenre";



const moviesService = {

    // getAll: (page,genre_ids) => axiosService.get(`${urls.movies}?&page=${page}&with_genres=${genre_ids}`),
    getAll: (page,genreforURL) => axiosService.get(`${urls.movies}?&page=${page}&with_genres=${genreforURL}`),
    // getAll: (page=1) => axiosService.get(urls.movies, {params:{page}}),
    getById:(id) => axiosService.get(`${urls.movie}${id}`),
    // getBySearch: (term) => axiosService.get(`${urls.searchMovies}${term}`)
    getByGenres: () => axiosService.get(urls.genres)

    // getById:(id) => axiosService.get(`${urls.movie}${id}?api_key=f27f0a26355dd5a17292c92d8c6ebae9&language=en-US`)
}

export {
    moviesService
}