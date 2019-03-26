import * as types from "./ActionTypes";
import * as moviesApi from "../../api/MoviesApi";

export function loadMoviesSuccess(movies) {
  return {
    type: types.LOAD_MOVIES_SUCCESS,
    movies
  };
}

export function loadMovies(query) {
  return function(dispatch) {
    return moviesApi
      .getMovies(query)
      .then(movies => {
        console.log("dispatch action");
        dispatch(loadMoviesSuccess(movies));
      })
      .catch(error => {
        throw error;
      });
  };
}