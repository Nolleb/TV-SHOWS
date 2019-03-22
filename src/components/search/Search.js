import React from "react";

const Search = () => (
  <form className="search-container c-flex-container">
    <input
      type="text"
      className="search-bar"
      id="search-bar"
      placeholder="Search for movies?"
    />
    <a href="#">
      <img
        className="search-icon"
        src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png"
        alt="icon"
      />
    </a>
  </form>
);

export default Search;
