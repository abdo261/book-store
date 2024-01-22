import React from "react";
import { BsEye, BsPencil, BsTrash3 } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { remove } from "../../../redux/api/apiCalls";
import Btn from "../../../components/share/Btn";

const TableCategory = ({ categorys }) => {
  const dispatch = useDispatch();
  const handelDelet = (id) => dispatch(remove("/api/categorys",id)) ;

  return (
    <table className="table">
      <thead>
        <tr className="table-primary">
          <th>Name</th>
          <th>Color</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {categorys.length > 0 ? (
          categorys.map((c) => (
            <tr key={c._id}>
              <td>{c.name}</td>
              <td>
                <div
                  className="square-color ms-2"
                  style={{ backgroundColor: c.color }}
                ></div>
              </td>
              <td>
                <div className="w-100 d-flex justify-content-center align-items-center gap-2 pe-2">
                  <Link
                    className="btn btn-outline-primary btn-sm rounded-circle "
                    to={`/category/details/${c._id}`}
                  >
                    <BsEye />
                  </Link>
                  <Link
                    className="btn btn-outline-warning btn-sm rounded-circle "
                    to={`/category/edite/${c._id}`}
                  >
                    <BsPencil />
                  </Link>
                  <Btn
                    text={<BsTrash3 />}
                    oncklick={(e) => handelDelet(c._id)}
                    className="btn btn-outline-danger btn-sm rounded-circle "
                  />
                </div>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={3}> no category her</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default TableCategory;
