import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {movieActions} from "../../redux";
import {Genre} from "../genre/Genre";
import css from './Genres.css'

const Genres = () => {

    const dispatch = useDispatch();
    const {genres} = useSelector(state => state.movieReducer);


    useEffect(() => {
console.log(genres)

        dispatch(movieActions.getByGenres())
    }, [])

    return (
        <div >
            <div className="genre-list">

                {genres?.genres?.map(genre => <Genre key={genre.id} genre={genre}/>)}
              </div>

        </div>
    )
}
export {Genres};