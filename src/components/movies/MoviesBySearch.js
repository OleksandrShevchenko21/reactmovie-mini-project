// import {useEffect} from "react";
// import {Movie} from "../movie/Movie";
// import {useDispatch, useSelector} from "react-redux";
// import {movieActions} from "../../redux";
// import {MovieBySearch} from "../movie/MovieBySearch";
// import {useParams} from "react-router-dom";
//
//
// const MoviesBySearch = () => {
//     const {term} = useParams();
//     const dispatch = useDispatch();
//     const {moviesBySearch} = useSelector(state => state.movieReducer);
//     useEffect(() => {
//
//         dispatch(movieActions.getBySearch(term))
//
//     }, [])
//     return (
//         <div >
//             <div className="movie-list">
//                 {/*{loading && <h1>Loading..............</h1>}*/}
//                 {moviesBySearch.map(movie => <MovieBySearch key={movie.id} movie={movie}/>)}
//                 {/*{movieFromAPI.map(movieInfo => <MovieInfo key={movieInfo.id} movieInfo={movieInfo}/>)}*/}
//
//             </div>
//
//         </div>
//     )
// }
// export {MoviesBySearch};