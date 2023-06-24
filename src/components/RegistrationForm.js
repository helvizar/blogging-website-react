// Register form
// Using Formik and Yup validator for input user data

import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

// Validation schema using Yup
const validationSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .matches(
      /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
      'Password must contain at least one uppercase letter, one number, and one symbol'
    )
    .required('Password is required'),
  confirmPassword: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .matches(
      /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
      'Password must contain at least one uppercase letter, one number, and one symbol'
    )
    .required('Confirm Password is required'),
  phoneNumber: Yup.string().required('Phone number is required'),
})

const RegisterForm = () => {
  // Handle form submission
  const navigate = useNavigate()
  const onRegister = async (values) => {
    try {
      const username = values.username
      const email = values.email
      const password = values.password
      const phone = values.phoneNumber
      const confirmPassword = values.confirmPassword
      // const FE_URL = process.env.FE_URL;
      const FE_URL = 'http://localhost:3000'
      console.log(username, email, password, phone, confirmPassword)
      await axios.post('https://minpro-blog.purwadhikabootcamp.com/api/auth/', {
        username,
        email,
        password,
        phone,
        confirmPassword,
        FE_URL,
      })
      setTimeout(() => {
        navigate('/login')
      }, 2000)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div>
      <h2>Register</h2>
      <Formik
        initialValues={{
          username: '',
          email: '',
          password: '',
          phone: '',
          confirmPassword: '',
        }}
        validationSchema={validationSchema}
        onSubmit={onRegister}
      >
        <Form className="text-green">
          <div>
            <label htmlFor="username">Username</label>
            <Field type="text" name="username" />
            <ErrorMessage name="username" component="div" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
          </div>
          <div>
            <label htmlFor="phoneNumber">Phone Number</label>
            <Field type="text" name="phoneNumber" />
            <ErrorMessage name="phoneNumber" component="div" />
          </div>
          <div>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <Field type="password" name="confirmPassword" />
            <ErrorMessage name="confirmPassword" component="div" />
          </div>
          <div>
            <button type="submit">Register</button>
          </div>
        </Form>
      </Formik>
    </div>
  )
}

export default RegisterForm
