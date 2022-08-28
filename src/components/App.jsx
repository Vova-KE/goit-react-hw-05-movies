import { Routes, Route, NavLink } from "react-router-dom";

import Home from "pages/home/home";
import MovieDetails from "pages/movieDetails/movieDetails";
import Movies from "pages/movies/movies";
import Cast from "./cast/Cast";
import Reviews from "./reviews/reviews";


export const App = () => {
  return (

    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
        <NavLink to="/movies/:movieId">MovieDetails</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/movies" element={<Movies/>} />
        <Route path="/movies/:movieId" element={<MovieDetails/>} />
        <Route path="/movies/:movieId/cast" element={<Cast/>} />
        <Route path="/movies/:movieId/reviews" element={<Reviews/>} />
        <Route path="*" element={<Home/>} />
      </Routes>
    </div>
  );
};
