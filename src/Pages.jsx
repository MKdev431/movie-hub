// import Home from "./pages/Home";
import Login from "./pages/Login";
import MovieList from "./pages/MovieList";
import MovieDetails from "./pages/MovieDetails";
import { Routes, Route } from "react-router-dom";

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
        </Route>
        <Route
          path="/movie/:id"
          element={<MovieDetails />}
        />
        <Route
          path="/login"
          element={<Login />}
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
