import {useDispatch, useSelector} from "react-redux";
import  css from './Genre.css'

import {Chip, Link} from "@mui/material";
import {useEffect} from "react";
import {genreActions, movieActions} from "../../redux";

const Genre = ({genre,activeGenre,setActiveGenre,movies,setFiltered}) => {
    const {id} = genre;
    const dispatch = useDispatch();

    useEffect(() => {

        // if(activeGenre ===0) {
        //     setFiltered(movies);
        //     return;
        // }

        const filtered = (movies.filter((movie)=>movie.genre_ids.includes(activeGenre)))
        setFiltered(filtered);
        // movies.filter((movie)=>movie.genre_ids.includes(activeGenre))

    },[activeGenre]);


    return (
        <div className="genre-item">


                    <div className="genre-info">
                        <div className="genre-bottom">
                            <Chip
                                clickable
                                label={genre.name}
                                key={genre.id}
                                color="primary"
                                size="small"
                                onClick={()=>setActiveGenre(genre.id)}>
                                {/*<h5>{genre.name}</h5>*/}
                            </Chip>
                        {/*<h5>{genre.id}</h5>*/}
                        </div>


                    </div>
         </div>

    )
}
export {Genre};


// <button onClick={()=>setActiveGenre(genre.id)}>
//     <h5>{genre.name}</h5></button>





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