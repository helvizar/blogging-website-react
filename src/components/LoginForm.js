// Login form
// Using Formik and Yup validator for input user data

import React, { useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setValue } from "../redux/user";

// Validation schema using Yup
const validationSchema = Yup.object().shape({
  email: Yup.string().required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);
    if (token) {
      // If the user is already logged in, redirect the navigation to the home page
      navigate("/");
    }
  }, []);

  // Handle form submission
  const onSubmit = async (values, { setSubmitting }) => {
    try {
      // Perform login logic, e.g., send data to the server

      const email = values.email;
      const password = values.password;
      const res = await axios.post(
        "https://minpro-blog.purwadhikabootcamp.com/api/auth/login",
        {
          email,
          password,
        }
      );

      console.log("res:", res.data);

      // save token to local storage
      localStorage.setItem("token", res.data.token);

      // save account data to redux
      dispatch(setValue(res.data.isAccountExist));

      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (err) {
      console.log(err);
    } finally {
      // Reset form fields and set submitting state
      setSubmitting(false);
    }
  };

  const handleForgotPassword = () => {
    navigate("/reset-password");
  };

  return (
    <div>
      <h2>Login</h2>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <div>
            <label htmlFor="email">Email</label>
            <Field type="text" name="email" />
            <ErrorMessage name="email" component="div" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
          </div>
          <div>
            <button type="submit">Login</button>
          </div>
          <a href="http://localhost:3000/reset-password">Forgot Password</a>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
