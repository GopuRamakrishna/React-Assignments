import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

function Register() {
  const {register,handleSubmit,formState:{errors}}=useForm();
  let [errer,setErr]=useState(null);
  const navi=useNavigate();
  function handlesub(obj){
     
     //Make HTTP post request to save new user in Api
     fetch('http://localhost:3000/users',{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(obj)})
     .then(res=>{
      if(res.status===201){
       //navigate to login component programatocally
       navi('/login')
      }
    }
     )
     .catch(err=>setErr(err))
  }
return (
  <div className='container cont'>
      <h1 className="display-6 text-center mb-4 text-danger">Registration Form</h1>
      <form className=" from mx-auto w-50" onSubmit={handleSubmit(handlesub)}>
        
{/*            name f an dlast */}



          <div>
              <label htmlFor="FirstName" className='form-label'>Name</label>
              <input type="text" {...register('Name')} id="Name" className='form-control ' />
             
          </div>
          <div>
              <label htmlFor="email" className='form-label'>email</label>
              <input type="email" {...register('email',{required:true})} id="email" className='form-control ' />
             
          </div>
          <div>
              <label htmlFor="f_Name" className='form-label'>f_name</label>
              <input type="text" {...register('f_name',{required:true})} id="f_name" className='form-control ' />
             
          </div>
   <button className="btn btn-outline-primary mt-3">Submit</button>
        </form>
        </div>
);

  {/* // return (
  //   <div>
      
  //   </div>
  // ) */}
}

export default Register