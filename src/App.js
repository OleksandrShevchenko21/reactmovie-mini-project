import logo from './logo.svg';
import css from './App.css'
import {Headers, Movies} from "./components";
import {MainLayout} from "./layouts";
import {MoviesPage} from "./pages";
import {Route, Routes, Switch} from "react-router-dom";



function App()  {
  return (

      <div className="app">
        <Routes>

                <Route path={'/'} element={<MainLayout/>}>
                    {/*<Route path={'/movie/:id'} element={<MoviesPage/>}/>*/}
                    <Route path={'movie'} element={<MoviesPage/>}/>
                </Route>



        </Routes>

          </div>

  );
}

export default App;

