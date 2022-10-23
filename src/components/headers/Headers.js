import {Link, useParams} from "react-router-dom";
import css from './HEADERS.module.css'


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