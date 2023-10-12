import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { StyledHome, StyledContainer } from "../components/styled/Home.styled";
import Card from "../components/Card";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function MovieList() {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const { type } = useParams();

  const API_URL = `https://api.themoviedb.org/3/movie/${type}?api_key=${import.meta.env.VITE_API_KEY}&page=${pageNum}`;

  const getMovieList = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    setMovies(movies.concat(data.results));
  };

  useEffect(() => {
    getMovieList();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, [type]);

  useEffect(() => {
    getMovieList();
  }, [pageNum]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  const loadMoreMovies = () => {
    setPageNum(prevPageNum => prevPageNum + 1);
  };

  return (
    <StyledHome>
      <Link
        to={"/"}
        style={{ textDecoration: "none" }}
      >
        <h1>The Movie Hub</h1>
      </Link>
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
      <button onClick={() => loadMoreMovies()}>load more</button>
    </StyledHome>
  );
}

export default MovieList;
