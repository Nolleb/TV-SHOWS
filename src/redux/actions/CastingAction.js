import * as types from "./ActionTypes";
import * as castingApi from "../../api/CastingApi";

export function loadCastSuccess(casting) {
  return {
    type: types.LOAD_CASTING_SUCCESS,
    casting
  };
}

export function loadCasting(id) {
  return function(dispatch) {
    return castingApi
      .getCasting(id)
      .then(casting => {
        console.log("dispatch action casting");
        dispatch(loadCastSuccess(casting));
      })
      .catch(error => {
        throw error;
      });
  };
}
