import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import YouTube from "react-youtube";
import { StyledMovieDetails, StyledImg, StyledInfo, StyledVoteRuntime, StyledRelatedMovies } from "../components/styled/MovieDetails.styled";
import Movie from "../components/Movie";
import Carousel from "nuka-carousel";

function MovieDetails() {
  const [currentMovieDetails, setCurrentMovieDetails] = useState();
  const [similarMovies, setSimilarMovies] = useState([]);
  const { id } = useParams();
  const API_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_API_KEY}&append_to_response=videos`;
  const API_URL_SIMILAR_MOVIES = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${import.meta.env.VITE_API_KEY}&page=1&append_to_response=videos`;

  useEffect(() => {
    getMovies();
    getSimilarMovies();
  }, []);

  const getMovies = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    setCurrentMovieDetails(data);
  };

  const getSimilarMovies = async () => {
    const response = await fetch(API_URL_SIMILAR_MOVIES);
    const data = await response.json();
    setSimilarMovies(data.results);
  };

  function renderTrailer() {
    const trailer = currentMovieDetails?.videos?.results?.find(vid => vid.name.toLowerCase().includes("trailer") || vid[0]);
    if (!trailer) return;
    return <YouTube videoId={trailer.key} />;
  }

  return (
    <>
      <StyledMovieDetails>
        <StyledImg>
          <img src={currentMovieDetails?.poster_path !== null ? `https://image.tmdb.org/t/p/w500${currentMovieDetails?.poster_path}` : "https://via.placeholder.com/400"} />
        </StyledImg>
        <StyledInfo>
          <div>
            <h1>
              {currentMovieDetails?.title} {`(${currentMovieDetails?.release_date?.slice(0, 4)})`}
            </h1>
          </div>
          <div style={{ textAlign: "center" }}>
            <h2>{currentMovieDetails?.tagline}</h2>
          </div>
          <StyledVoteRuntime>
            <div>
              <AiFillStar style={{ color: "yellow" }} />
              <span style={{ marginInline: "6px" }}>{`${currentMovieDetails?.vote_average?.toFixed(1)} / 10`}</span>
              <AiFillStar style={{ color: "yellow" }} />
            </div>
            <div>
              <p>{`Runtime: ${currentMovieDetails?.runtime} min`}</p>
            </div>
          </StyledVoteRuntime>
          <div>
            <h3 style={{ marginBottom: "5px" }}>Genres:</h3>
            <span>
              {currentMovieDetails?.genres?.map(genre => (
                <p key={genre.id}>{genre.name}</p>
              ))}
            </span>
          </div>
          <div style={{ marginBlock: "15px" }}>
            <h3 style={{ marginBottom: "5px" }}>Overview:</h3>
            <span>{currentMovieDetails?.overview}</span>
          </div>
          <div>{currentMovieDetails?.videos ? renderTrailer() : null}</div>
        </StyledInfo>
      </StyledMovieDetails>
      <StyledRelatedMovies>
        <h2>Related Videos:</h2>
        <Carousel
          autoplay={true}
          slidesToShow={3}
          wrapAround={true}
        >
          {similarMovies?.map(movie => (
            <Movie
              movie={movie}
              key={movie.id}
            />
          ))}
        </Carousel>
      </StyledRelatedMovies>
    </>
  );
}

export default MovieDetails;
