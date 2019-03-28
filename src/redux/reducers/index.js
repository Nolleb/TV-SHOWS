import { combineReducers } from "redux";
import movies from "./MoviesReducer";
import tvShows from "./TvShowsReducer";
import query from "./QueryReducer";
import isSelected from "./CategoryReducer";
import genres from "./CategoriesListReducer";

const rootReducer = combineReducers({
  movies,
  tvShows,
  query,
  isSelected,
  genres
});

export default rootReducer;
