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
        <hr style={{ marginBlock: "5px" }} />
        <li>
          <NavLink to="/movies/popular">Popular</NavLink>
        </li>
        <li>
          <NavLink to="/movies/top_rated">Top rated</NavLink>
        </li>
        <li>
          <NavLink to="/movies/upcoming">Upcoming</NavLink>
        </li>
      </ul>
    </StyledNav>
  );
}

export default Nav;
