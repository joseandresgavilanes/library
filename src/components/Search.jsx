import "../Styles/search.css";
import close from "../Assets/close.png";
import { useRef, useState } from "react";

const Search = ({ findItems, cancelSearch }) => {
  const inputRef = useRef(null);

  const [searching, isSearching] = useState(false);
  function handleChange(e) {
    const text = e.target.value;
    if (text !== "") {
      isSearching(true);
    } else {
      isSearching(false);
    }

    findItems(text);
  }

  //handle cancel search
  function handleOnClick() {
    inputRef.current.value = "";
    cancelSearch();
    isSearching(false);
  }
  return (
    <div className="searchMainContainer">
      <img src="/logo.png" alt="" />
      <p className="input-container">
        <input
          ref={inputRef}
          autocomplete="name"
          className="input-field"
          id="text"
          name="text"
          placeholder="Find a book"
          type="text"
          onChange={handleChange}
        />
      </p>
    </div>
  );
};

export default Search;

{
  /* <div className="searchContainer">
        <input
          ref={inputRef}
          className="searchInput"
          type="text"
          placeholder="Search for a book by its name or author's name"
          onChange={handleChange}
        />
        {searching && <img src={close} width="25px" onClick={handleOnClick} />}
      </div> */
}
