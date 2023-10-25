import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import YouTube from "react-youtube";

import { StyledMovieDetailsWrapper, StyledMovieDetailsImgWrapper, StyledMovieDetailsImg, StyledInfo, StyledInfoMovieTitle, StyledInfoMovieTagline, StyledVoteRuntime, StyledTrailer, StyledRelatedMoviesWrapper, StyledRelatedMoviesTitle } from "../components/styled/MovieDetails.styled";

import Movie from "../components/Movie";
import Carousel from "nuka-carousel";

function MovieDetails() {
  const [currentMovieDetails, setCurrentMovieDetails] = useState();
  const [similarMovies, setSimilarMovies] = useState([]);
  const { id } = useParams();
  const isMedium = window.innerWidth <= 1024 ? true : false;
  const API_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_API_KEY}&append_to_response=videos`;
  const API_URL_SIMILAR_MOVIES = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${import.meta.env.VITE_API_KEY}&page=1&append_to_response=videos`;

  useEffect(() => {
    getMovies();
    getSimilarMovies();
  }, [id]);

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
    return (
      <YouTube
        videoId={trailer.key}
        opts={isMedium && ytOpts}
      />
    );
  }

  const ytOpts = {
    height: "200",
    width: "280",
  };

  return (
    <>
      <StyledMovieDetailsWrapper>
        <StyledMovieDetailsImgWrapper>
          <StyledMovieDetailsImg src={currentMovieDetails?.poster_path !== null ? `https://image.tmdb.org/t/p/w500${currentMovieDetails?.poster_path}` : "https://via.placeholder.com/400"} />
        </StyledMovieDetailsImgWrapper>
        <StyledInfo>
          <div>
            <StyledInfoMovieTitle>
              {currentMovieDetails?.title} {`(${currentMovieDetails?.release_date?.slice(0, 4)})`}
            </StyledInfoMovieTitle>
          </div>
          <div style={{ textAlign: "center" }}>
            <StyledInfoMovieTagline>{currentMovieDetails?.tagline}</StyledInfoMovieTagline>
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
          <StyledTrailer>{currentMovieDetails?.videos && renderTrailer()}</StyledTrailer>
        </StyledInfo>
      </StyledMovieDetailsWrapper>
      <StyledRelatedMoviesWrapper>
        <StyledRelatedMoviesTitle>Related Videos:</StyledRelatedMoviesTitle>
        <Carousel
          autoplay={true}
          slidesToShow={isMedium ? 1 : 3}
          wrapAround={true}
        >
          {similarMovies?.map(movie => (
            <Movie
              movie={movie}
              key={movie.id}
            />
          ))}
        </Carousel>
      </StyledRelatedMoviesWrapper>
    </>
  );
}

export default MovieDetails;
