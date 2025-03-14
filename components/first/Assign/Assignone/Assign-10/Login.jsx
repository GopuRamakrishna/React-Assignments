import React,{useState}from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
function Login() {
    const navigator=useNavigate();
    let [error,setErr]=useState(null);
    const {register,handleSubmit,formState:{errors}}=useForm();
function handleLogSubmit({username,password}){
     fetch(`http://localhost:3000/users?username=${username}&password=${password}`,{method:"GET"})
     .then(res=>res.json())
     .then(userList=>{
        if(userList.length!=0){
        navigator(`/profile/${userList[0].username}`,{state:userList[0]});
        }
        else{
            setErr({message:"Invalid username or password"})
        }
     })
     .catch(err=>setErr(err))
}
  return (
    <div>
        <h1 className="display-6 text-primary m-2 text-center">Login Form</h1>
        {
            error!=null&&<p className="text-danger text-center">{error.message}</p>
        }
        <form className="form mx-auto w-25" onSubmit={handleSubmit(handleLogSubmit)}>
            <div className="mt-3">
                <label htmlFor="username" className="form-label">username</label>
                <input type="text" {...register("username",{required:true})} id="username" className="form-control" />
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

export default Login