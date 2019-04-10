import * as types from "../actions/ActionTypes";
import initialState from "./initialState";

const firstSlide = "toto";
const secondSlide ="tata";
const beforeLastSlide = "tata";
const lastSlide= "tititi";

export default function castReducer(state = initialState.casting, action) {
  switch (action.type) {
    case types.LOAD_CASTING_SUCCESS:
      return action.casting;
    case types.LOAD_SLIDER_FROM_CASTING:

      
      // secondSlide = state[Object.keys(state)[1]],
      // lastSlide = state[Object.keys(state)[state.length-1]],
      // beforeLastSlide = state[Object.keys(state)[state.length-2]]
       
      return {
        firstSlide,
        secondSlide,
        ...state,
        beforeLastSlide,
        lastSlide
      }
        
      default:
      return state;
  }
}