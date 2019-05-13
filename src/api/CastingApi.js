import axios from "axios";
import apiVariables from "../helpers/variables";

const apiUrl = apiVariables.urlMovie;
const apiKey = apiVariables.apiCreditKey;

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
