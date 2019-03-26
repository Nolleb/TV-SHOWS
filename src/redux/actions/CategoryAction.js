import * as types from "./ActionTypes";

export function chooseCategory(bool) {
  return {
    type: types.CHOOSE_CATEGORY,
    bool
  };
}
