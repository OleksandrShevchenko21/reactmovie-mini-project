import {useDispatch} from "react-redux";
import  css from './Genre.css'

const Genre = ({genre}) => {

    const dispatch = useDispatch();

    return (
        <div className="genre-item">
            {/*<Link to = {`/movie/${movie.id}`}>**/}

                    <div className="genre-info">
                        <h5>{genre.name}</h5>

                        </div>




            {/*</Link>*/}

         </div>
    )
}
export {Genre};