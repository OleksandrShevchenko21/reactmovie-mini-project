import {useDispatch, useSelector} from "react-redux";
import  css from './Genre.css'

import {Chip, Link} from "@mui/material";
import {useEffect} from "react";
import {genreActions, movieActions} from "../../redux";

const Genre = ({genre,activeGenre,setActiveGenre,movies,setFiltered}) => {
    const {id} = genre;
    const dispatch = useDispatch();

    return (
        <div className="genre-item">

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

    )
}
export {Genre};


