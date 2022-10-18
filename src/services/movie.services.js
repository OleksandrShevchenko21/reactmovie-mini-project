import {axiosService} from "./axios.service";
import {urls} from "../config";

const moviesService = {
    getAll: () => axiosService.get(urls.movies)
}

export {
    moviesService
}