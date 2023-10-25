import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";
import { useContext } from "react";

import { StyledMovieWrapper, StyledMovieTitle, StyledMovieDate, StyledMovieImg, StyledWatchlistRemoveButton, StyledWatchlistAddButton } from "./styled/Movie.styled";

function Movie({ movie }) {
  const { addMovieToWatchlist, removeMovieFromWatchlist, watchlist } = useContext(GlobalContext);
  let storedMovie = watchlist.find(item => item.id === movie.id);
  const alreadyInWatchlist = storedMovie ? true : false;

  return (
    <StyledMovieWrapper className="movie">
      <div>
        <StyledMovieDate>{movie?.release_date?.slice(0, 4)}</StyledMovieDate>
      </div>
      <div>
        <Link
          to={`/mikes-movie-hub/movie/${movie?.id}`}
          style={{ textDecoration: "none", color: "#fff" }}
          onClick={() => window.scrollTo({ top: 0, left: 0 })}
        >
          {StyledMovieImg && (
            <StyledMovieImg
              style={{ marginInline: "auto" }}
              src={movie?.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : "https://via.placeholder.com/400"}
              alt={movie?.title}
            />
          )}
        </Link>
      </div>
      <div>
        <AiFillStar style={{ color: "yellow" }} />
        <span style={{ marginInline: "6px" }}>{`${movie?.vote_average?.toFixed(1)} / 10`}</span>
        <AiFillStar style={{ color: "yellow" }} />
        <StyledMovieTitle>{movie?.title}</StyledMovieTitle>
      </div>
      {alreadyInWatchlist ? <StyledWatchlistRemoveButton onClick={() => removeMovieFromWatchlist(movie.id)}>Remove from Watchlist</StyledWatchlistRemoveButton> : <StyledWatchlistAddButton onClick={() => addMovieToWatchlist(movie)}>Add To Watchlist</StyledWatchlistAddButton>}
    </StyledMovieWrapper>
  );
}

export default Movie;
