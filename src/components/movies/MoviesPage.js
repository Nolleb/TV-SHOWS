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
    const {isSelected, movies, tvShows} = this.props;
    let category ;

    {isSelected? category=movies: category = tvShows}
    return (
      <Fragment>
        <h2>{isSelected?"Movies":"Tv shows"}</h2>
        <ul className="o-layout">
            {category.map(movie => {
              return <Movie key={movie.id} {...movie} isSelected={this.props.isSelected}/>;
            })}
        </ul>
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.movies,
    tvShows: state.tvShows,
    query: state.query,
    isSelected: state.isSelected
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
