import axios from "axios";
import apiVariables from "../helpers/variables";

const apiUrl = apiVariables.urlMovieSearch;
const apiKey = apiVariables.apiKey;

export function getMovies(query) {
  return axios
    .get(apiUrl + query + apiKey)
    .then(res => {
      const movies = res.data.results;
      return movies;
    })
    .catch(error => {
      console.log("error.response");
      console.log(error.response);
      console.log(error);
    });
}
