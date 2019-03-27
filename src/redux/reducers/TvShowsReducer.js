import * as types from "../actions/ActionTypes";
import initialState from "./initialState";

export default function movieReducer(state = initialState.tvShows, action) {
  switch (action.type) {
    case types.LOAD_TVSHOWS_SUCCESS:
      console.log("action.tvShows");
      console.log(action.tvShows);
      return action.tvShows;
    default:
      return state;
  }
}
