import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import MovieCard from "./MovieCard";
import {makeGetAllFavorites} from "../../helpers/selectors";

const MoviesFavorites = ({genres, favorites, isSelected}) => {
  return (
    <div className="favorite-container">
      <h2>Favorites list</h2>
      
      {favorites.map(movie => {
        return <MovieCard key={movie.id} {...movie} {...genres} isSelected={isSelected}/>;
      })}
    </div>
  );
};

MoviesFavorites.propTypes = {
  favorites: PropTypes.array.isRequired,
  isSelected: PropTypes.bool.isRequired,
  genres: PropTypes.array.isRequired
};

const mapStateToProps = (state) => {
  return {
    favorites: makeGetAllFavorites(state),
    genres: state.genres,
    isSelected: state.isSelected
  }
}

export default connect(
  mapStateToProps
)(MoviesFavorites);