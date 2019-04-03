import React from "react";
import MovieSingleCard from "./MovieSingleCard";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class MovieSingle extends React.Component {

  render() {
    const closeSingleCard = (e) => {
      e.preventDefault();
      alert("toto")
    }
    const {genres, movies, isSelected, tvShows} = this.props;

    const movieId = parseInt(this.props.match.params.movieId);

    const id = isSelected?movies.findIndex(movie => movie.id === movieId):tvShows.findIndex(movie => movie.id === movieId);
    const movie = isSelected?movies[id]:tvShows[id];
    return (
      <div className="c-single-card">
        <MovieSingleCard {...genres} movie={movie}/>
        <Link to="/" className="c-single-card__close">&#x271A;</Link>
      </div>
    );
  }
}

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
    isSelected: state.isSelected
  };
}


export default connect(
  mapStateToProps
)(MovieSingle);
