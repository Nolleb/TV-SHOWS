import * as types from "../actions/ActionTypes";
import initialState from "./initialState";

export default function categoryReducer(
  state = initialState.isSelected,
  action
) {
  switch (action.type) {
    case types.CHOOSE_CATEGORY:
      return action.isSelected;
    default:
      return state;
  }
}
