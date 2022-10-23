import {Headers, MoviesSearch} from "../components";
import {Outlet} from "react-router-dom";
import {MoviesPage} from "../pages";



const MainLayout = () => {

    return (
        <div>
            <Headers/>
            {/*<MoviesSearch/>*/}
            <Outlet/>



        </div>
    )
}
export {MainLayout};