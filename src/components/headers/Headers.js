import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import css from './HEADERS.module.css'
import {MoviesPage} from "../../pages";
import {movieActions} from "../../redux";
import {MoviesSearch} from "../moviesSearch/MoviesSearch";


const Headers = () => {


    return (
        <div>

        <div className={css.headers}>

                <div className={css.text}>
                    <Link to='/'>Home</Link>
                </div>

                    <Link to={'movie'}>
                        <div className={css.text}>Movies</div>
                    </Link>


        </div>


        </div>
    )
}
export {Headers};