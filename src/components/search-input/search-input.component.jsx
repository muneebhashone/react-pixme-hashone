import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

function SearchInput() {
  const [search, setSearch] = useState("");
  const history = useHistory();

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    history.push(`/pixme/search?q=${search}`);
  };

  return (
    <div className="header_search">
      <form onSubmit={(event) => handleSearchSubmit(event)}>
        <input
          type="text"
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Here"
          id="search"
        />
        <button className="header_search-btn">
          <BsSearch />
        </button>
      </form>
    </div>
  );
}

export default SearchInput;
