import Home from "./pages/Home";
import Login from "./pages/Login";
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
          path="/my-account"
          element={<MyAccount />}
        />
        <Route
          path="/movie/:id"
          element={<h3>Movie detail page</h3>}
        />
        <Route
          path="/movies/:type"
          element={<h3>Movies list page</h3>}
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
