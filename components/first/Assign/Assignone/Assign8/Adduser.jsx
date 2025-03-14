import React from 'react'
import { useForm } from 'react-hook-form'

function Adduser(props) {
    let bol=[];
    let {register,handleSubmit,formState:{errors},reset}=useForm();
    function handleFormSubmit(userobj){
         props.setUser([...props.user,userobj]);
         reset();
         bol=props.user.filter(ele=>ele.username===userobj.username);
         console.log(bol)
    }

  return (
    <div>
         <h2 className='text-center text-warning'>Adduser</h2>
         <form className="form" onSubmit={handleSubmit(handleFormSubmit)}>
            <div>
                <label htmlFor="username" className="form-label">Username</label>
                <input type="text" {...register('username',{required:true})} id="username" className="form-control"/>
                {
                    errors.username?.type==='required' && <p className="text-danger">*username required</p>
                }
            </div>
            <div className='mt-2'>
                <label htmlFor="email" className="form-label">E-mail</label>
                <input type="email" {...register('email',{required:true})} id="email" className="form-control"/>
                {
                    errors.email?.type==='required' && <p className="text-danger">*email required</p>
                }
            </div>
            <button className="btn btn-primary mt-3">Submit</button>
         </form>
         {
            props.user.length!=0&&bol.length!=0?<p className='lead text-danger'>*username already exits</p>:null
         }
    </div>
  )
}

export default Adduser