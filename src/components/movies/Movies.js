import {useEffect, useState} from "react";
import {Movie} from "../movie/Movie";
import {useDispatch, useSelector} from "react-redux";
import {movieActions} from "../../redux";
import css from './Movies.css'
import {MovieInfo} from "../movieInfo/MovieInfo";
import {useSearchParams} from "react-router-dom";


// -------------------------------------------------------------------------------------------------
const Movies = () => {

    const dispatch = useDispatch();
    const {movies,errors, loading} = useSelector(state => state.movieReducer);

    // const [prev, setPrev] = useState(1);
    // const [next, setNext] = useState(1);

    const [query, setQuery] = useSearchParams({page:'1'});

     useEffect(() => {

        dispatch(movieActions.getAll({page:query.get('page')}))
// setPrev(prev)
// setNext(next)

    }, [query])
    const prevPage = () => {
        setQuery(value=>({page:value.get('page')-1}))
    }
    const nextPage = () => {
        setQuery(value=>({page:+value.get('page')+1}))

    }
    return (
        <div >
            <div className="movie-list">
                 {loading && <h1>Loading..............</h1>}
                 {movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
                 {/*{movieFromAPI.map(movieInfo => <MovieInfo key={movieInfo.id} movieInfo={movieInfo}/>)}*/}
            </div>

            {/*<button disabled={!prev} onClick={prevPage}>prevPage</button>*/}
            {/*<button disabled={!next} onClick={nextPage}>nextPage</button>*/}

            <button  onClick={prevPage}>prevPage</button>
            <button  onClick={nextPage}>nextPage</button>

        </div>
    )
}
export {Movies};