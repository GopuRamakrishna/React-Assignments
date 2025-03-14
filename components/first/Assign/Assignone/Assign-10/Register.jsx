import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
function Register() {
   const [err,setErr]=useState({});
    const navigate=useNavigate();
    const {register,handleSubmit,formState:{errors}}=useForm();
    function handleFormSubmit(UserObj){
     fetch('http://localhost:3000/users',{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(UserObj)})
     .then(res=>{
        if(res.status===201){
            navigate('/login')
        }
     })
     .catch(setErr({message:"failed to fetch"}))
    }
  return (
    <div>
        <h1 className="display-6 text-warning m-2 text-center">Register Form</h1>
        {
            err!=null&&<p className="text-danger text-center">{err.message}</p>
        }
        <form className="form mx-auto w-25" onSubmit={handleSubmit(handleFormSubmit)}>
            <div className="mt-3">
                <label htmlFor="username" className="form-label">username</label>
                <input type="text" {...register("username",{required:true})} id="username" className="form-control" />
            </div>
            <div className="mt-3">
                <label htmlFor="email" className="form-label">email</label>
                <input type="email" {...register("email",{required:true})} id="email" className="form-control" />
            </div>
            <div className="mt-3">
                <label htmlFor="password" className="form-label">password</label>
                <input type="password" {...register("password",{required:true})} id="password" className="form-control" />
            </div>
            <button className="btn btn-primary mt-3">Submit</button>
        </form>
    </div>
  )
}

export default Register