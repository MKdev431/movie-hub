import { StyledSearch, StyledInput } from "./styled/Search.styled";
import { useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { TiDeleteOutline } from "react-icons/ti";

function Search({ setQuery, deleteQuery, query, setPageNum }) {
  const inputRef = useRef();

  const submitHandler = () => {
    setPageNum(1);
    const value = inputRef.current.value;
    setQuery(value);
  };

  const handleKeyDown = e => {
    const value = inputRef.current.value;
    if (e.key === "Enter") {
      setPageNum(1);
      setQuery(value);
    }
  };

  const handleDelete = () => {
    deleteQuery();
    inputRef.current.value = "";
  };

  return (
    <StyledSearch>
      <StyledInput
        onKeyDown={handleKeyDown}
        ref={inputRef}
        placeholder="Search for movies..."
        type="text"
      />
      {query ? (
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
