import logo from './logo.svg';
import css from './App.css'
import {Headers, MovieInfo, Movies, MoviesByGenres} from "./components";
import {MainLayout} from "./layouts";
import {MovieInfoPage, MoviesPage} from "./pages";
import {Route, Routes} from "react-router";
import {MoviesBySearch} from "./components/movies/MoviesBySearch";
import {createContext, useState} from "react";
import ReactSwitch from "react-switch";


export const ThemeContext = createContext(null);

function App() {
    const [theme, setTheme] = useState("dark");

    const toggleTheme = () =>{
        setTheme((curr) => (curr === "light" ? "dark" : "light"));
};
  return (
<ThemeContext.Provider value ={{theme,toggleTheme}}>
      <div className="app" id={theme}>


        <Routes>

                <Route path={'/'} element={<MainLayout/>}>
                    <Route path={'/movie/'} element={<MoviesPage/>}/>
                    <Route path={'/movie/:id'} element={<MovieInfo/>}/>
                    {/*<Route path={'/find/:term'} element={<MoviesBySearch/>}/>*/}
                    <Route path={'/movie/:genre_ids'} element={<MoviesPage/>}/>


                </Route>

        </Routes>

          <div className="switch">
              <label>{theme === "light"?"Light Mode":"DarkMode"}</label>
                <ReactSwitch onChange={toggleTheme} checked={theme==="dark"}/>
          </div>

      </div>
</ThemeContext.Provider>
  )
}

export default App;

