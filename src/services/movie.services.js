import {axiosService} from "./axios.service";
import {urls} from "../config";


const moviesService = {

    getAll: (page, activeGenre) => axiosService.get(`${urls.movies}?&page=${page}&with_genres=${activeGenre}`),
    // getAll: (page) => axiosService.get(`${urls.movies}?&page=${page}`),
    getById:(id) => axiosService.get(`${urls.movie}${id}`),
    // getBySearch: (term) => axiosService.get(`${urls.searchMovies}${term}`)
    getByGenres: () => axiosService.get(urls.genres)

}

export {
    moviesService
}