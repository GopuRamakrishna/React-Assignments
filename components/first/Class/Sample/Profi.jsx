import React, { useState } from 'react'
import { useContext } from 'react'
import { FaEdit } from "react-icons/fa";
import { FaSave } from "react-icons/fa";
import { counterContextObj } from './Context'
import { useForm } from 'react-hook-form';

function Profi() {
   const {currUser,setCurrUser}=useContext(counterContextObj)
   const [userEdit,setUserEdit]=useState(false);
   const {register,handleSubmit,setValue}=useForm();
   function handleEdit(){
      setUserEdit(true);
      //updatimg the spaces
      setValue('username',currUser.username);
      setValue('password',currUser.password);
   }
   function modified(modify){
    fetch(`http://localhost:3000/users/${currUser.id}`,
      {
        headers:{"Content-Type":"application/json"},
        method:"PATCH",
        body:JSON.stringify(modify)
      }
    ).then(res=>res.json())
    .then(result=>
      {setCurrUser(result);
        setUserEdit(false);
      })
    .catch(err=>console.log(err))
   }
  return (
    <div>
      <h1 className='text-center text-info mt-3'>Profile</h1>
      {
        userEdit===false  ? 
        
        <div>
        <h2>{currUser.username}</h2>
        <h2>{currUser.password}</h2>
        <button className="mx-auto btn btn-warning mt-3" onClick={handleEdit}><FaEdit />Change Password</button>
    
    </div>  

     :

     <form className="form mx-auto w-25" onSubmit={handleSubmit(modified)}>
        <div className='mt-3'>
        <label htmlFor="username" className="form-label">Username</label>
        <input type="text" {...register('username')}  id="username" className="form-control" disabled/>
      </div>
      <div className='mt-3'>
        <label htmlFor="password" className="form-label">Password</label>
        <input type="password" {...register("password")} id="password" className="form-control" />
      </div>
      <button className="mx-auto btn btn-success mt-3" ><FaSave className='me-2' /> Save</button>

    </form>

      }

    </div>
  )
}

export default Profi