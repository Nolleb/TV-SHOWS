import React, { Fragment } from "react";
import { connect } from "react-redux";
import * as moviesActions from "../../redux/actions/MoviesAction";
import { bindActionCreators } from "redux";
import Movie from "./MovieCard";

class MoviesPage extends React.Component {
  componentDidMount() {
    const { movies, actions } = this.props;
    console.log("actions in componentDiDMount");
    
   actions.loadMovies();
   console.log(movies);
    if (movies.length === 0) {
      actions.loadMovies().catch(error => {
        alert("loading movies failed" + error);
        console.log(movies);
      });
    }
  }

  render() {
    return (
      <Fragment>
      <ul className="o-layout">
        {this.props.movies.map(movie => {
          return <Movie key={movie.id} {...movie}/>;
        })}
      </ul>
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.movies
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadMovies: bindActionCreators(moviesActions.loadMovies, dispatch)
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoviesPage);
