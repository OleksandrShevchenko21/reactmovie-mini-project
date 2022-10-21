import {useEffect, useState} from "react";
import {Movie} from "../movie/Movie";
import {useDispatch, useSelector} from "react-redux";
import {genreActions, movieActions} from "../../redux";
import css from './Movies.css'
import {MovieInfo} from "../movieInfo/MovieInfo";
import {useSearchParams} from "react-router-dom";
import {Genre} from "../genre/Genre";
import useGenre from "../useGenre";


// -------------------------------------------------------------------------------------------------
const Movies = () => {
    const[filtered,setFiltered] = useState([]);
    const [activeGenre, setActiveGenre] = useState([]);

    const dispatch = useDispatch();
    const {movies,errors, loading} = useSelector(state => state.movieReducer);
    const {genres} = useSelector(state => state.genreReducer);

    const [query, setQuery] = useSearchParams({page:'1'});

    const genreforURL = useGenre(activeGenre);


    const handleAdd = (genre) => {
        setActiveGenre([...activeGenre, genre]);
        setFiltered(genres.filter((g) => g.id !== genre.id));
        // setPage(1);
    };
    const handleRemove = (genre) => {
        activeGenre(filtered.filter((filtered) => filtered.id !== genre.id)
        );
        // setGenres([...genres, genre]);
        // setPage(1);
    };



     useEffect(() => {
        dispatch(genreActions.getGenres())

    }, [])
        console.log(genres)

    useEffect(() => {
        const filtered = movies.filter((movie)=>movie.genre_ids.includes(activeGenre))
        setFiltered(filtered)
        return;
    // }

    }, [activeGenre])
    console.log(activeGenre);

    useEffect(() => {
        dispatch(movieActions.getAll({page:query.get('page')}))
    }, [query,genreforURL])


    const prevPage = () => {
        setQuery(value=>({page:value.get('page')-1}))
    }
    const nextPage = () => {
        setQuery(value=>({page:+value.get('page')+1}))

    }
    return (
        <div >

            {/*<button onClick={()=>setActiveGenre(movie.genre_ids[0])}></button>*/}
            <div className="genre-list">

                {genres?.genres?.map(genre =>
                    <Genre key={genre.id}
                           genre={genre}
                           activeGenre={activeGenre}
                           setActiveGenre={setActiveGenre}
                           setFiltered={setFiltered}
                            movies={movies}
                    />)}
            </div>
            <div className="movie-list">
                {loading && <h1>Loading..............</h1>}
                {movies.map(movie => <Movie key={movie.id} movie={movie}/>)}

            </div>



            <button disabled={+prevPage>1 || +prevPage===1} onClick={prevPage}>prevPage</button>
            <button disabled={+nextPage===500} onClick={nextPage}>nextPage</button>


        </div>
    )
        console.log(movies)
}
export {Movies};