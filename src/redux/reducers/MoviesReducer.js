import * as types from "../actions/ActionTypes";
import initialState from "./initialState";

export default function movieReducer(state = initialState.movies, action) {
  switch (action.type) {
    case types.LOAD_MOVIES_SUCCESS:
      console.log("action.movies");
      console.log(action.movies);
      return action.movies;
    default:
      return state;
  }
}
