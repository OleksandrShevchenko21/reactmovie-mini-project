import {Headers} from "../components";
import {Outlet} from "react-router-dom";
import {MoviesPage} from "../pages";



const MainLayout = () => {

    return (
        <div>
            <Headers/>
            {/*<MoviesPage/>*/}
            <Outlet/>



        </div>
    )
}
export {MainLayout};