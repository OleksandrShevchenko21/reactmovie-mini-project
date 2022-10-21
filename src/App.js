import logo from './logo.svg';
import css from './App.css'
import {Headers, MovieInfo, Movies} from "./components";
import {MainLayout} from "./layouts";
import {MovieInfoPage, MoviesPage} from "./pages";
import {Route, Routes} from "react-router";
import {MoviesBySearch} from "./components/movies/MoviesBySearch";




function App()  {
  return (

      <div className="app">

        <Routes>

                <Route path={'/'} element={<MainLayout/>}>
                    <Route path={'/movie/'} element={<MoviesPage/>}/>
                    <Route path={'/movie/:id'} element={<MovieInfo/>}/>
                    {/*<Route path={'/find/:term'} element={<MoviesBySearch/>}/>*/}


                </Route>

        </Routes>

          </div>

  );
}

export default App;

