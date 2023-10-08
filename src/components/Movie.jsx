import { StyledMovie } from "./styled/Home.styled";

function Movie({ movie1 }) {
  return (
    <StyledMovie>
      <div>
        <h3>{movie1.Year}</h3>
      </div>
      <div>
        <img
          src={movie1.Poster}
          alt=""
        />
      </div>
      <div>
        <span>{movie1.Type}</span>
        <h2>{movie1.Title}</h2>
      </div>
    </StyledMovie>
  );
}

export default Movie;
