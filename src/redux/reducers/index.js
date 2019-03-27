import { combineReducers } from "redux";
import movies from "./MoviesReducer";
import tvShows from "./TvShowsReducer";
import query from "./QueryReducer";
import isSelected from "./CategoryReducer";

const rootReducer = combineReducers({
  movies,
  tvShows,
  query,
  isSelected
});

export default rootReducer;
