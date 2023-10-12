import Home from "./pages/Home";
import Login from "./pages/Login";
import MovieList from "./pages/MovieList";
import MovieDetails from "./pages/MovieDetails";
import MyAccount from "./pages/MyAccount";
import { Routes, Route } from "react-router-dom";

function Pages() {
  return (
    <>
      <Routes>
        <Route
          index
          element={<Home />}
        />
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/movie/:id"
          element={<MovieDetails />}
        />
        <Route
          path="/movies/:type"
          element={<MovieList />}
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
