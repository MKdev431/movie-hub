import { NavLink } from "react-router-dom";
import { StyledNav } from "./styled/Nav.styled";

function Nav() {
  return (
    <StyledNav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/my-account">My account</NavLink>
        </li>
      </ul>
    </StyledNav>
  );
}

export default Nav;
