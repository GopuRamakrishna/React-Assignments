import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

function Login() {
    const nav=useNavigate();
    const [erer,setEer]=useState(null);
   const {register,handleSubmit,formState:{errors}}=useForm();
   function handleFormSubmit({username,password}){
        fetch(`http://localhost:3000/users?username=${username}&password=${password}`,{method:"GET"})
        .then(res=>res.json())
        .then(post=>{
            if(post.length!==0){
                nav(`/profile/${post[0].username}`,{state:post[0]})

            }
            else{
                 setEer({message:"Invalid username or Password"})
            }
        })
        .catch(err=>setEer(err))
   }
  return (
    <div>
       <h3 className="text-center text-primary mt-3">LogIn</h3>
       <form  className="form mx-auto w-25 mt-3" onSubmit={handleSubmit(handleFormSubmit)}>
        <div>
            <label htmlFor="username" className="form-label">username</label>
            <input type="text" {...register("username",{required:true})} id="username" className="form-control" />
        </div>
        <div>
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" {...register("password",{required:true})} id="password" className="form-control" />
        </div>
        {
            erer!=null&&<p className="text-danger">{erer.message}</p>
        }
        <button className="btn btn-info mt-3">Login</button>
       </form>

    </div>
  )
}

export default Login