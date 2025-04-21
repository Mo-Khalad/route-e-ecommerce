import Button from "../Ui/Button.jsx";
import { Field, Form, Formik } from "formik";
import React, { use, useContext, useState } from "react";
import coverLogin from "../images/cover-login2.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { TokenContext } from "../Store/TokenContext.js";

const Login = () => {
  //const [data, setData] = useState("");
  //const [token , setToken] = useState("")
  let {setUserToken} =  useContext(TokenContext)
  let navigate = useNavigate();
  const onSubmit = async (values) => {
    console.log(values);

    let responsive = await axios.post(
      "https://ecommerce.routemisr.com/api/v1/auth/signin",
      {
        email: "ahmedmuttii4011@gmail.com",
        password: "Ahmed@123",
      }
    );
   // setData(responsive.data);
   if( responsive.data.message === "success" ){
   alert("hello")
    localStorage.setItem( `userToken` , responsive.data.token)
    setUserToken(responsive.data.token)
    navigate("/")
    } ;
  };


  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={onSubmit}
    >
      <Form>
        <div className="d-flex justify-content-between">
          <div className="cover-image position-relative w-50 ">
            <div className="cover position-absolute"></div>
            <img src={coverLogin} alt="clothes" className="w-100 h-100" />
          </div>

          <div className="d-flex flex-wrap align-items-center w-50">
            <div className="p-5">
              <h2>login</h2>
              <Field
                className="rounded w-100 p-1 m-2 field"
                name="email"
                type="email"
                placeholder="email"
              />
               <Field
                className="rounded w-100 p-1 m-2 field"
                name="password"
                type="text"
                placeholder="password"
              />
              <Button type="submit">login</Button>
            </div>
          </div>
        </div>
      </Form>
    </Formik>
  );
};

export default Login;
