import { useEffect, useState } from "react";
import { StyledHome, StyledContainer } from "../components/styled/Home.styled";
import Search from "../components/Search";
import Card from "../components/Card";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function Home() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const searchMovies = async () => {
    const response = await fetch(!query ? `${API_URL}` : `${API_URL_QUERY}`);
    const data = await response.json();
    console.log(data);

    setMovies(data.results);
  };

  const API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_API_KEY}`;
  const API_URL_QUERY = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&api_key=${import.meta.env.VITE_API_KEY}`;

  useEffect(() => {
    searchMovies();
  }, [query]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  });
  return (
    <StyledHome>
      <h1>The Movie Hub</h1>
      <Search setQuery={setQuery} />
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

export default Home;
