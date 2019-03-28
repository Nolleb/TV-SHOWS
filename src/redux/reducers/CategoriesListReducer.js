import * as types from "../actions/ActionTypes";
import initialState from "./initialState";

export default function categoriesListReducer(state = initialState.genres, action) {
  console.log("reducer");
  switch (action.type) {
    case types.LOAD_CATEGORIES_SUCCESS:
      return action.genres;
    default:
      return state;
  }
}
