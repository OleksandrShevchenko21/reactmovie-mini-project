import {posterPreview_300} from "../../posterPreview";
import css from './Movie.css'
import {Link} from "react-router-dom";
import {movieActions} from "../../redux";
import {useDispatch} from "react-redux";
const Movie = ({movie}) => {
    const {id} = movie;
    const dispatch = useDispatch();

    return (
        <div className="card-item">
            <Link to = {`/movie/${movie.id}`}>

            <div className="card-inner">
                <div className="poster">
                    <img className={css.poster_path} src={`${posterPreview_300}/${movie.poster_path}`} alt={movie.poster_path}/>
                </div>

                    <div className="card-info">
                        <h3>{movie.title}</h3>


                        <div className="card-daterate">
                            <h4>{movie.release_date}</h4>
                            <h4>{movie.media_type}</h4>
                            <h4>{movie.vote_average}</h4>


                        </div>

                    </div>

             </div>
                </Link>

    </div>);
}
export {Movie};