import {useEffect, useState} from "react";
import {moviesService} from "../../services/movie.services";
import {Movie} from "../movie/Movie";
import css from './Movies.css'
import {useDispatch, useSelector} from "react-redux";
import {movieActions} from "../../redux";



const Movies = () => {
    // const [movies, setMovies] = useState([]);
const dispatch = useDispatch();
const {movies} = useSelector(state => state.movieReducer);

    useEffect(() => {
        console.log(movieActions.getAll());
        // moviesService.getAll().then(({data}) => setMovies(data.results))
        moviesService.getAll().then(({data}) => dispatch(movieActions.getAll(data.results)))

    }, [])
    return (
        <div >
            <div className="movie-list">
                {
                    movies.map(movie => <Movie key={movie.id} movie={movie}/>)
                }
            </div>
        </div>
    )
}
export {Movies};