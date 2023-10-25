import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

import { StyledList, StyledTitle, StyledContainer } from "../components/styled/MovieList.styled";

import Movie from "../components/Movie";

function Watchlist() {
  const { watchlist } = useContext(GlobalContext);

  return (
    <StyledList>
      <StyledTitle>Watchlist</StyledTitle>
      <StyledContainer>
        {watchlist?.length > 0 ? (
          watchlist.map(movie => (
            <Movie
              key={movie.id}
              movie={movie}
            />
          ))
        ) : (
          <div>Your watchlist is empty. Add something...</div>
        )}
      </StyledContainer>
    </StyledList>
  );
}

export default Watchlist;
