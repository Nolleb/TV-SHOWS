import React, { Fragment } from "react";
import { connect } from "react-redux";
import * as moviesActions from "../../redux/actions/MoviesAction";
import * as queryAction from "../../redux/actions/QueryAction";
import { bindActionCreators } from "redux";
import Movie from "./MovieCard";

class MoviesPage extends React.Component {
  componentDidMount() {
    const { movies, actions, query } = this.props;

    //actions.loadMovies(query);
    actions.updateSearchQuery(query);

    if (movies.length === 0) {
      actions.loadMovies(query).catch(error => {
        alert("loading movies failed" + error);
        console.log(movies);
      });
    }
  }

  render() {
    return (
      <Fragment>
        <h2>Movies</h2>
        <ul className="o-layout">
            {this.props.movies.map(movie => {
              return <Movie key={movie.id} {...movie} />;
            })}
        </ul>
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.movies,
    query: state.query
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadMovies: bindActionCreators(moviesActions.loadMovies, dispatch),
      updateSearchQuery: bindActionCreators(
        queryAction.updateSearchQuery,
        dispatch
      )
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoviesPage);
