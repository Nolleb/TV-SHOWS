import * as types from "../actions/ActionTypes";
import initialState from "./initialState";

export default function favoritesReducer(state = initialState.favorites, action) {
    switch (action.type) {
        case types.ADD_FAVORITE_ITEM:
            return [...state, { ...action.movie }];
        case types.REMOVE_FAVORITE_ITEM:
            return state.filter(movie => movie.id !== action.movie.id);
        default:
            return state;
  }
}