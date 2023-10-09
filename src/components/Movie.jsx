import { StyledMovie } from "./styled/Home.styled";
import { AiFillStar } from "react-icons/ai";

function Movie({ movie }) {
  return (
    <StyledMovie>
      <div>
        <h3>{movie.release_date.slice(0, 4)}</h3>
      </div>
      <div>
        <img
          // src={movie.poster_path !== "N/A" ? movie.poster_path : "https://via.placeholder.com/400"}
          src={movie.poster_path !== null ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : "https://via.placeholder.com/400"}
          alt={movie.title}
        />
      </div>
      <div>
        <AiFillStar style={{ color: "yellow" }} />
        <span style={{ marginInline: "6px" }}>{movie.vote_average.toFixed(1) + "/10"}</span>
        <AiFillStar style={{ color: "yellow" }} />
        <h2>{movie.title}</h2>
      </div>
    </StyledMovie>
  );
}

export default Movie;
