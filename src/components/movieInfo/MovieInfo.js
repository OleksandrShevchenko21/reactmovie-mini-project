import css from'./MovieInfo.css';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {movieActions} from "../../redux";
import { posterPreview_500} from "../../posterPreview";
import {StarsRating} from "../starsRating/StarsRating";

const MovieInfo = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const {movieFromApi} = useSelector(state => state.movieReducer);
    const rateByStarsInfo=StarsRating(movieFromApi.vote_average*0.64)

    useEffect(() => {
        console.log(movieFromApi);

        dispatch(movieActions.getById(id));

    }, [dispatch, id]);
    return (
        <div className="cardInfo-item">


                <div className="cardInfo-inner">
                    <div className="posterInfo">
                        <img className={css.poster_path} src={`${posterPreview_500}/${movieFromApi.poster_path}`} alt={movieFromApi.poster_path}/>
                    </div>

                    <div className="cardInfo-info">

                        <div className="cardInfo-title">

                            <h4>{movieFromApi.title}</h4>
                        </div>

                        <div className="cardInfo-tagline">

                            <h4>{movieFromApi.tagline}</h4>
                        </div>

                        <div className="cardInfo-overview">
                            <h3>{movieFromApi.overview}</h3>
                        </div>

                        <div className="cardInfo-daterate">
                            <h4>{movieFromApi.release_date}</h4>

                            <h4>{movieFromApi.media_type}</h4>
                            <h4>{rateByStarsInfo}</h4>


                        </div>

                    </div>

                </div>

        </div>
                    );
}
export {MovieInfo};