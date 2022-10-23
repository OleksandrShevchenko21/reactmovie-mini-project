import {MovieBySearch, Movies, MoviesSearch} from "../components";
import {Outlet} from "react-router-dom";

const MoviesPage = () => {

    return (
        <div>
            <Movies/>
            {/*<MoviesSearch/>*/}
        </div>

    )
}
export {MoviesPage};