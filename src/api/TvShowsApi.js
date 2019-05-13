import axios from "axios";
import apiVariables from "../helpers/variables";

const apiUrl = apiVariables.urlTvShowSearch;
const apiKey = apiVariables.apiKey;

export function getMovies(query) {
  return axios
    .get(apiUrl + query + apiKey)
    .then(res => {
      const tvShows = res.data.results;
      console.log(tvShows);
      return tvShows;
    })
    .catch(error => {
      console.log("error.response");
      console.log(error.response);
      console.log(error);
    });
}
