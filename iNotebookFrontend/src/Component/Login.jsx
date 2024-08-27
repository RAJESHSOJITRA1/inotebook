/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
    const navigate = useNavigate();
    const [credential,setCredential]=useState({email:"",password:""});
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const response = await fetch("http://localhost:3000/api/auth/login", {
            method:"POST",
            headers: {  
              "Content-Type": "application/json",

            //    "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZjYjI2M2JiZjA3ZjM3ZWEzZDQyYTgyIn0sImlhdCI6MTcyNDU4OTYyN30.PkEBlxmIcrhuOz6sJ9OQGqPUS8TokfyfXPF9pfCHcHI"
            },
            body:JSON.stringify({email:credential.email,password:credential.password})
          });
          const json = await response.json();
          console.log(json);
          if(json.success){
                // redirect
                localStorage.setItem("token",json.authtoken)
                props.showAlert("Account Login Sucessfully","success")
                navigate("/");
          }
          else{
            props.showAlert("invalid credential","danger")
          }
    }

     const handleChange=(e)=>{                      
        setCredential({...credential,[e.target.name]: e.target.value})      
    }
    
  return (
    <div className='container'>
        <h1>Login the page</h1>
    <form  onSubmit={handleSubmit}>
    <div className="form-group">
      <label htmlFor="exampleInputEmail1">Email address</label>
      <input type="email" className="form-control" id="email" value={credential.email} name="email" aria-describedby="emailHelp"
      onChange={handleChange}/>
      <small id="emailHelp" className="form-text text-muted">Well never share your email with anyone else.</small>
    </div>
    <div className="form-group">
      <label htmlFor="exampleInputPassword1">Password</label>
      <input type="password" name='password' value={credential.password} className="form-control" id="password"
      onChange={handleChange}/>
    </div>
   
    <button type="submit" className="btn btn-primary">Submit</button>
  </form>
    </div>
  )
}

export default Login
