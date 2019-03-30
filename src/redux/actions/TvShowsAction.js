import * as types from "./ActionTypes";
import * as tvShowsApi from "../../api/TvShowsApi";
import setDataNote from "../../helpers/notation";

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
        setDataNote();
      })
      .catch(error => {
        throw error;
      });
  };
}