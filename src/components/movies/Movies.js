import {useEffect, useState} from "react";
import {moviesService} from "../../services/movie.services";
import {Movie} from "../movie/Movie";
import css from './Movies.css'

const Movies = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        moviesService.getAll().then(({data}) => setMovies(data.results))
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