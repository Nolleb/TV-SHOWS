import axios from "axios";

//const apiUrl = "https://api.themoviedb.org/3/genre/movie/list?";
const apiUrl = "https://api.themoviedb.org/3/genre/";
const apiKey = "/list?api_key=6274a77e12c826f73648c02c0ae4b6cb";

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
