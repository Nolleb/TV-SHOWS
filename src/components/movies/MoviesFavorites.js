import React, { Fragment } from "react";
import PropTypes from "prop-types";

import MovieCard from "./MovieCard";

const MoviesFavorites = ({genres, favorites, isSelected}) => {
  return (
    <Fragment>
      <h2>Favorites list</h2>
      
      {favorites.map(movie => {
        return <MovieCard key={movie.id} {...movie} {...genres} isSelected={isSelected}/>;
      })}
    </Fragment>
  );
};

MoviesFavorites.propTypes = {
  favorites: PropTypes.array.isRequired,
  isSelected: PropTypes.bool.isRequired,
  genres: PropTypes.array.isRequired
};

export default MoviesFavorites;
