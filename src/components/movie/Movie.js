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



            <div className="card-inner">
                <Link to = {`/movie/${movie.id}`}>

            <div className="card-badge">

                <div className="badgeContent0">

                    <Badge badgeContent = {genreOfMovie[0]}
                        color= "primary"
                           overlap="circular"
                           sx={{ "& .MuiBadge-badge": { fontSize: 12, height: 25, minWidth: 15 } }}
                    />
                </div>
                <div className="badgeContent1">

                    <Badge badgeContent = {genreOfMovie[1]}
                           color= "primary"
                           overlap="circular"
                           sx={{ "& .MuiBadge-badge": { fontSize: 12, height: 25, minWidth: 15 } }}
                    />
                </div>
                <div className="badgeContent2">

                    <Badge badgeContent = {genreOfMovie[2]}
                           color= "primary"
                           overlap="circular"
                           sx={{ "& .MuiBadge-badge": { fontSize: 12, height: 25, minWidth: 15 } }}
                    />

                </div>


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
                        </div>
                    </div>

            </Link>
    </div>);
}
export {Movie};