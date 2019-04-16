import * as types from "./ActionTypes";
import * as moviesApi from "../../api/MoviesApi";
import setDataNote from "../../helpers/notation";



export function sortMoviesbyName(query) {
  return { 
    type: types.SORT_LIST_BY_NAME, 
    query
  };
}

export function reverseMoviesbyName(query) {
  return { 
    type: types.REVERSE_LIST_BY_NAME, 
    query
  };
}

export function reverseMoviesbyPopularity(query) {
  return { 
    type: types.REVERSE_LIST_BY_POPULARITY, 
    query
  };
}

export function sortMoviesbyPopularity(query) {
  return { 
    type: types.SORT_LIST_BY_POPULARITY, 
    query
  };
}

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
        setDataNote();
      })
      .catch(error => {
        throw error;
      });
  };
}