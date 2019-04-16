import * as types from "../actions/ActionTypes";
import initialState from "./initialState";
import sortByKey from "../../helpers/sortByKey";
import sortByDate from "../../helpers/sortByDate";

export default function movieReducer(state = initialState.movies, action) {
  switch (action.type) {
    case types.LOAD_MOVIES_SUCCESS:
      return action.movies;

      case types.SORT_LIST_BY_NAME:
      return sortByKey(state.slice(), "title");

      case types.REVERSE_LIST_BY_NAME: 
      return sortByKey(state.slice(), "title").reverse();

      case types.SORT_LIST_BY_POPULARITY:
      return sortByKey(state.slice(), "popularity");
  
      case types.REVERSE_LIST_BY_POPULARITY:
      return sortByKey(state.slice(), "popularity").reverse();

      case types.SORT_LIST_BY_NOTATION:
      return sortByKey(state.slice(), "vote_average");
  
      case types.REVERSE_LIST_BY_NOTATION:
      return sortByKey(state.slice(), "vote_average").reverse();

      case types.SORT_LIST_BY_DATE:
      return sortByDate(state.slice(), "release_date");
  
      case types.REVERSE_LIST_BY_DATE:
      return sortByDate(state.slice(), "release_date").reverse();
      
    default:
      return state;
  }
}
