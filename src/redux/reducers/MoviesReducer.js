import * as types from "../actions/ActionTypes";
import initialState from "./initialState";

export default function movieReducer(state = initialState.movies, action) {
  switch (action.type) {
    case types.LOAD_MOVIES_SUCCESS:
      return action.movies;
      case types.SORT_LIST_BY_NAME:
      return state.slice().sort(function(a, b) {
        var nameA = a.title.toLowerCase(),
          nameB = b.title.toLowerCase()
        if (nameA < nameB)
          return -1
        if (nameA > nameB)
          return 1
        return 0
      })
      case types.REVERSE_LIST_BY_NAME:
      return state.slice().sort(function(a, b) {
        var nameA = a.title.toLowerCase(),
          nameB = b.title.toLowerCase()
        if (nameA > nameB)
          return -1
        if (nameA < nameB)
          return 1
        return 0
      })
    default:
      return state;
  }
}
