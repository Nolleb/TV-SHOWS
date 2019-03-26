import { combineReducers } from "redux";
import movies from "./MoviesReducer";
import query from "./QueryReducer";
import isSelected from "./CategoryReducer";

const rootReducer = combineReducers({
  movies,
  query,
  isSelected
});

export default rootReducer;
