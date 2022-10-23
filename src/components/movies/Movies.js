import {useEffect, useState} from "react";
import {Movie} from "../movie/Movie";
import {useDispatch, useSelector} from "react-redux";
import {genreActions, movieActions} from "../../redux";
import css from './Movies.css'
import {useSearchParams} from "react-router-dom";
import {Genre} from "../genre/Genre";
import {FaSearch} from "react-icons/fa";


const Movies = () => {
    const[filtered,setFiltered] = useState([]);
    const [activeGenre, setActiveGenre] = useState(0);

    const dispatch = useDispatch();
    const {movies,errors, loading} = useSelector(state => state.movieReducer);
    const {genres} = useSelector(state => state.genreReducer);

    const [queryPage, setQueryPage] = useSearchParams({page:'1'});

    const[term,setTerm]=useState(" ");
    const submitHandler = (e) => {
        e.preventDefault();

    }


    useEffect(() => {

        dispatch(genreActions.getGenres())

    }, [])

    useEffect(() => {

            if(activeGenre === 0) {
                    dispatch(movieActions.getAll({page: queryPage.get('page')}))

                    } if (activeGenre!==0){
                    dispatch(movieActions.getAll({page: queryPage.get('page'),activeGenre}))

                    }

    }, [queryPage,activeGenre])

    useEffect(() => {

        dispatch(movieActions.getBySearch({term}))

    }, [term])


    console.log(activeGenre);
    console.log(movies);

    const prevPage = () => {
        setQueryPage(value=>({page:value.get('page')-1}))
    }

    const nextPage = () => {
        setQueryPage(value=>({page:+value.get('page')+1}))
        }

    return (
        <div>

            <div className="genres-pages">

                <div>
                    <div className="ALL-GENRES">

                        <button onClick={()=>setActiveGenre(0)}>ALL GENRES</button>

                    </div>

                </div>

                <div className="searchBar">

                    <form onSubmit={submitHandler}>
                        <input type="text" value={term} placeholder="Search Movie"
                               onChange={(e) =>setTerm(e.target.value)}/>
                        <button type="submit"> <FaSearch className="fa fa-search"></FaSearch> </button>
                    </form>

                </div>

                <div className="pages">

                    <button disabled={+prevPage>1 || +prevPage===1} onClick={prevPage}>prev page</button>
                    <button disabled={+nextPage===500} onClick={nextPage}>next page</button>

                </div>

            </div>

            <div className="genre-list">

                {genres?.genres?.map(genre =>
                    <Genre key={genre.id} genre={genre} activeGenre={activeGenre} setActiveGenre={setActiveGenre} setFiltered={setFiltered} movies={movies}/>
                )}

            </div>


            <div className="movie-list">

                {loading && <h1>Loading..............</h1>}
                {movies.map(movie => <Movie key={movie.id} movie={movie}/>)}

            </div>

        </div>
    )
}
export {Movies};