import Home from "./pages/Home";
import Login from "./pages/Login";
import MyAccount from "./pages/MyAccount";
import { Routes, Route } from "react-router-dom";

function Pages() {
  return (
    <>
      <Routes>
        <Route
          path="/"
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
      </Routes>
    </>
  );
}

export default Pages;
