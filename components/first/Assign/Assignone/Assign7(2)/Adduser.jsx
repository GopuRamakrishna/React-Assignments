import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form'

function Adduser() {
    const [user,setUser]=useState([]);
 const {register,handleSubmit,formState:{errors}}=useForm();
 
 function handleFormSubmit(obj){
       setUser([...user,obj]);
 }
  return (
    <div className='container mt-4'>
        <h1 className="display-6 text-primary text-center">Registration Form</h1>
       <form  className="mx-auto w-50" onSubmit={handleSubmit(handleFormSubmit)}>
        {/* username */}
        <div className='mt-3'>
            <label htmlFor="username">Username</label>
            <input type="text" {...register('username',{required:true,minLength:4,maxLength:8})} id="username" className="form-control" />
            {
                errors.username?.type==="minLength"&&<p className='text-danger'>*min length is four</p>
            }
            {
                errors.username?.type==="maxLength"&&<p className='text-danger'>*max length is eight</p>
            }
            {
                errors.username?.type==="required"&&<p className='text-danger'>*Username is required</p>
            }
        </div>
        <div className='mt-3'>
            <label htmlFor="dob">DateOfBirth</label>
            <input type="date" {...register('dob',{required:true})} id="date" className="form-control" />
            {
                errors.dob?.type==="required"&&<p className='text-danger'>*dob is required</p>
            }
        </div>
        <div className='mt-3'>
            <label htmlFor="city">City</label>
            <input type="text" {...register('city',{required:true})} id="city" className="form-control" />
            {
                errors.city?.type==="required"&&<p className='text-danger'>*city is required</p>
            }
        </div>
        <button className="btn btn-outline-primary mt-3 mx-auto">Submit</button>
       </form>

       <div className="mt-5">
        <table className="table table-bordered text-center">
            <thead>
            <tr>
                <th>UserName</th>
                <th>DateOfBirth</th>
                <th>City</th>
            </tr>
            </thead>
            <tbody>
            {
           user!=null && user.map((ele,idx)=>
              <tr key={idx}>
               <td>{ele.username}</td>
               <td>{ele.dob}</td>
               <td>{ele.city}</td>
                 </tr>
                )
               }
            </tbody>

        </table>
       </div>
    </div>

  )
}

export default Adduser