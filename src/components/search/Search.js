import React, { useState } from "react";
import { connect } from "react-redux";
import * as moviesActions from "../../redux/actions/MoviesAction";
import * as queryAction from "../../redux/actions/QueryAction";
import * as tvShowsActions from "../../redux/actions/TvShowsAction";


const Search = props => {
  const [search, setSearch] = useState("");
  const { loadMovies, updateSearchQuery, loadTvShows } = props;

  const isSelected = props.isSelected;  

  const handleSubmit = e => {
    e.preventDefault();
    isSelected?loadMovies(search):loadTvShows(search);
    updateSearchQuery(search);
  };

  const handleChange = e => {
    setSearch(e.target.value);
  };

  return (
    <form
      className="search-container c-flex-container"
      onSubmit={e => handleSubmit(e)}
    >
      <input
        type="text"
        className="search-bar"
        id="search-bar"
        placeholder="Search for movies?"
        onChange={e => handleChange(e)}
      />
      <button className="c-button" onClick={e => handleSubmit(e)}>
        <img
          className="search-icon"
          src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png"
          alt="icon"
        />
      </button>
    </form>
  );
};

function mapStateToProps(state) {
  return {
    movies: state.movies,
    query: state.query,
    tvShows: state.tvShows,
    isSelected: state.isSelected
  };
}

const mapDispatchToProps = {
  loadMovies: moviesActions.loadMovies,
  updateSearchQuery: queryAction.updateSearchQuery,
  loadTvShows: tvShowsActions.loadTvShows
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
