import { combineReducers } from "redux";
import movies from "./MoviesReducer";

const rootReducer = combineReducers({
  movies
});

export default rootReducer;
