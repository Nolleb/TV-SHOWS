import React from "react";
import MovieSingleCard from "./MovieSingleCard";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as castingAction from "../../redux/actions/CastingAction";
//import movieReducer from "../../redux/reducers/TvShowsReducer";

class MovieSingle extends React.Component {
  componentDidMount(){
    const movieId = parseInt(this.props.match.params.movieId);
    if(movieId){
      this.props.loadCasting(parseInt(movieId));
    }
  }
  render() {
    const { movies, isSelected, tvShows, loadCasting} = this.props;

    const movieId = parseInt(this.props.match.params.movieId);

    const id = isSelected?movies.findIndex(movie => movie.id === movieId):tvShows.findIndex(movie => movie.id === movieId);
    const movie = isSelected?movies[id]:tvShows[id];
 
    
    return (
      <div className="c-single-card">
        <MovieSingleCard movie={movie}/>
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
              ),
              castingNames: state.casting
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
    casting: state.casting
  };
}
const mapDispatchToProps = {
  loadCasting: castingAction.loadCasting
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieSingle);
