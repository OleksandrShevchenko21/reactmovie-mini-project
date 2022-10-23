import {axiosService} from "./axios.service";
import {urls} from "../config";


const genresService = {

    getGenres: () => axiosService.get(urls.genres)

}

export {
    genresService
}