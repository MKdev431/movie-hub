import { useEffect, useState } from "react";
import { StyledHome, StyledContainer } from "../components/styled/Home.styled";
import Search from "../components/Search";
import Movie from "../components/Movie";

const API_URL = `http://www.omdbapi.com/?i=tt3896198&apikey=${import.meta.env.VITE_API_KEY}`;

function Home() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const searchMovies = async title => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies(query);
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
              key={movie.imdbID}
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
