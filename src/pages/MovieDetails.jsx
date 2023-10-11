import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function MovieDetails() {
  const [currentMovieDetails, setCurrentMovieDetails] = useState();
  const { id } = useParams();
  const API_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_API_KEY}`;

  useEffect(() => {
    getMovies();
    // window.scrollTo(0, 0);
  });

  const getMovies = () => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setCurrentMovieDetails(data));
  };
  //   console.log(currentMovieDetails.title);

  return (
    <div>
      <img src={currentMovieDetails?.backdrop_path !== null ? `https://image.tmdb.org/t/p/w500${currentMovieDetails?.backdrop_path}` : "https://via.placeholder.com/400"} />
    </div>
  );
}

export default MovieDetails;
