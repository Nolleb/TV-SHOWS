import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import MovieCard from "./MovieCard";
//import {getAllFavorites} from "../../redux/reducers/FavoritesReducer";
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

// function mapStateToProps  (state) {
//   //const getAllFavorites = makeGetAllFavoritess;
//   return {
//     favorites: makeGetAllFavorites(state) 
//   } 
// }

const mapStateToProps = () => {
  const getAllFavorites = makeGetAllFavorites();
  return (state)=> getAllFavorites(state)
}
// const mapStateToProps=(state)=> {
//     return {
//    // favorites: state.favorites
//     //favorites: getAllFavorites(state)
//     favorites: getAllFavorites(state)
//   };
// }

//export default MoviesFavorites;
export default connect(
  mapStateToProps
)(MoviesFavorites);