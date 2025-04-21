import React from 'react'
import Button from "../Ui/Button.jsx";
import { ErrorMessage, Field, Form, Formik } from "formik";
import coverLogin from "../images/cover-login2.jpg";
import * as  Yup from "yup"
import axios from 'axios';


 

const Register = () => {
//const [data , setData] =useState("p")

  const onSubmit = async (values)=>{
   console.log(values);

    const responsive= await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signup" , values)
    // setData(responsive)
console.log(responsive);

    }

  return (
    <Formik
      initialValues={{ name: "" , email:"", password: "" , rePassword:"" , phone:""}}
      validationSchema={Yup.object({
        name: Yup.string()
          .max(15, 'Must be 15 characters or less' )
          .required('Required'),
      })}
      onSubmit={onSubmit}
    >
        <Form>
        <div className="d-flex justify-content-between">

          <div className="position-relative w-50 h-100">
            <div className="cover position-absolute">
            </div>
              <img src={coverLogin} alt="clothes" className="w-100" height={551}/>
            </div>

          <div className="d-flex flex-wrap align-items-center w-50">
            <div className="p-5">

            <h2>Register</h2>
            <Field className="rounded w-100 p-1 m-2 field" name="name" type="text" placeholder="name"/>
            <h3 className='first'><ErrorMessage name='name'/></h3> 
            <Field className="rounded w-100 p-1 m-2 field" name="email" type="email" placeholder="email"/>
            <Field className="rounded w-100 p-1 m-2 field" name="password" type="text" placeholder="password"/>
            <Field className="rounded w-100 p-1 m-2 field" name="rePassword" type="text" placeholder="rePassword"/>
            <Field className="rounded w-100 p-1 m-2 field" name="phone" type="number" placeholder="phone"/>
            <Button type="submit">login</Button>
            </div>
           
          </div>
          </div>

        </Form>
    </Formik>
  );
}

export default Register
