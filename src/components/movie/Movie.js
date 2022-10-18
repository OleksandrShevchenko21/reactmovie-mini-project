import {posterPreview_300} from "../../posterPreview";
import css from './Movie.css'
const Movie = ({movie}) => {


    return (
        <div className="card-item">
        {/*<div className={css.media_type}>{movie.media_type}</div>*/}
        {/*<div className={css.vote_average}>{movie.vote_average}</div>*/}
        {/*<img className={css.poster_path}*/}
        {/*     src={`${posterPreview_300}/${movie.poster_path}`} alt={movie.poster_path}/>*/}
        {/*<div className={css.title}>{movie.title}</div>*/}
        {/*<div className={css.date}>{movie.date}</div>*/}

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
    </div>);
}
export {Movie};