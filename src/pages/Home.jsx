import { useEffect, useState } from "react";
import { StyledHome, StyledContainer } from "../components/styled/Home.styled";
import { Link } from "react-router-dom";
import Search from "../components/Search";
import Card from "../components/Card";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [pageNum, setPageNum] = useState(1);

  const getMovies = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    {
      pageNum < 2 ? setMovies(data.results) : setMovies(movies.concat(data.results));
    }
  };

  const API_URL = `https://api.themoviedb.org/3/${query ? `search/movie?query=${query}&include_adult=false&` : `discover/movie?`}api_key=${import.meta.env.VITE_API_KEY}&page=${pageNum}`;

  const loadMoreMovies = () => {
    setPageNum(prevPageNum => prevPageNum + 1);
  };

  useEffect(() => {
    getMovies();
  }, [pageNum]);

  useEffect(() => {
    setMovies([]);
    getMovies();
  }, [query]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  const deleteQuery = () => {
    setQuery("");
    setPageNum(1);
    setMovies([]);
    getMovies();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };

  return (
    <StyledHome>
      <Link
        to={"/"}
        style={{ textDecoration: "none" }}
      >
        <h1>The Movie Hub</h1>
      </Link>
      <Search
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
                <Card
                  movie={movie}
                  key={movie.id}
                />
              );
            })}
          </StyledContainer>
          <button
            style={{ padding: "30px 50px", marginBlock: "50px" }}
            onClick={() => loadMoreMovies()}
          >
            load more
          </button>
        </>
      ) : (
        <div>
          <h2>No movies found</h2>
        </div>
      )}
    </StyledHome>
  );
}

export default Home;
