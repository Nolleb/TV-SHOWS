import axios from "axios";

import apiVariables from "../helpers/variables";

const apiUrl = apiVariables.urlMovieList;
const apiKey = apiVariables.apiKeyList;

export function getCategories(category) {
  return axios
    .get(apiUrl + category +apiKey)
    .then(res => {
      const genres = res.data.genres;
      console.log(genres);
      return genres;
    })
    .catch(error => {
      console.log("error.response");
      console.log(error.response);
      console.log(error);
    });
}
