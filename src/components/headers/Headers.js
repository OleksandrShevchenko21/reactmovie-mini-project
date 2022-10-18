import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import css from './HEADERS.module.css'

const Headers = () => {

    return (

        <div className={css.headers}>
            <Link to='/'>
                <div className={css.text}>MovieHeader</div>
            </Link>
            <Link to={'movie'}>
                <div className={css.text}>Movies</div>
            </Link>

            {/*<div>{movieInfo && (<div>{movieInfo.title}</div>)}</div>*/}
        </div>
    )
}
export {Headers};