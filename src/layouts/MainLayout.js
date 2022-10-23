import {Headers, MoviesSearch} from "../components";
import {Outlet} from "react-router-dom";

const MainLayout = () => {

    return (
        <div>

            <Headers/>

            <Outlet/>

        </div>
    )
}
export {MainLayout};