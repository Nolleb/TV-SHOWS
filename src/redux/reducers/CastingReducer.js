import * as types from "../actions/ActionTypes";
import initialState from "./initialState";

export default function castReducer(state = initialState.casting, action) {
  switch (action.type) {
    case types.LOAD_CASTING_SUCCESS:
      return action.casting;
    default:
      return state;
  }
}