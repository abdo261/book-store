import React, { useState } from "react";
import Input from "../../components/share/Input";
import { MdOutlineMailOutline, MdLockOpen } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import Btn from "../../components/share/Btn";
import {Link, useNavigate} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import { loginUser } from "../../redux/api/authApiCalls";
import ErrorAlert from "../../components/share/ErrorAlert";
import SpinerBs from "../../components/share/SpinerBs";
import { ToastContainer } from "react-toastify";
const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {error,loading} = useSelector(state=>state.auth)
  const handelChange = (field, value) =>
    setFormData((prev) => ({ ...prev, [field]: value }));
  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    dispatch(loginUser(formData,()=>navigate('/')))
  };
  return (
    <div className="login d-flex justify-content-center align-items-start">
      <form
        onSubmit={handelSubmit}
        className="form-login d-flex align-items-center flex-column gap-3 bg-light text-dark p-3 rounded-2"
      >
        <h1 className="fw-bolder">
          {" "}
          <FaUsers />
          Login
        </h1>
        {error && <ErrorAlert error={error}/>}
        <Input
          field="email"
          classParent="bg-secondary d-flex justify-content-start align-items-center rounded p-1 fs-6 w-100"
          className="input-login text-light ps-2 w-100"
          placeholder="email"
          defaultValue={formData.email}
          label={<MdOutlineMailOutline size={35} />}
          onchange={handelChange}
          type="email"
        />
        <Input
          field="password"
          classParent="bg-secondary d-flex justify-content-start align-items-center rounded p-1 fs-6 w-100"
          className="input-login text-light ps-2 w-100"
          placeholder="password"
          defaultValue={formData.password}
          label={<MdLockOpen size={35} />}
          onchange={handelChange}
          type="password"
        />
        <Btn text={loading ? <SpinerBs/> :"login"} className="btn-login fw-bolder w-100" type="submit" />
        <Link to="/register" className="btn-register">create acount</Link>
      </form>
      <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          draggablePercent={60}
        />
    </div>
  );
};

export default Login;
