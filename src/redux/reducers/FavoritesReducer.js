import * as types from "../actions/ActionTypes";
import initialState from "./initialState";

export default function favoritesReducer(state = initialState.favorites, action) {
    console.log("reducer favorites");
        console.log(action.movie);
    switch (action.type) {
        case types.ADD_FAVORITE_SUCCESS:
        console.log("reducer favorites case add");
            console.log(action.movie);
        return [...state, { ...action.movie }];
        default:
        return state;
  }
}
