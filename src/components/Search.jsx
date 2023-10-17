import { StyledSearch, StyledInput } from "./styled/Search.styled";
import { FaSearch } from "react-icons/fa";
import { TiDeleteOutline } from "react-icons/ti";

function Search({ setQuery, deleteQuery, setPageNum, query, inputValue, setInputValue }) {
  const submitHandler = () => {
    setPageNum(1);
    setQuery(inputValue);
  };

  const handleKeyDown = e => {
    if (e.key === "Enter") {
      setPageNum(1);
      setQuery(inputValue);
    }
  };

  return (
    <StyledSearch>
      <StyledInput
        onKeyDown={handleKeyDown}
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        placeholder="Search for movies..."
        type="text"
      />
      {query ? (
        <TiDeleteOutline
          className="deleteIcon"
          onClick={() => deleteQuery()}
        />
      ) : null}
      <FaSearch
        className="searchIcon"
        onClick={e => submitHandler(e)}
      />
    </StyledSearch>
  );
}

export default Search;
