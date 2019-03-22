import * as types from "./ActionTypes";
import * as moviesApi from "../../api/MoviesApi";

export function loadMoviesSuccess(movies) {
  console.log("movies actions dispatch");
  console.log(movies);
  return {
    type: types.LOAD_MOVIES_SUCCESS,
    movies
  };
}

export function loadMovies() {
  return function(dispatch) {
    return moviesApi
      .getMovies()
      .then(movies => {
        console.log("dispatch action from loadMovies");
        console.log(movies);
        dispatch(loadMoviesSuccess(movies));
      })
      .catch(error => {
        throw error;
      });
  };
}
