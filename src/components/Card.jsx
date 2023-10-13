import { StyledMovie } from "./styled/Home.styled";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";

function Card({ movie }) {
  return (
    <Link
      to={`/movie/${movie?.id}`}
      style={{ textDecoration: "none", color: "#fff" }}
    >
      <StyledMovie>
        <div>
          <h3>{movie?.release_date?.slice(0, 4)}</h3>
        </div>
        <div>
          <img
            src={movie?.poster_path !== null ? `https://image.tmdb.org/t/p/w500${movie?.poster_path}` : "https://via.placeholder.com/400"}
            alt={movie?.title}
          />
        </div>
        <div>
          <AiFillStar style={{ color: "yellow" }} />
          <span style={{ marginInline: "6px" }}>{`${movie?.vote_average?.toFixed(1)} / 10`}</span>
          <AiFillStar style={{ color: "yellow" }} />
          <h2>{movie?.title}</h2>
        </div>
      </StyledMovie>
    </Link>
  );
}

export default Card;
