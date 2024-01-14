import React from "react";
import './App.css';
import {useFormik} from "formik";

function App() {
  const formik = useFormik({
    initialValues: {
      name:"",
      email:"",
      password:""
      
    },
    onSubmit: values =>{
      alert("Login successful");
    },
    validate: values =>{
      let errors = {};
      if(!values.name) errors.name= "Field required";
      if(!values.email) errors.email= "Field required";
      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) errors.email= "Username should be an Email";
      if(!values.password) errors.password= "Field required";
      return errors;
    }
  });
  return (
    
    <div >
 <form onSubmit={formik.handleSubmit}>

    <div>Name</div>
    <input name="name" type="text" onChange={formik.handleChange}
    value={formik.values.name}/>
    {formik.errors.name ? <div style={{color:"red"}}>{formik.errors.name}</div>: null}
    <div>Email</div>
    <input id="emailField" name="email" type="email"onChange={formik.handleChange}
    value={formik.values.email}/>
    {formik.errors.email ? <div id="emailError" style={{color:"red"}}>{formik.errors.email}</div>: null}
    <div>Password</div>
    <input id="pswField" name="password" type="password" onChange={formik.handleChange}
    value={formik.values.password}/>  
    {formik.errors.password ? <div id="pswError" style={{color:"red"}}>{formik.errors.password}</div>: null}
    <button id="submitBtn" type="submit" >Submit</button>    
  </form>
      
    </div>
  );
}

export default App;
