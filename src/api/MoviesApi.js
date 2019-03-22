import axios from "axios";
//const baseUrl = process.env.API_URL + "/authors/";
const apiUrl = "https://api.themoviedb.org/3/search/movie?query=";
const apiKey = "&api_key=6274a77e12c826f73648c02c0ae4b6cb";
const query = "batman";

export function getMovies() {
  return axios
    .get(apiUrl + query + apiKey)
    .then(res => {
      const movies = res.data.results;
      console.log("movies api");
      console.log(movies);
      return movies;
    })
    .catch(error => {
      console.log("error.response");
      console.log(error.response);
      console.log(error);
    });
}
