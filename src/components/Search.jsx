import { StyledSearch, StyledInput } from "./styled/Search.styled";
import { useRef } from "react";
import { FaSearch } from "react-icons/fa";

function Search({ setQuery }) {
  const inputRef = useRef();

  const submitHandler = () => {
    const value = inputRef.current.value;
    setQuery(value);
    console.log(value);
  };

  const handleKeyDown = e => {
    const value = inputRef.current.value;
    if (e.key === "Enter") {
      setQuery(value);
    }
  };

  return (
    <StyledSearch>
      <StyledInput
        onKeyDown={handleKeyDown}
        ref={inputRef}
        placeholder="Search for movies..."
        type="text"
        className="movie-search"
      />
      <FaSearch
        style={{ color: "#fff", fontSize: "28px", cursor: "pointer" }}
        onClick={e => submitHandler(e)}
      />
    </StyledSearch>
  );
}

export default Search;
