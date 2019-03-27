import * as types from "./ActionTypes";
import * as tvShowsApi from "../../api/TvShowsApi";

export function loadTvShowsSuccess(tvShows) {
  return {
    type: types.LOAD_TVSHOWS_SUCCESS,
    tvShows
  };
}

export function loadTvShows(query) {
  return function(dispatch) {
    return tvShowsApi
      .getMovies(query)
      .then(tvShows => {
        console.log("dispatch action");
        dispatch(loadTvShowsSuccess(tvShows));
      })
      .catch(error => {
        throw error;
      });
  };
}