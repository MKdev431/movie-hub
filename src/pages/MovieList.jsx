import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { StyledHome, StyledContainer } from "../components/styled/Home.styled";
import Card from "../components/Card";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function MovieList() {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const { type } = useParams();

  const API_URL = `https://api.themoviedb.org/3/movie/${type}?api_key=${import.meta.env.VITE_API_KEY}`;

  const getMovies = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    console.log(data);

    setMovies(data.results);
  };

  useEffect(() => {
    getMovies();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, [type]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  });
  return (
    <StyledHome>
      <h1>The Movie Hub</h1>
      <h2 style={{ marginBlock: "10px", textTransform: "capitalize" }}>{type}</h2>
      {movies?.length > 0 ? (
        <StyledContainer>
          {movies.map(movie => {
            return isLoading ? (
              <div key={movie.id}>
                <SkeletonTheme highlightColor="#444">
                  <Skeleton
                    baseColor="#202020"
                    height={500}
                    width={400}
                    duration={2}
                  />
                </SkeletonTheme>
              </div>
            ) : (
              <Card
                movie={movie}
                key={movie.id}
              />
            );
          })}
        </StyledContainer>
      ) : (
        <div>
          <h2>No movies found</h2>
        </div>
      )}
    </StyledHome>
  );
}

export default MovieList;
