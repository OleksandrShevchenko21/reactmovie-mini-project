import {axiosService} from "./axios.service";
import {urls} from "../config";

const moviesService = {
    getAll: () => axiosService.get(urls.movies),
    getById:(id) => axiosService.get(`${urls.movie}${id}`),
    getBySearch: (term) => axiosService.get(`${urls.searchMovies}${term}`)

    // getById:(id) => axiosService.get(`${urls.movie}${id}?api_key=f27f0a26355dd5a17292c92d8c6ebae9&language=en-US`)
}

export {
    moviesService
}