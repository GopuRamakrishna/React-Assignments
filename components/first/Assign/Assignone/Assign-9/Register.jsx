import React from 'react'
import { useForm } from 'react-hook-form'
import { useState } from 'react';
import { useNavigate} from 'react-router-dom';

function Register() {
    let navi=useNavigate();
const {register,handleSubmit,formState:{errors},reset}=useForm();
let [errer,setErr]=useState(null);
function handleFormSubmit(Obj){
    //  console.log(Obj);
    fetch('http://localhost:3000/users',{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(Obj)
    })
    .then(res=>{
        if(res.status===201){
           navi('/login');
        }
    })
    .catch(err=>setErr(err));
    // console.log(errer)
}
  return (
    <div>
        {
            errer!==null&&<p className="text-warning text-center m-3">Failed to fetch</p>
        }
        <h2 className="text-center  text-info mt-4">Registration Form</h2>
        <form className="form mx-auto w-25 mt-4" onSubmit={handleSubmit(handleFormSubmit)}>
            <div className="mt-3">
                <label htmlFor="username" className="form-label">username</label>
                <input type="text" {...register('username',{required:true})} id="username" className="form-control" />
            </div>
            <div className="mt-3">
                <label htmlFor="email" className="form-label">email</label>
                <input type="email" {...register('email',{required:true})} id="email" className="form-control" />
            </div>
            <div className="mt-3">
                <label htmlFor="pass" className="form-label">Password</label>
                <input type="password" {...register('password',{required:true})}  id="password" className="form-control" />
            </div>
            <button className="btn btn-outline-primary mt-3">Submit</button>
        </form>
    </div>
  )
}

export default Register