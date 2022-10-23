// import {useEffect, useState} from "react";
// import {useDispatch, useSelector} from "react-redux";
// import {genreActions, movieActions} from "../../redux";
// import {moviesService} from "../../services/movie.services";
// import {Movie} from "../movie/Movie";
// import {Movies} from "../movies/Movies";
// import {MovieBySearch} from "../movieBySearch/MovieBySearch";
//
// const MoviesSearch = () => {
//
//
//
//     const[term,setTerm]=useState("black");
//     const submitHandler = (e) => {
//         e.preventDefault();
//
//     }
//
//
//         const dispatch = useDispatch();
//         const{moviesBySearch}=useSelector(state=>state.movieReducer)
//
//     console.log(term);
//     console.log(moviesBySearch);
//
//     useEffect(() => {
//         dispatch(movieActions.getBySearch({term}))
//
//     }, [term])
//     console.log(term);
//     console.log(moviesBySearch);
//     return (
//         <div>
//             <div className="searchBar">
//
//                 <form onSubmit={submitHandler}>
//                     <input type="text" value={term} placeholder="MoviesSearch Movie"
//                            onChange={(e) =>setTerm(e.target.value)}/>
//                     <button type="submit"> <i className="fa fa-search"></i> </button>
//                 </form>
//
//             </div>
//
//             <div className="movieBySearch-list">
//
//
//                 {moviesBySearch?.moviesBySearch?.map(movieBySearch => <MovieBySearch key={movieBySearch.id} moviesBySearch={movieBySearch}/>)}
//
//
//             </div>
//
//         </div>
//     )
// }
// export{MoviesSearch}