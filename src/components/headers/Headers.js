import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import css from './HEADERS.module.css'
import {MoviesPage} from "../../pages";
import {movieActions} from "../../redux";
import {Genres} from "../genres/Genres";

const Headers = () => {
    // const[term,setTerm]=useState("");
    // const dispatch = useDispatch();
    // const submitHandler = (e) =>{
    //     e.preventDefault();
    //     console.log(term);
    //
    //         }

    return (
        <div>

        <div className={css.headers}>

                <div className={css.text}>
                    <Link to='/'>MovieHeader</Link>
                </div>

                    <Link to={'movie'}>
                        <div className={css.text}>Movies</div>
                    </Link>
                    <Link to={'movie'}>
                        <div className={css.text}>Search</div>
                    </Link>

        </div>
            <div className={css.text}>
                        {/*<Link to={'genres'}>*/}
                           <Genres/>
                        {/*</Link>*/}

            </div>

        </div>
    )
}
export {Headers};