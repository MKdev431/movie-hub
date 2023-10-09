import { useEffect, useState } from "react";
import { StyledHome, StyledContainer } from "../components/styled/Home.styled";
import Search from "../components/Search";
import Movie from "../components/Movie";

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

  return (
    <StyledHome>
      <h1>The Movie Hub</h1>
      <Search setQuery={setQuery} />
      {movies?.length > 0 ? (
        <StyledContainer>
          {movies.map(movie => (
            <Movie
              movie={movie}
              key={movie.id}
            />
          ))}
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
