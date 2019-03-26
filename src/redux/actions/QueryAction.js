import * as types from "./ActionTypes";

export function updateSearchQuery(query) {
  return {
    type: types.UPDATE_SEARCH_QUERY,
    query
  };
}
