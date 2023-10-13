import { useSearchParams } from "react-router-dom";
import { StyledSearch, StyledInput } from "./styled/Search.styled";
import { FaSearch } from "react-icons/fa";
import { TiDeleteOutline } from "react-icons/ti";

function Search({ setQuery, deleteQuery, setPageNum }) {
  const [searchParams, setSearchParams] = useSearchParams({ storedQuery: "" });
  const inputValue = searchParams.get("storedQuery");

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

  const handleDelete = () => {
    deleteQuery();
    setSearchParams({ storedQuery: "" });
  };

  return (
    <StyledSearch>
      <StyledInput
        onKeyDown={handleKeyDown}
        value={inputValue}
        onChange={e => setSearchParams({ storedQuery: e.target.value })}
        placeholder="Search for movies..."
        type="text"
      />
      {inputValue ? (
        <TiDeleteOutline
          style={{ color: "#fff", fontSize: "34px", cursor: "pointer", marginRight: "8px" }}
          onClick={() => handleDelete()}
        />
      ) : null}
      <FaSearch
        style={{ color: "#fff", fontSize: "28px", cursor: "pointer" }}
        onClick={e => submitHandler(e)}
      />
    </StyledSearch>
  );
}

export default Search;
