import {useEffect} from "react";
import {Movie} from "../movie/Movie";
import {useDispatch, useSelector} from "react-redux";
import {movieActions} from "../../redux";
import css from './Movies.css'
import {MovieInfo} from "../movieInfo/MovieInfo";




const Movies = () => {

const dispatch = useDispatch();
const {movies,errors, loading} = useSelector(state => state.movieReducer);
    useEffect(() => {

        dispatch(movieActions.getAll())

    }, [])
    return (
        <div >
            <div className="movie-list">
                 {loading && <h1>Loading..............</h1>}
                 {movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
                 {/*{movieFromAPI.map(movieInfo => <MovieInfo key={movieInfo.id} movieInfo={movieInfo}/>)}*/}

            </div>

        </div>
    )
}
export {Movies};