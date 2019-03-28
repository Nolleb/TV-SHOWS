import * as types from "./ActionTypes";
import * as categoriesListApi from "../../api/CategoriesListApi.js";

export function loadCategoriesSuccess(genres) {
  return {
    type: types.LOAD_CATEGORIES_SUCCESS,
    genres
  };
}

export function loadCategories(category) {
  return function(dispatch) {
    return categoriesListApi
      .getCategories(category)
      .then(genres => {
        console.log("dispatch action");
        dispatch(loadCategoriesSuccess(genres));
      })
      .catch(error => {
        throw error;
      });
  };
}
