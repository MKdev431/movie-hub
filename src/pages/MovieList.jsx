import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import Search from "../components/Search";
import Movie from "../components/Movie";

import { StyledList, StyledContainer } from "../components/styled/MovieList.styled";

function MovieList() {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [pageNum, setPageNum] = useState(1);
  const [loadButtonDisabled, setLoadButtonDisabled] = useState([]);
  const { type, genre } = useParams();

  const API_URL_BY_TYPE = `https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=${import.meta.env.VITE_API_KEY}&page=${pageNum}`;
  const API_URL_BY_QUERY = `https://api.themoviedb.org/3/${query ? `search/movie?query=${query}&include_adult=false&` : `discover/movie?`}api_key=${import.meta.env.VITE_API_KEY}&page=${pageNum}`;
  const API_URL_BY_GENRE = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&sort_by=popularity.desc&with_genres=${genre}&api_key=${import.meta.env.VITE_API_KEY}&page=${pageNum}`;

  const getMovies = async () => {
    const response = await fetch((genre && !query && API_URL_BY_GENRE) || (query && API_URL_BY_QUERY) || API_URL_BY_TYPE);
    const data = await response.json();
    {
      pageNum > 1 ? setMovies(currentMovies => [...currentMovies, ...data.results]) : setMovies(data.results);
    }
    setLoadButtonDisabled(data.results);
  };

  useEffect(() => {
    setIsLoading(true);
    getMovies();
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [pageNum, query, type, genre]);

  useEffect(() => {
    setMovies([]);
    setPageNum(1);
    setQuery("");
    setInputValue("");
  }, [type, genre]);

  const deleteQuery = () => {
    setIsLoading(true);
    setQuery("");
    setPageNum(1);
    setMovies([]);
    getMovies();
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    setInputValue("");
  };

  const loadMoreMovies = () => {
    setPageNum(prevPageNum => prevPageNum + 1);
  };

  return (
    <StyledList>
      <h1>Mike's Movie Hub</h1>
      <Search
        inputValue={inputValue}
        setInputValue={setInputValue}
        query={query}
        setQuery={setQuery}
        deleteQuery={deleteQuery}
        setPageNum={setPageNum}
      />
      {movies?.length > 0 ? (
        <>
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
                <Movie
                  movie={movie}
                  key={movie.id}
                />
              );
            })}
          </StyledContainer>
        </>
      ) : (
        <div>No movies found</div>
      )}
      <div>
        <button
          style={{ padding: "10px 20px", marginBottom: "50px", borderRadius: "20px", cursor: "pointer" }}
          onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
        >
          Scroll Top
        </button>
        <button
          style={{ padding: "10px 20px", marginTop: "50px", borderRadius: "20px", cursor: "pointer" }}
          onClick={() => loadMoreMovies()}
          disabled={loadButtonDisabled.length <= 1 && true}
        >
          Load More
        </button>
      </div>
    </StyledList>
  );
}

export default MovieList;
