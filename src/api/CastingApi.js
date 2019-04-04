import axios from "axios";
//import initialState from "../redux/reducers/initialState";
//const baseUrl = process.env.API_URL + "/authors/";
const apiUrl = "https://api.themoviedb.org/3/movie/";
const apiKey = "/credits?api_key=6274a77e12c826f73648c02c0ae4b6cb";
//const query = "batman";

export function getCasting(id) {
  return axios
    .get(apiUrl + id + apiKey)
    .then(res => {
        let casting = res.data.cast.slice(0, 9);
        console.log("data from api cast");
        console.log(casting);
       return casting;
    })
    .catch(error => {
      console.log("error.response");
      console.log(error.response);
      console.log(error);
    });
}
