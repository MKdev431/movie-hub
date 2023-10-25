import { NavLink } from "react-router-dom";
import { VscThreeBars } from "react-icons/vsc";
import { GrClose } from "react-icons/gr";
import { useState } from "react";

import { StyledNav, StyledNavItem, IconButton } from "./styled/Nav.styled";

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
      <IconButton style={!activeTrigger ? { display: "block" } : { display: "none" }}>
        <VscThreeBars onClick={stateHandler} />
      </IconButton>
      <IconButton style={activeTrigger ? { display: "block" } : { display: "none" }}>
        <GrClose onClick={stateHandler} />
      </IconButton>
      <StyledNav style={activeTrigger ? { display: "block" } : { display: "none" }}>
        <ul>
          <StyledNavItem onClick={() => window.scrollTo({ top: 0, left: 0 })}>
            <NavLink
              to="/mikes-movie-hub/watchlist"
              onClick={() => window.scrollTo({ top: 0, left: 0 })}
            >
              Watchlist
            </NavLink>
          </StyledNavItem>
          <StyledNavItem onClick={() => window.scrollTo({ top: 0, left: 0 })}>
            <NavLink to="/mikes-movie-hub/popular">Popular</NavLink>
          </StyledNavItem>
          <StyledNavItem onClick={() => window.scrollTo({ top: 0, left: 0 })}>
            <NavLink to="/mikes-movie-hub/top_rated">Top rated</NavLink>
          </StyledNavItem>
          <StyledNavItem onClick={() => window.scrollTo({ top: 0, left: 0 })}>
            <NavLink to="/mikes-movie-hub/upcoming">Upcoming</NavLink>
          </StyledNavItem>
          <StyledNavItem onClick={() => window.scrollTo({ top: 0, left: 0 })}>
            <NavLink to={`/mikes-movie-hub/genre/${MovieGenres.Action}`}>Action</NavLink>
          </StyledNavItem>
          <StyledNavItem onClick={() => window.scrollTo({ top: 0, left: 0 })}>
            <NavLink to={`/mikes-movie-hub/genre/${MovieGenres.Adventure}`}>Adventure</NavLink>
          </StyledNavItem>
          <StyledNavItem onClick={() => window.scrollTo({ top: 0, left: 0 })}>
            <NavLink to={`/mikes-movie-hub/genre/${MovieGenres.Animation}`}>Animation</NavLink>
          </StyledNavItem>
          <StyledNavItem onClick={() => window.scrollTo({ top: 0, left: 0 })}>
            <NavLink to={`/mikes-movie-hub/genre/${MovieGenres.Comedy}`}>Comedy</NavLink>
          </StyledNavItem>
          <StyledNavItem onClick={() => window.scrollTo({ top: 0, left: 0 })}>
            <NavLink to={`/mikes-movie-hub/genre/${MovieGenres.Crime}`}>Crime</NavLink>
          </StyledNavItem>
          <StyledNavItem onClick={() => window.scrollTo({ top: 0, left: 0 })}>
            <NavLink to={`/mikes-movie-hub/genre/${MovieGenres.Documentary}`}>Documentary</NavLink>
          </StyledNavItem>
          <StyledNavItem onClick={() => window.scrollTo({ top: 0, left: 0 })}>
            <NavLink to={`/mikes-movie-hub/genre/${MovieGenres.Drama}`}>Drama</NavLink>
          </StyledNavItem>
          <StyledNavItem onClick={() => window.scrollTo({ top: 0, left: 0 })}>
            <NavLink to={`/mikes-movie-hub/genre/${MovieGenres.Family}`}>Family</NavLink>
          </StyledNavItem>
          <StyledNavItem onClick={() => window.scrollTo({ top: 0, left: 0 })}>
            <NavLink to={`/mikes-movie-hub/genre/${MovieGenres.Fantasy}`}>Fantasy</NavLink>
          </StyledNavItem>
          <StyledNavItem onClick={() => window.scrollTo({ top: 0, left: 0 })}>
            <NavLink to={`/mikes-movie-hub/genre/${MovieGenres.History}`}>History</NavLink>
          </StyledNavItem>
          <StyledNavItem onClick={() => window.scrollTo({ top: 0, left: 0 })}>
            <NavLink to={`/mikes-movie-hub/genre/${MovieGenres.Music}`}>Music</NavLink>
          </StyledNavItem>
          <StyledNavItem onClick={() => window.scrollTo({ top: 0, left: 0 })}>
            <NavLink to={`/mikes-movie-hub/genre/${MovieGenres.Mystery}`}>Mystery</NavLink>
          </StyledNavItem>
          <StyledNavItem onClick={() => window.scrollTo({ top: 0, left: 0 })}>
            <NavLink to={`/mikes-movie-hub/genre/${MovieGenres.Romance}`}>Romance</NavLink>
          </StyledNavItem>
          <StyledNavItem onClick={() => window.scrollTo({ top: 0, left: 0 })}>
            <NavLink to={`/mikes-movie-hub/genre/${MovieGenres.SciFi}`}>Science Fiction</NavLink>
          </StyledNavItem>
          <StyledNavItem onClick={() => window.scrollTo({ top: 0, left: 0 })}>
            <NavLink to={`/mikes-movie-hub/genre/${MovieGenres.Thriller}`}>Thriller</NavLink>
          </StyledNavItem>
          <StyledNavItem onClick={() => window.scrollTo({ top: 0, left: 0 })}>
            <NavLink to={`/mikes-movie-hub/genre/${MovieGenres.War}`}>War</NavLink>
          </StyledNavItem>
          <StyledNavItem onClick={() => window.scrollTo({ top: 0, left: 0 })}>
            <NavLink to={`/mikes-movie-hub/genre/${MovieGenres.Western}`}>Western</NavLink>
          </StyledNavItem>
        </ul>
      </StyledNav>
    </>
  );
}

export default Nav;
