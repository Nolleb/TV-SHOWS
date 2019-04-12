import React, { Fragment } from "react";
import PropTypes from "prop-types";

import MovieCard from "./MovieCard";

const MoviesPage = ({genres, movies, tvShows, isSelected}) => {
  let categories = isSelected? categories = movies: categories = tvShows;
  return (
    <Fragment>
      <h2>{isSelected ? "Movies" : "Tv Shows"}</h2>
      
      {categories.map(movie => {
        return <MovieCard key={movie.id} {...movie} {...genres} isSelected={isSelected}/>;
      })}
    </Fragment>
  );
};

MoviesPage.propTypes = {
  isSelected: PropTypes.bool.isRequired,
  movies: PropTypes.array.isRequired,
  tvShows: PropTypes.array.isRequired,
  genres: PropTypes.array.isRequired
};

export default MoviesPage;
