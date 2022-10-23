import {useEffect, useState} from "react";
import {Movie} from "../movie/Movie";
import {useDispatch, useSelector} from "react-redux";
import {genreActions, movieActions} from "../../redux";
import css from './Movies.css'
import {MovieInfo} from "../movieInfo/MovieInfo";
import {useSearchParams} from "react-router-dom";
import {Genre} from "../genre/Genre";
import {moviesService} from "../../services/movie.services";


const Movies = () => {
    const[filtered,setFiltered] = useState([]);
    const [activeGenre, setActiveGenre] = useState(0);

    const dispatch = useDispatch();
    const {movies,errors, loading} = useSelector(state => state.movieReducer);
    const {genres} = useSelector(state => state.genreReducer);

    const [queryPage, setQueryPage] = useSearchParams({page:'1'});

    const[term,setTerm]=useState("friends");
    const submitHandler = (e) => {
        e.preventDefault();

    }

    useEffect(() => {

        dispatch(movieActions.getBySearch({term,activeGenre}))

        dispatch(genreActions.getGenres())

        dispatch(movieActions.getAll({page: queryPage.get('page')}))

        dispatch(movieActions.getAll({page: queryPage.get('page'),activeGenre}))

    }, [queryPage,activeGenre,term])


        console.log(term);



    console.log(activeGenre);
    console.log(movies);

    const prevPage = () => {
        setQueryPage(value=>({page:value.get('page')-1}))
    }

    const nextPage = () => {
        setQueryPage(value=>({page:+value.get('page')+1}))
        }
        console.log(queryPage);


    return (
        <div >

            <div className="searchBar">

                <form onSubmit={submitHandler}>
                    <input type="text" value={term} placeholder="MoviesSearch Movie"
                           onChange={(e) =>setTerm(e.target.value)}/>
                    <button type="submit"> <i className="fa fa-search"></i> </button>
                </form>

            </div>


            <div className="genre-list">

                {genres?.genres?.map(genre =>
                    <Genre key={genre.id} genre={genre} activeGenre={activeGenre} setActiveGenre={setActiveGenre} setFiltered={setFiltered} movies={movies}/>
                )}

            </div>


            <div className="ALL-GENRES">

                <button onClick={()=>setActiveGenre(0)}>ALL GENRES</button>

            </div>


            <div className="pages">

                <button disabled={+prevPage>1 || +prevPage===1} onClick={prevPage}>prevPage</button>
                <button disabled={+nextPage===500} onClick={nextPage}>nextPage</button>

            </div>


            <div className="movie-list">

                {loading && <h1>Loading..............</h1>}
                {movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
                {/*{filtered.map(movie => <Movie key={movie.id} movie={movie}/>)}*/}

            </div>


        </div>
    )
}
export {Movies};