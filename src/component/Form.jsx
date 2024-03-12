import React from 'react';
import './Form.css';
import { useFormik } from 'formik';
import { userSchema } from '../Schema/Index';

const Form = () => {
    const initialValues = {
        name: "",
        email: "",
        password: "",
        confirm_password: ""
    }

    const {values, handleChange, handleSubmit, touched, errors} = useFormik({
        initialValues: initialValues,
        validationSchema: userSchema,
        onSubmit: (values) => {
          console.log(values)
        }
    })
  return (
    <div className='form-container'>
        <form action="" onSubmit={handleSubmit}>
        <p className='heading'>FORM</p>
        <div className="input-box">
          <input type="text" 
          placeholder='Enter Name'
          name='name'
          value={values.name}
          onChange={handleChange}/>

          {
            errors.name && touched.name ? (<p className='error name-error'>{errors.name}</p>) : null
          }

          <input type="email" 
          placeholder='Enter Email' 
          name='email'
          value={values.email}
          onChange={handleChange}/>

          {
            errors.email && touched.email ? (<p className='error email-error'>{errors.email}</p>) : null
          }

          <input type="password" 
          placeholder='Enter Password' 
          name='password'
          value={values.password}
          onChange={handleChange}/>

          {
            errors.password && touched.password ? (<p className='error password-error'>{errors.password}</p>) : null
          }

          <input type="password" 
          placeholder='Confirm Password'
          name='confirm_password'
          value={values.confirm_password}
          onChange={handleChange}/>

          {
            errors.confirm_password && touched.confirm_password ? (<p className='error cnf-password-error'>{errors.confirm_password}</p>) : null
          }

          <button type='submit'>Register</button>
        </div>
        </form>
    </div>
  )
}

export default Form