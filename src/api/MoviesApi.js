import axios from "axios";

const apiUrl = "https://api.themoviedb.org/3/search/movie?query=";
const apiKey = "&api_key=6274a77e12c826f73648c02c0ae4b6cb";

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
