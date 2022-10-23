import {useDispatch, useSelector} from "react-redux";
import  css from './Genre.css'

import {Chip} from "@mui/material";


const Genre = ({genre,setActiveGenre}) => {

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
                                size="string"
                                variant="filled"
                                onClick={()=>setActiveGenre(genre.id)}>

                            </Chip>

                        </div>
                  </div>

             )
}
export {Genre};


