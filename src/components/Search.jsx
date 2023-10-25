import { FaSearch } from "react-icons/fa";
import { TiDeleteOutline } from "react-icons/ti";

import { StyledSearch, StyledInput, StyledSearchIcon, StyledDeleteIcon } from "./styled/Search.styled";

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
      {query && (
        <StyledDeleteIcon>
          <TiDeleteOutline onClick={deleteQuery} />
        </StyledDeleteIcon>
      )}
      <StyledSearchIcon>
        <FaSearch onClick={e => submitHandler(e)} />
      </StyledSearchIcon>
    </StyledSearch>
  );
}

export default Search;
