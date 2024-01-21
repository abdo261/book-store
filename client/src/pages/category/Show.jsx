import React, { useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import { BsEye, BsPencil, BsTrash3 } from "react-icons/bs";
import { get } from "../../redux/api/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import TableCategory from "./shildren/TableCategory";

const Show = () => {
  const {categorys} = useSelector(state=>state.category)
  const dispatch = useDispatch();
  const getAll = useCallback(() => {
    dispatch(get("/api/categorys"));
  }, []);
  useEffect(() => {
    getAll();
  }, []);
 
  return (
    <div className="category-list w-100 h-100 ">
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <h1>Category List </h1>
        </div>
        <div>
          <Link className="btn-create " to='/category/create'>Create Category</Link>
        </div>
      </div>
      <div className="table-container ">
        {categorys && <TableCategory categorys = {categorys}/>}
      </div>
    </div>
  );
};

export default Show;
