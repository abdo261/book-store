import { toast } from "react-toastify";
import request from "../../utils/request";
import { categoryActions } from "../slices/categorySlice";

export const get = (resource) => {
  return async (dispatch) => {
    dispatch(categoryActions.setLoading(true));
    dispatch(categoryActions.setCategorys([]));
    await request
      .get(resource)
      .then((res) => {
       console.log(res)
        dispatch(categoryActions.setError(null));
        dispatch(categoryActions.setCategorys(res.data.sort((a, b) => {
          return new Date(b.updatedAt) - new Date(a.updatedAt);
        })));
      })
      .catch((err) => {
        console.log(err);
        dispatch(categoryActions.setLoading(false));
        dispatch(categoryActions.setError(err.message));
      })
      .finally(() => dispatch(categoryActions.setLoading(null)));
  };
};
export const getBiId = (resource) => {
  return async (dispatch) => {
    dispatch(categoryActions.setLoading(true));
    dispatch(categoryActions.setCategory(null));
    await request
      .get(resource)
      .then((res) => {
        console.log(res.data)
        dispatch(categoryActions.setError(null));
        dispatch(categoryActions.setCategory(res.data));
      })
      .catch((err) => {
        console.log(err);
        dispatch(categoryActions.setCategory(null));
        dispatch(categoryActions.setLoading(false));
        dispatch(categoryActions.setError(err.message));
      })
      .finally(() => dispatch(categoryActions.setLoading(null)));
  };
};

export const create = (resource, data, cb) => {
  return async (dispatch) => {
   await request
      .post(resource, data)
      .then((res) => {
        
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

export const remove = (resource, id) => {
  return async (dispatch) => {
   await request
      .delete(resource + "/" + id)
      .then((res) => {
      
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
export const update = (resource, data,cb,message=false) => {
  return async (dispatch) => {
   await request
      .put(resource, data)
      .then((res) => {
        dispatch(categoryActions.setError(null));
      if(message)  {toast.success(res.data.message)};
        dispatch(categoryActions.updateCategory(res.data.category));
        cb && cb()
      })
      .catch((err) => {
        console.log(err);
        dispatch(categoryActions.setLoading(false));
        // dispatch(categoryActions.setError(err.response.data.message));
      if(message){ toast.error(err.response.data.message);} 
      })
      .finally(() => dispatch(categoryActions.setLoading(null)));
  };
};
