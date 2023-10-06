import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/my-account">My account</NavLink>
    </>
  );
}

export default Nav;
