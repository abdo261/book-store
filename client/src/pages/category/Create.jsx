import React from "react";
import Input from "../../components/share/Input";
import Btn from "../../components/share/Btn";

const Create = () => {
  return (
    <div className="category-create w-100 h-100 ">
      <div className="d-flex justify-content-start align-items-center">
        <div>
          <h1>Category Create </h1>
        </div>
      </div>
      <div className="create-container w-100 h-100  d-flex justify-content-center align-items-center">
        <div className="create-window border rounded-2 bg-light d-flex flex-column justify-content-center align-items-start gap-3">
          <Input
            label="Name"
            classLabel="fw-bold text-black"
            classParent=" form-input d-flex flex-column gap-2 w-75 ms-5"
            className="form-control"
            placeholder=" Name Category"
          />
          <Input
            label="Color"
            classLabel="fw-bold text-black"
            classParent=" form-input d-flex flex-column gap-2 ms-5 "
            type="color"
            
          />
        <Btn type="submit" className="btn btn-success mx-auto w-75" text="create"/>
        </div>
      </div>
    </div>
  );
};

export default Create;
