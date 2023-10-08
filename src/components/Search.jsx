import { StyledSearch, StyledInput } from "./styled/Search.styled";

function Search() {
  return (
    <StyledSearch>
      <StyledInput
        placeholder="Search for movies..."
        type="text"
        className="movie-search"
      />
    </StyledSearch>
  );
}

export default Search;
