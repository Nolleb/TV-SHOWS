import axios from "axios";
//import initialState from "../redux/reducers/initialState";
//const baseUrl = process.env.API_URL + "/authors/";
const apiUrl = "https://api.themoviedb.org/3/search/tv?query=";
const apiKey = "&api_key=6274a77e12c826f73648c02c0ae4b6cb";
//const query = "batman";

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
