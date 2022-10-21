import {useDispatch} from "react-redux";
import  css from './Genre.css'
import {MoviesByGenres} from "../moviesByGenres/MoviesByGenres";
import {Link} from "@mui/material";
import {useEffect} from "react";
import {movieActions} from "../../redux";

const Genre = ({genre,activeGenre}) => {
    const {id,name} = genre;
    const dispatch = useDispatch();



    return (
        <div className="genre-item">


                    <div className="genre-info">
                        <h5>{genre.name}</h5>
                        {/*<h5>{genre.id}</h5>*/}
                        {/*<button onClick={()=>activeGenre(genre.id)}>click</button>*/}

                        </div>

         </div>
    )
}
export {Genre};








// --------------------------------------------------------------------------------------------
// const Genre = ({genre}) => {
//     const {genre_ids} = genre;
//     const dispatch = useDispatch();
//
//     return (
//         <div className="genre-item">
//
//             <Link to = {`/movie/${genre.genre_ids}`}>
//
//                     <div className="genre-info">
//                         <h5>{genre.name}</h5>
//                         </div>
//
//             </Link>
//
//          </div>
//     )
// }
// export {Genre};