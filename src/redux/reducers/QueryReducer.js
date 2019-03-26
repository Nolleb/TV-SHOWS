import * as types from "../actions/ActionTypes";
import initialState from "./initialState";

export default function queryReducer(state = initialState.query, action) {
  console.log("query reducer");
  switch (action.type) {
    case types.UPDATE_SEARCH_QUERY:
      return action.query;
    default:
      return state;
  }
}
