import { NavLink } from "react-router-dom";
import { StyledNav } from "./styled/Nav.styled";

function Nav() {
  const MovieGenres = {
    Action: 28,
    Adventure: 12,
    Animation: 16,
    Comedy: 35,
    Crime: 80,
    Documentary: 99,
    Drama: 18,
    Family: 10751,
    Fantasy: 14,
    History: 36,
    Horror: 27,
    Music: 10402,
    Mystery: 9648,
    Romance: 10749,
    SciFi: 878,
    Thriller: 53,
    War: 10752,
    Western: 37,
  };
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
        <li>
          <NavLink to={`/genre/${MovieGenres.Action}`}>Action</NavLink>
        </li>
        <li>
          <NavLink to={`/genre/${MovieGenres.Adventure}`}>Adventure</NavLink>
        </li>
        <li>
          <NavLink to={`/genre/${MovieGenres.Animation}`}>Animation</NavLink>
        </li>
        <li>
          <NavLink to={`/genre/${MovieGenres.Comedy}`}>Comedy</NavLink>
        </li>
        <li>
          <NavLink to={`/genre/${MovieGenres.Crime}`}>Crime</NavLink>
        </li>
        <li>
          <NavLink to={`/genre/${MovieGenres.Documentary}`}>Documentary</NavLink>
        </li>
        <li>
          <NavLink to={`/genre/${MovieGenres.Drama}`}>Drama</NavLink>
        </li>
        <li>
          <NavLink to={`/genre/${MovieGenres.Family}`}>Family</NavLink>
        </li>
        <li>
          <NavLink to={`/genre/${MovieGenres.Fantasy}`}>Fantasy</NavLink>
        </li>
        <li>
          <NavLink to={`/genre/${MovieGenres.History}`}>History</NavLink>
        </li>
        <li>
          <NavLink to={`/genre/${MovieGenres.Music}`}>Music</NavLink>
        </li>
        <li>
          <NavLink to={`/genre/${MovieGenres.Mystery}`}>Mystery</NavLink>
        </li>
        <li>
          <NavLink to={`/genre/${MovieGenres.Romance}`}>Romance</NavLink>
        </li>
        <li>
          <NavLink to={`/genre/${MovieGenres.SciFi}`}>Science Fiction</NavLink>
        </li>
        <li>
          <NavLink to={`/genre/${MovieGenres.Thriller}`}>Thriller</NavLink>
        </li>
        <li>
          <NavLink to={`/genre/${MovieGenres.War}`}>War</NavLink>
        </li>
        <li>
          <NavLink to={`/genre/${MovieGenres.Western}`}>Western</NavLink>
        </li>
      </ul>
    </StyledNav>
  );
}

export default Nav;
