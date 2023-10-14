// import { useSearchParams } from "react-router-dom";
import { useRef } from "react";
import { StyledSearch, StyledInput } from "./styled/Search.styled";
import { FaSearch } from "react-icons/fa";
import { TiDeleteOutline } from "react-icons/ti";

function Search({ setQuery, deleteQuery, setPageNum, query }) {
  const inputRef = useRef();

  const submitHandler = () => {
    const value = inputRef.current.value;
    setPageNum(1);
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
    inputRef.current.value = "";
    deleteQuery();
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
