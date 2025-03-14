import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Regis() {
    const navi=useNavigate();
    const [err,setErr]=useState()
    const {register,handleSubmit,formState:{errors},reset}=useForm();
    function handleFormSubmit(Obj){
      fetch('http://localhost:3000/users',{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(Obj)
    })
    .then(res=>{
        if(res.status===201){
            navi('/login')
        }
    })
    .catch(err=>setErr(err));

    }
  return (
    <div>
        <h2 className="text-center text-primary mt-3">Registration Form</h2>
        <form className="form mx-auto w-25" onSubmit={handleSubmit(handleFormSubmit)}>
            <div className='mt-3'>
                <label className='form-label' htmlFor="username">Username</label>
                <input type="text" {...register('username',{required:true})}  id="username" className="form-control"/>
            </div>
            <div className='mt-3'>
                <label className='form-label' htmlFor="username">password</label>
                <input type="password" {...register('password',{required:true})}  id="password" className="form-control"/>
            </div>
            <button className="btn btn-primary mt-4">Register</button>
        </form>
    </div>
  )
}

export default Regis