import React,{useState} from 'react'
import { useForm } from 'react-hook-form';
// import { useContext } from 'react';
// import { taskContextObj } from '../../Context/TaskMan';
import { useNavigate } from 'react-router-dom';

function Register() {
    const {register,handleSubmit,formState:{errors},reset}=useForm();
    // const {handleForm}=useContext(taskContextObj);
    const navi=useNavigate();
    const [err,setErr]=useState(null);
    function handleForm(userObj){
    fetch('http://localhost:3000/users',{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(userObj)})
    .then(res=>{
        if(res.status==201){
            console.log(userObj);
           navi('/users')
        }
    })
    .catch(err=>setErr(err))
    }
  return (
    <div>
        <h2 className='text-center text-primary'>New_User</h2>
        {
          err!=null && <p className='m-2 text-center text-danger'>Error Occured :- Failed to fetch</p>
        }
        <form className="from mx-auto w-25" onSubmit={handleSubmit(handleForm)}>
            <div className='mt-4'>
            <label className='form-label'>Username</label>
            <input type="text" {...register("username",{required:true,minLength:4,maxLength:20})} id="username" className='form-control' />
            {
                errors.username?.type=='required' && <p className='text-danger mt-1'>*Username required</p>
            }
             {
                errors.username?.type=='minLength' && <p className='text-danger mt-1'>*MinLength is 4 characters</p>
            }
             {
                errors.username?.type=='maxLength' && <p className='text-danger mt-1'>*MaxLength is 20 characters</p>
            }
            </div>
            <div className='mt-4'>
            <label className='form-label'>password</label>
            <input type="password" {...register("password",{required:true})} id="password" className='form-control' />
            {
                errors.password?.type=='required' && <p className='text-danger mt-1'>*Password required</p>
            }
            </div>
            <div className='mt-4'>
            <label className='form-label'>Date_Of_Birth</label>
            <input type="date" {...register("dob",{required:true})} id="dob" className='form-control' />
            {
                errors.dob?.type=='required' && <p className='text-danger mt-1'>*Date_Of_Birth required</p>
            }
            </div>
            <div className='mt-4'>
            <label className='form-label'>Address</label>
            <input type="text" {...register("address",{required:true})} id="address" className='form-control' />
            {
                errors.address?.type=='required' && <p className='text-danger mt-1'>*Address required</p>
            }
            </div>
            <button className="mt-3 btn btn-primary">Submit</button>
        </form>
    </div>
  )
}

export default Register