import logo from './logo.svg';
import css from './App.css'
import {Headers, MovieInfo, Movies} from "./components";
import {MainLayout} from "./layouts";
import {MovieInfoPage, MoviesPage} from "./pages";
import {Route, Routes} from "react-router";




function App()  {
  return (

      <div className="app">

        <Routes>

                <Route path={'/'} element={<MainLayout/>}>
                    <Route path={'/movie/'} element={<MoviesPage/>}/>
                    <Route path={'/movie/:id'} element={<MovieInfo/>}/>


                </Route>

        </Routes>

          </div>

  );
}

export default App;

