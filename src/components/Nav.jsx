import { NavLink } from "react-router-dom";
import { VscThreeBars } from "react-icons/vsc";
import { GrClose } from "react-icons/gr";
import { useState } from "react";

import { Icon } from "./styled/Nav.styled";
import { StyledNav } from "./styled/Nav.styled";

function Nav() {
  const [activeTrigger, setActiveTrigger] = useState(false);

  const stateHandler = () => {
    setActiveTrigger(currentState => !currentState);
  };

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
    <>
      <Icon style={!activeTrigger ? { display: "block" } : { display: "none" }}>
        <VscThreeBars onClick={stateHandler} />
      </Icon>
      <Icon style={activeTrigger ? { display: "block" } : { display: "none" }}>
        <GrClose
          style={{ backgroundColor: "white", borderRadius: "5px" }}
          onClick={stateHandler}
        />
      </Icon>
      <StyledNav style={activeTrigger ? { display: "block" } : { display: "none" }}>
        <ul>
          <li>
            <NavLink
              to="/mikes-movie-hub/watchlist"
              onClick={() => window.scrollTo({ top: 0, left: 0 })}
            >
              Watchlist
            </NavLink>
          </li>
          <li>
            <NavLink to="/mikes-movie-hub/popular">Popular</NavLink>
          </li>
          <li>
            <NavLink to="/mikes-movie-hub/top_rated">Top rated</NavLink>
          </li>
          <li>
            <NavLink to="/mikes-movie-hub/upcoming">Upcoming</NavLink>
          </li>
          <li>
            <NavLink to={`/mikes-movie-hub/genre/${MovieGenres.Action}`}>Action</NavLink>
          </li>
          <li>
            <NavLink to={`/mikes-movie-hub/genre/${MovieGenres.Adventure}`}>Adventure</NavLink>
          </li>
          <li>
            <NavLink to={`/mikes-movie-hub/genre/${MovieGenres.Animation}`}>Animation</NavLink>
          </li>
          <li>
            <NavLink to={`/mikes-movie-hub/genre/${MovieGenres.Comedy}`}>Comedy</NavLink>
          </li>
          <li>
            <NavLink to={`/mikes-movie-hub/genre/${MovieGenres.Crime}`}>Crime</NavLink>
          </li>
          <li>
            <NavLink to={`/mikes-movie-hub/genre/${MovieGenres.Documentary}`}>Documentary</NavLink>
          </li>
          <li>
            <NavLink to={`/mikes-movie-hub/genre/${MovieGenres.Drama}`}>Drama</NavLink>
          </li>
          <li>
            <NavLink to={`/mikes-movie-hub/genre/${MovieGenres.Family}`}>Family</NavLink>
          </li>
          <li>
            <NavLink to={`/mikes-movie-hub/genre/${MovieGenres.Fantasy}`}>Fantasy</NavLink>
          </li>
          <li>
            <NavLink to={`/mikes-movie-hub/genre/${MovieGenres.History}`}>History</NavLink>
          </li>
          <li>
            <NavLink to={`/mikes-movie-hub/genre/${MovieGenres.Music}`}>Music</NavLink>
          </li>
          <li>
            <NavLink to={`/mikes-movie-hub/genre/${MovieGenres.Mystery}`}>Mystery</NavLink>
          </li>
          <li>
            <NavLink to={`/mikes-movie-hub/genre/${MovieGenres.Romance}`}>Romance</NavLink>
          </li>
          <li>
            <NavLink to={`/mikes-movie-hub/genre/${MovieGenres.SciFi}`}>Science Fiction</NavLink>
          </li>
          <li>
            <NavLink to={`/mikes-movie-hub/genre/${MovieGenres.Thriller}`}>Thriller</NavLink>
          </li>
          <li>
            <NavLink to={`/mikes-movie-hub/genre/${MovieGenres.War}`}>War</NavLink>
          </li>
          <li>
            <NavLink to={`/mikes-movie-hub/genre/${MovieGenres.Western}`}>Western</NavLink>
          </li>
        </ul>
      </StyledNav>
    </>
  );
}

export default Nav;
