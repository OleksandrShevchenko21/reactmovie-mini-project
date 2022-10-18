import axios from "axios";
import {baseURL} from "../config";

const axiosService = axios.create({baseURL})


axiosService.interceptors.request.use((config) => {
    const access = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMjdmMGEyNjM1NWRkNWExNzI5MmM5MmQ4YzZlYmFlOSIsInN1YiI6IjYzNDlhOTQ2Njg4Y2QwMDA3OWM1NDY3YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qe4E9diOLSHKnEwpzg-LA-HGiBnN2Bwk4lUSZxZFW2k';

    if (access) {
        config.headers.Authorization = `Bearer ${access}`
    }

    return config
})

export {
    axiosService,
}