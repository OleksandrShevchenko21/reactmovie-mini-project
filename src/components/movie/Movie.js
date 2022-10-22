import {posterPreview_300} from "../../posterPreview";
import css from './Movie.css'
import {Link} from "react-router-dom";
import {movieActions} from "../../redux";
import {useDispatch, useSelector} from "react-redux";
import {Badge} from "@mui/material";
import {StarsRating} from "../starsRating/StarsRating";
const Movie = ({movie}) => {
    const {id,genre_ids} = movie;
    const dispatch = useDispatch();
    const rateByStars=StarsRating(movie.vote_average*0.64)


    const{genres:data}=useSelector(state=>state.genreReducer)

    const array = data.genres ? data.genres:[]
    const genreOfMovie=[]

    array.map((item) => {
        if(genre_ids.includes(item.id)){
            genreOfMovie.push(item.name)
        }
    })

    return (
        <div className="card-item">
            <Link to = {`/movie/${movie.id}`}>

            <div className="card-inner">

            <div className="card-badge">
            <Badge badgeContent = {genreOfMovie[0]}
                   color= "primary" />
            </div>
                <div className="poster">
                    <img className={css.poster_path} src={`${posterPreview_300}/${movie.poster_path}`} alt={movie.poster_path}/>
                </div>

                    <div className="card-info">
                        <h3>{movie.title}</h3>

                        <div className="card-daterate">
                            <h4>{movie.release_date}</h4>
                            <h4>{movie.media_type}</h4>
                            <h4>{rateByStars}</h4>
                            {/*<StarsRating/>*/}
                        </div>
                    </div>
             </div>
            </Link>
    </div>);
}
export {Movie};