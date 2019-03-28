import React, { Fragment } from "react";
import { connect } from "react-redux";
import * as moviesActions from "../../redux/actions/MoviesAction";
import * as queryAction from "../../redux/actions/QueryAction";
import * as categoriesListAction from "../../redux/actions/CategoriesListAction";
import { bindActionCreators } from "redux";
import Movie from "./MovieCard";


class MoviesPage extends React.Component {
  componentDidMount() {
    const { movies, actions, query} = this.props;
    
    actions.loadCategories("movie");
    actions.updateSearchQuery(query);

    if (movies.length === 0) {
      actions.loadMovies(query).catch(error => {
        alert("loading movies failed" + error);
        console.log(movies);
      });
    }
  }

  render() {
    const {isSelected, movies, tvShows, genres} = this.props;
    let category ;
    {isSelected? category=movies: category = tvShows}
    return (
      <Fragment>
        <h2>{isSelected?"Movies":"Tv shows"}</h2>
        <ul className="o-layout">
            {category.map(el => {
              return <Movie key={el.id} {...el} isSelected={isSelected} {...genres}/>;
            })}
        </ul>
       
      </Fragment>
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

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadMovies: bindActionCreators(moviesActions.loadMovies, dispatch),
      updateSearchQuery: bindActionCreators(
        queryAction.updateSearchQuery,
        dispatch
      ),
      loadCategories: bindActionCreators(
        categoriesListAction.loadCategories,
        dispatch
      )
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoviesPage);
