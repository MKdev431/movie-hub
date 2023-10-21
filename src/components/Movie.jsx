import { StyledMovie } from "./styled/MovieDetails.styled";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";
import { useContext } from "react";

function Movie({ movie }) {
  const { addMovieToWatchlist, removeMovieFromWatchlist, watchlist } = useContext(GlobalContext);
  let storedMovie = watchlist.find(item => item.id === movie.id);
  const alreadyInWatchlist = storedMovie ? true : false;

  return (
    <StyledMovie id="movie">
      <div>
        <h3>{movie?.release_date?.slice(0, 4)}</h3>
      </div>
      <div>
        <Link
          to={`/movie/${movie?.id}`}
          style={{ textDecoration: "none", color: "#fff" }}
          target="_blank"
        >
          <img
            style={{ marginInline: "auto" }}
            src={movie?.poster_path ? `https://image.tmdb.org/t/p/w500${movie?.poster_path}` : "https://via.placeholder.com/400"}
            alt={movie?.title}
          />
        </Link>
      </div>
      <div>
        <AiFillStar style={{ color: "yellow" }} />
        <span style={{ marginInline: "6px" }}>{`${movie?.vote_average?.toFixed(1)} / 10`}</span>
        <AiFillStar style={{ color: "yellow" }} />
        <h2>{movie?.title}</h2>
      </div>
      {alreadyInWatchlist ? (
        <button
          style={{ width: "50%", padding: "10px 20px", borderRadius: "20px", fontSize: "16px", backgroundColor: "red", color: "#fff", cursor: "pointer" }}
          onClick={() => removeMovieFromWatchlist(movie.id)}
        >
          Remove from Watchlist
        </button>
      ) : (
        <button
          style={{ width: "50%", padding: "10px 20px", borderRadius: "20px", fontSize: "16px", backgroundColor: "green", color: "#fff", cursor: "pointer" }}
          onClick={() => addMovieToWatchlist(movie)}
        >
          Add To Watchlist
        </button>
      )}
    </StyledMovie>
  );
}

export default Movie;
