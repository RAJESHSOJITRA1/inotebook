import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = (props) => {
        // useNavigate() use for navigate from one page to another signup success  to the home
    const navigate = useNavigate();
    const [credential,setCredential]=useState({name:"",email:"",password:"",cpassword:""});
    const handleSubmit=async(e)=>{                                      
        e.preventDefault();
     const {name,email,password}=credential;
        const response = await fetch("http://localhost:3000/api/auth/createuser", {
            method:"POST",
            headers: {  
              "Content-Type": "application/json",
            //    "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZjYjI2M2JiZjA3ZjM3ZWEzZDQyYTgyIn0sImlhdCI6MTcyNDU4OTYyN30.PkEBlxmIcrhuOz6sJ9OQGqPUS8TokfyfXPF9pfCHcHI"
            },
     body:JSON.stringify({name,email,password})//JSON.stringyfy converts js value to jsonstring
          });
          const json = await response.json();//response.json returnes a promise resolve                           resolve the promise or error
          console.log(json);    
          if(json.success){
                // redirect
                localStorage.setItem("token",json.authtoken)
                navigate("/");
                props.showAlert("Account created Sucessfully","success")
          }
          else{
            props.showAlert("invalid credential","danger")
          }
    }
    const handleChange=(e)=>{                      
        setCredential({...credential,[e.target.name]: e.target.value})      
    }
    return (                                                    
        <div className="container">                     
            <h1>Sign up Page</h1>
            <form onSubmit={handleSubmit}>                  
                <div className="form-group ">                                   
                    <label htmlFor="name">Enter Your Name</label>                           
                    <input type="name" className="form-control" placeholder='Please Enter Your Name' id="name" name='name'  onChange={handleChange} minLength={5} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1"  aria-describedby="emailHelp" name='email' onChange={handleChange} placeholder='Please Enter Your Email' minLength={5} required />
                    <small id="emailHelp" className="form-text text-muted">Well never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Enter A Password' name="password" onChange={handleChange}
                   minLength={5} required/>
                </div>
                <div className="form-group"> 
                    <label htmlFor="exampleInputPassword1">Confirm Password</label>
                    <input type="cpassword"  className="form-control" placeholder='Please ReEnter a  Password'  id="exampleInputPassword1" name="cpassword" onChange={handleChange} minLength={5} required />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Signup   