import React from "react";
import { FaPenFancy } from "react-icons/fa";
const ContainerDetails = ({ book }) => {
  return (
    <div className="row bg-light p-4 text-dark ">
      <div className="col-md-2">
        <img
          src={`http://localhost:5000/api/images/name/${book.image}`}
          className="image-details"
          alt=""
        />
      </div>
      <div className="col-md-10 ">
        <div className="h-100 w-100 d-flex flex-column ">
          <h2 className="fw-bolder text-decoration-underline">{book.title}</h2>
          <div className="d-flex">
            
           <strong> Author : </strong>
            <p>  { book.author }  </p>
          </div>
          <div className="d-flex">
            
            <strong>Summary : </strong>
            <p> { book.summary } </p>
          </div>
          <div className="d-flex justify-content-between align-items-center"></div>
        </div>
      </div>
    </div>
  );
};

export default ContainerDetails;
