import { Routes, Route } from "react-router-dom";

import Watchlist from "./pages/Watchlist";
import MovieList from "./pages/MovieList";
import MovieDetails from "./pages/MovieDetails";

function Pages() {
  return (
    <>
      <Routes>
        <Route
          path="/mikes-movie-hub/"
          element={<MovieList />}
        >
          <Route
            path="/mikes-movie-hub/:type"
            element={<MovieList />}
          />
          <Route
            path="/mikes-movie-hub/genre/:genre"
            element={<MovieList />}
          />
        </Route>
        <Route
          path="/mikes-movie-hub/movie/:id"
          element={<MovieDetails />}
        />
        <Route
          path="/mikes-movie-hub/watchlist"
          element={<Watchlist />}
        />
        <Route
          path="/mikes-movie-hub/*"
          element={<h3>Error page</h3>}
        />
      </Routes>
    </>
  );
}

export default Pages;
