import css from'./MovieInfo.css';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {movieActions} from "../../redux";
import {posterPreview_300} from "../../posterPreview";

const MovieInfo = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const {movieFromApi} = useSelector(state => state.movieReducer);


    useEffect(() => {
        console.log(movieFromApi);

        dispatch(movieActions.getById(id));

    }, [dispatch, id]);
    return (
        <div className="card-item">


                <div className="card-inner">
                    <div className="poster">
                        <img className={css.poster_path} src={`${posterPreview_300}/${movieFromApi.poster_path}`} alt={movieFromApi.poster_path}/>
                    </div>

                    <div className="card-info">
                        <h3>{movieFromApi.title}</h3>


                        <div className="card-daterate">
                            <h4>{movieFromApi.release_date}</h4>
                            <h4>{movieFromApi.media_type}</h4>
                            <h4>{movieFromApi.vote_average}</h4>


                        </div>

                    </div>

                </div>


        </div>);
}
export {MovieInfo};