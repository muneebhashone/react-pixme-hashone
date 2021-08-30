import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function HomeSearch() {
  const { searchData, isFetching } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("ingredients");
  const history = useHistory();

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log(search, filter);
    history.push(`/pixme/search?q=${search}&type=${filter}`);
  };

  return (
    <form
      className="home_search"
      onSubmit={(event) => handleSearchSubmit(event)}
    >
      <input
        type="text"
        name="search"
        onChange={(e) => setSearch(e.target.value)}
        placeholder="What's On Your Mind?"
        id="search"
      />
      <select
        name="search_filter"
        onChange={(e) => setFilter(e.target.value)}
        id="search_filter"
        defaultValue={filter}
      >
        <option value="ingredients">Ingredients</option>
        <option value="spirits">Spirits</option>
      </select>
      <button className="home_search-btn">Search</button>
    </form>
  );
}

export default HomeSearch;
