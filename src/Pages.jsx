import { Routes, Route } from "react-router-dom";

import Watchlist from "./pages/Watchlist";
import MovieList from "./pages/MovieList";
import MovieDetails from "./pages/MovieDetails";

function Pages() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<MovieList />}
        >
          <Route
            path="/:type"
            element={<MovieList />}
          />
          <Route
            path="/genre/:genre"
            element={<MovieList />}
          />
        </Route>
        <Route
          path="/movie/:id"
          element={<MovieDetails />}
        />
        <Route
          path="/watchlist"
          element={<Watchlist />}
        />
        <Route
          path="/*"
          element={<h3>Error page</h3>}
        />
      </Routes>
    </>
  );
}

export default Pages;
