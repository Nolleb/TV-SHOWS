import * as types from "./ActionTypes";

export function addToFavorites(movie) {
  return {
    type: types.ADD_FAVORITE_SUCCESS,
    movie
  };
}
