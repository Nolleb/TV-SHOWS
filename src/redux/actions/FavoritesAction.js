import * as types from "./ActionTypes";

export function addToFavorites(movie) {
  return {
    type: types.ADD_FAVORITE_ITEM,
    movie
  };
}

export function removeFromFavorites(id, movie) {
  return {
    type: types.REMOVE_FAVORITE_ITEM,
    id,
    movie
  };
}