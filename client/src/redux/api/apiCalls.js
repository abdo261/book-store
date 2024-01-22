import { toast } from "react-toastify";
import request from "../../utils/request";
import { categoryActions } from "../slices/categorySlice";

export const get = (resource) => {
  return async (dispatch) => {
    dispatch(categoryActions.setLoading(true));
    dispatch(categoryActions.setCategorys(null));
    await request
      .get(resource)
      .then((res) => {
        console.log(res.data)
        dispatch(categoryActions.setError(null));
        dispatch(categoryActions.setCategorys(res.data));
      })
      .catch((err) => {
        console.log(err);
        dispatch(categoryActions.setLoading(false));
        dispatch(categoryActions.setError(err.message));
      })
      .finally(() => dispatch(categoryActions.setLoading(null)));
  };
};

export const create = (resource, data, cb) => {
  return async (dispatch) => {
    
    request
      .post(resource, data)
      .then((res) => {
        console.log(res);
        dispatch(categoryActions.setError(null));
        dispatch(categoryActions.addCategory(res.data.category));
        toast.success(res.data.message);
        cb && cb();
      })
      .catch((err) => {
        console.log(err);
        dispatch(categoryActions.setLoading(false));
        dispatch(categoryActions.setError(err.response.data.message));
        toast.error(err.response.data.message);
      })
      .finally(() => dispatch(categoryActions.setLoading(null)));
  };
};

export const remove = (resource,id) => {
  return async (dispatch) => {
    request
      .delete(resource +'/'+ id)
      .then((res) => {
        console.log(res)
        dispatch(categoryActions.setError(null));
        dispatch(categoryActions.removeCategory(id));
        toast.success(res.data.message);
      })
      .catch((err) => {
        console.log(err);
        dispatch(categoryActions.setLoading(false));
        dispatch(categoryActions.setError(err.response.data.message));
        toast.error(err.response.data.message);
      })
      .finally(() => dispatch(categoryActions.setLoading(null)));
  };
};
