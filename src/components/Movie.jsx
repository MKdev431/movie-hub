import { StyledMovie } from "./styled/Home.styled";

function Movie({ movie }) {
  return (
    <StyledMovie>
      <div>
        <h3>{movie.Year}</h3>
      </div>
      <div>
        <img
          src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/400"}
          alt={movie.Title}
        />
      </div>
      <div>
        <span>{movie.Type}</span>
        <h2>{movie.Title}</h2>
      </div>
    </StyledMovie>
  );
}

export default Movie;
