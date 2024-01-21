import request from "../../utils/request";
import { categoryActions } from "../slices/categorySlice";

export const get = (resource) => {
  return async (dispatch) => {
    dispatch(categoryActions.setLoading(true));
   await request
      .get(resource)
      .then((res) => {
        dispatch(categoryActions.setError(null));
        dispatch(categoryActions.setCategory(res.data));
       
      })
      .catch((err) => {
        console.log(err);
        dispatch(categoryActions.setLoading(false));
        dispatch(categoryActions.setError(err.response.data.message));
      })
      .finally(() => dispatch(categoryActions.setLoading(null)));
  };
};
