import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import css from './HEADERS.module.css'
import {MoviesPage} from "../../pages";
import {movieActions} from "../../redux";

const Headers = () => {
    // const[term,setTerm]=useState("");
    // const dispatch = useDispatch();
    // const submitHandler = (e) =>{
    //     e.preventDefault();
    //     console.log(term);
    //
    //         }

    return (

        <div className={css.headers}>

                <div className={css.text}>
                    <Link to='/'>MovieHeader</Link>
                </div>

            {/*<div className={css.searchbar}>*/}

            {/*    <form className={css.form}*/}
            {/*          onSubmit={submitHandler}>*/}
            {/*        <input type="text"*/}
            {/*               value={term}*/}
            {/*               placeholder="Search Movies"*/}
            {/*               onChange={(e) =>setTerm(e.target.value)}/>*/}

            {/*        <button className={css.button}*/}
            {/*        onClick={(term) => dispatch(movieActions.getBySearch({term}))}*/}
            {/*                type= "submit"><i className="search-button"></i>*/}
            {/*        </button>*/}
            {/*    </form>*/}
            {/*</div>*/}

            <Link to={'movie'}>
                <div className={css.text}>Movies</div>
            </Link>
            <Link to={'movie'}>
                <div className={css.text}>Search</div>
            </Link>

            {/*<div>{movieInfo && (<div>{movieInfo.title}</div>)}</div>*/}
        </div>
    )
}
export {Headers};