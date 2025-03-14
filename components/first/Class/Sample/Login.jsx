import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import {counterContextObj} from './Context';
import { useEffect } from 'react';

function Login() {
    const {register,handleSubmit,formState:{errors},reset}=useForm();
    const navigate=useNavigate();
    const { handleUserLogin, user } = useContext(counterContextObj);
    const [error,setErr]=useState(null);
    useEffect(()=>{
        if(user===true){
          navigate('/profile');
        }
    },[user])
    
  return (
    <div>
        <h2 className="text-center text-success mt-3">Login</h2>
        <form className="form mx-auto w-25" onSubmit={handleSubmit(handleUserLogin)}>
            <div className='mt-3'>
                <label className='form-label' htmlFor="username">Username</label>
                <input type="text" {...register('username',{required:true})}  id="username" className="form-control"/>
            </div>
            <div className='mt-3'>
                <label className='form-label' htmlFor="username">password</label>
                <input type="password" {...register('password',{required:true})}  id="password" className="form-control"/>
            </div>
            {
                error!==null&&<p className="text-danger">{error.message}</p>
            }
            <button className="btn btn-primary mt-4">LogIn</button>
        </form>
    </div>
  )
}

export default Login


// function handleForm({username,password}){
//     fetch(`http://localhost:3000/users?username=${username}&password=${password}`,{method:"GET"})
//     .then(post=>post.json())
//     .then(res=>{
//         if(res.length!=0){
//             navigate(`/profile/${res[0].username}`,{state:res[0]})
//         }
//         else{
//             setErr({message:"Invalid Username or password"})
//           }
//     })
//     .catch(err=>setErr(err));
// }