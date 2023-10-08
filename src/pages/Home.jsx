import { useEffect } from "react";
import { StyledHome, StyledContainer } from "../components/styled/Home.styled";
import Search from "../components/Search";
import Movie from "../components/Movie";

const API_URL = `http://www.omdbapi.com/?i=tt3896198&apikey=${import.meta.env.VITE_API_KEY}`;

const movie1 = {
  Title: "Italian Spiderman",
  Year: "2007",
  imdbID: "tt2705436",
  Type: "movie",
  Poster: "https://m.media-amazon.com/images/M/MV5BZWQxMjcwNjItZjI0ZC00ZTc4LWIwMzItM2Q0YTZhNzI3NzdlXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg",
};

function Home() {
  const searchMovies = async title => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.Search);
  };

  useEffect(() => {
    searchMovies("Spiderman");
  }, []);
  return (
    <StyledHome>
      <h1>Movie Hub</h1>
      <Search />
      <StyledContainer>
        <Movie movie1={movie1} />
      </StyledContainer>
    </StyledHome>
  );
}

export default Home;
