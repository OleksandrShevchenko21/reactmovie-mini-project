const baseURL = 'https://api.themoviedb.org/3';
const  apiKey = 'f27f0a26355dd5a17292c92d8c6ebae9';
const apiRequest = 'https://api.themoviedb.org/3/movie/550?api_key=f27f0a26355dd5a17292c92d8c6ebae9';

const urls = {
    movies : '/discover/movie/',
    movie : '/movie/',
    // movies : '/discover/movie?api_key=`${apiKey}`&language=en-US',
    }
    // `https://api.themoviedb.org/3/discover/movie?api_key=`${apiKey}`&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`
export {
    baseURL,
    urls,
    apiRequest,
    apiKey
}