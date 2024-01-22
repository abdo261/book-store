import React, { useCallback, useEffect, useState } from "react";
import Input from "../../components/share/Input";
import Btn from "../../components/share/Btn";
import { useDispatch, useSelector } from "react-redux";
import { get } from "../../redux/api/apiCalls";
import { useParams } from "react-router-dom";
import SpinerBs from "../../components/share/SpinerBs";

const Edite = () => {
  const [formData, setFormData] = useState({
    name: "",
    color: "",
  });
  const { id } = useParams();
  const dispatch = useDispatch();
  const handelChange = (field, value) =>
    setFormData({ ...formData, [field]: value });
  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  const { categorys:category, loading, errr } = useSelector((state) => state.category);
  const getById = useCallback(() => {
    dispatch(get(`/api/categorys/${id}`));
  }, [id]);
  useEffect(() => {
    getById();
  }, [getById]);
  return (
    <div className="category-create container w-100 h-100 ">
      <div className="d-flex justify-content-start align-items-center">
        <div>
          <h1>Category Create </h1>
        </div>
      </div>
      <form
        onSubmit={handelSubmit}
        className="create-container w-100 h-100  d-flex justify-content-center align-items-center"
      >
        {loading ? (
          <SpinerBs />
        ) : (
          category && (
            <div className="create-window border rounded-2 bg-light d-flex flex-column justify-content-center align-items-start gap-3">
              <Input
                type="text"
                label="Name"
                classLabel="fw-bold text-black"
                classParent=" form-input d-flex flex-column gap-2 w-75 ms-5"
                className="form-control"
                placeholder=" Name Category"
                field="name"
                defaultValue={category.name}
                onchange={handelChange}
              />

              <Input
                label="Color"
                classLabel="fw-bold text-black"
                classParent=" form-input d-flex flex-column gap-2 ms-5 "
                type="color"
                field="color"
                defaultValue={category.color || "#000000"}
                onchange={handelChange}
              />
              <Btn
                type="submit"
                className="btn btn-success mx-auto w-75"
                text="create"
                oncklick={handelSubmit}
              />
            </div>
          )
        )}
      </form>
    </div>
  );
};

export default Edite;
