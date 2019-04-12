import React from "react";
import SearchFilters from "../filters/SearchFilters";
import DisplayFilters from "../filters/DisplayFilters";
import Search from "../search/Search";
import MoviesPage from "../movies/MoviesPage";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loadMovies } from "../../redux/actions/MoviesAction";
import { loadTvShows } from "../../redux/actions/TvShowsAction";
import { loadCategories } from "../../redux/actions/CategoriesListAction";
import { updateSearchQuery } from "../../redux/actions/QueryAction";

class Main extends React.Component {
  componentDidMount() {
    const {
      movies,
      query,
      loadCategories,
      loadMovies,
      loadTvShows,
      tvShows
    } = this.props;

    
    if (movies.length === 0) {
      loadMovies(query);
    }
    if (tvShows.length === 0) {
      loadTvShows(query);
    }
    if(movies.length === 0 || tvShows.length === 0) {
      loadCategories('movie');
    }
  }

  render() {
    const { movies, isSelected, tvShows } = this.props;
    let categories;
    {
      isSelected ? (categories = movies) : (categories = tvShows);
    }

    return (
      <div className="c-page">
        <div className="c-search-box c-flex-container shadow">
          <SearchFilters />
          <Search />
        </div>
        <DisplayFilters />
        <MoviesPage genres={this.props.genres} categories={categories} movies={movies} tvShows={tvShows} isSelected={isSelected}/>
      </div>
    );
  }
}

Main.propTypes = {
  isSelected: PropTypes.bool.isRequired,
  movies: PropTypes.array.isRequired,
  tvShows: PropTypes.array.isRequired,
  query: PropTypes.string.isRequired,
  loadCategories: PropTypes.func.isRequired,
  loadMovies: PropTypes.func.isRequired,
  loadTvShows: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    movies:
      state.genres === 0
        ? []
        : state.movies.map(movie => {
            return {
              ...movie,
              genreNames: state.genres.filter(genre =>
                movie.genre_ids.includes(genre.id)
              )
            };
          }),
    tvShows:
      state.genres === 0
        ? []
        : state.tvShows.map(movie => {
            return {
              ...movie,
              genreNames: state.genres.filter(genre =>
                movie.genre_ids.includes(genre.id)
              )
            };
          }),
    query: state.query,
    genres: state.genres,
    isSelected: state.isSelected,
    cast: state.cast
  };
}

const mapDispatchToProps = {
  loadMovies,
  loadTvShows,
  updateSearchQuery,
  loadCategories
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
