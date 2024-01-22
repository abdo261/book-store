import React, { useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import { get } from "../../redux/api/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import TableCategory from "./shildren/TableCategory";
import SpinerBs from "../../components/share/SpinerBs";
import ErrorAlert from "../../components/share/ErrorAlert";

const Show = () => {
  const {categorys,loading,error} = useSelector(state=>state.category)
  const dispatch = useDispatch();
  const getAll = useCallback(() => {
    dispatch(get("/api/categorys"));
  }, []);
  useEffect(() => {
    getAll();
  }, [getAll]);
 
  return (
    <div className="category-list w-100 h-100 p-3">
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <h1>Category List </h1>
        </div>
        <div>
          <Link className="btn-create " to='/category/create'>Create Category</Link>
        </div>
      </div>
      <div className="table-container ">
        {loading ? <SpinerBs /> :categorys && <TableCategory categorys = {categorys}/> }
        {error && <ErrorAlert error={error} />}
      </div>
    </div>
  );
};

export default Show;
