import { combineReducers } from "redux";
import movies from "./MoviesReducer";
import tvShows from "./TvShowsReducer";
import query from "./QueryReducer";
import isSelected from "./CategoryReducer";
import genres from "./CategoriesListReducer";
import casting from "./CastingReducer";
import favorites from './FavoritesReducer';

const rootReducer = combineReducers({
  movies,
  tvShows,
  query,
  isSelected,
  genres,
  casting,
  favorites
});

export default rootReducer;