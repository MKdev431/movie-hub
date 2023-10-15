import { NavLink } from "react-router-dom";
import { StyledNav } from "./styled/Nav.styled";

function Nav() {
  return (
    <StyledNav>
      <ul>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/popular">Popular</NavLink>
        </li>
        <li>
          <NavLink to="/top_rated">Top rated</NavLink>
        </li>
        <li>
          <NavLink to="/upcoming">Upcoming</NavLink>
        </li>
      </ul>
    </StyledNav>
  );
}

export default Nav;
