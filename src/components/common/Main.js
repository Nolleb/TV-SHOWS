import React from "react";
import SearchFilters from "../filters/SearchFilters";
import DisplayFilters from "../filters/DisplayFilters";
import Search from "../search/Search";
import MoviesPage from "../movies/MoviesPage";

class Main extends React.Component {
  render() {
    return (
      <div className="c-page">
        <div className="c-search-box c-flex-container shadow">
          <SearchFilters />
          <Search />
        </div>
        <DisplayFilters />
        <MoviesPage />
      </div>
    );
  }
}

export default Main;
