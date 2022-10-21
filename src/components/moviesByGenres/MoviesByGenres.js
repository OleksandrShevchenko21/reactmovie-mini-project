import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {movieActions} from "../../redux";
import {useParams} from "react-router-dom";
import css from './MovieByGenres.css'


const MoviesByGenres = () => {
    const {genre_ids} = useParams();
    const dispatch = useDispatch();
    const {movieByGenres} = useSelector(state => state.movieReducer);


    useEffect(() => {
        console.log(movieByGenres);

        dispatch(movieActions.getByGenres(genre_ids));

    }, [dispatch, genre_ids]);
    return (
        <div className="card-item">


            <div className="card-inner">
                <div className="poster">
                    {/*<img className={css.poster_path} src={`${posterPreview_300}/${movieByGenres.poster_path}`} alt={movieByGenres.poster_path}/>*/}
                </div>

                <div className="card-info">
                    <h3>{movieByGenres.title}</h3>


                    <div className="card-daterate">
                        <h4>{movieByGenres.release_date}</h4>
                        <h4>{movieByGenres.media_type}</h4>
                        <h4>{movieByGenres.vote_average}</h4>


                    </div>

                </div>

            </div>


        </div>);
}
export {MoviesByGenres};