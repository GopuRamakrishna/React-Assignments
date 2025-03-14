import React from 'react'
import './Seven.css'
import { useForm } from 'react-hook-form'

function Form() {
    const {register,handleSubmit,formState:{errors}}=useForm();
    function handlesub(obj){
       console.log(obj)
    }
  return (
    <div className='container cont'>
        <h1 className="display-6 text-center mb-4 text-danger">Registration Form</h1>
        <form className=" from" onSubmit={handleSubmit(handlesub)}>
          
{/*            name f an dlast */}

            <div className="name mt-2">


            <div>
                <label htmlFor="FirstName" className='form-label'>FirstName</label>
                <input type="text" {...register('FirstName',{required:true,minLength:4,maxLength:6})} id="FirstName" className='form-control ' />
                {
                errors.FirstName?.type=='minLength' &&<p className='text-danger'>*min length should be 4</p>
            }
            {
                errors.FirstName?.type=='maxLength' &&<p className='text-danger'>*max length should be 6</p>
            }
             {
                errors.FirstName?.type==='required'&&<p className="text-danger">*Firstname id required</p>
                // errors.username?.type==='required'&&<p className="text-warning">*username id required</p>
            }
            </div>
            <div>
            <label htmlFor="LastName" className='form-label'>LastName</label>
            <input type="text" {...register('LastName',{required:true,minLength:4,maxLength:6})} id="LatstName" className='form-control' />
            {
                errors.LastName?.type=='minLength' &&<p className='text-danger'>*min length should be 4</p>
            }
            {
                errors.LastName?.type=='maxLength' &&<p className='text-danger'>*max length should be 6</p>
            }
             {
                errors.LastName?.type==='required'&&<p className="text-danger">*Lastname id required</p>
                // errors.username?.type==='required'&&<p className="text-warning">*username id required</p>
            }
            </div>
            </div>

      {/* date and gender */}
            <div className="datge mt-3">
                <div>
                  <label htmlFor="Date" className='form-label'>Date</label>
                   <input type="date" {...register('date',{required:true})} id="date" className='form-control w-100' />
                   {
                errors.date?.type==='required'&&<p className="text-danger">*date is required</p>
                
                 }
                </div>

         <div className='mt-3'>
               <label htmlFor="gender">Gender</label>
              <div className='gend'>
                        <div className='form-check'>
                <input type="radio" {...register('gender',{required:true})} id="male" className='form-check-input ' />
                <label htmlFor="gender" className='form-check-label'>male</label>
              
                       </div>
                     <div className="form-check">
                           <input type="radio" id="female" {...register('gender',{required:true})} className='form-check-input ' />
                   <label htmlFor="gender" className='form-check-label'>female</label>
                       </div>
                     
               </div>
               {
                errors.gender?.type==='required'&&<p className="text-danger">*gender required</p>
                  }
         </div>

  </div>


       {/* phn nuber and date */}
            <div className="emph mt-3">
            <div>
                <label htmlFor="email" className='form-label'>Email</label>
                <input type="email" {...register('email',{required:true})} id="email" className='form-control w-100' />
                {
                errors.email?.type==='required'&&<p className="text-danger">*date is required</p>
                
                 }
            </div>
            <div>
            <label htmlFor="number" className='form-label'>Phn Number</label>
            <input type="number" {...register('number',{required:true})} id="number" className='form-control w-100' />
            {
                errors.number?.type==='required'&&<p className="text-danger">*date is required</p>
                
                 }
            </div>
            </div>


             {/*select  */}
            <div className='mt-3'>
                <label htmlFor="subject">Subject</label>
                <select {...register('subject',{required:true})} id="subject" className="form-select mt-2">
                <option value="choose">Choose Option</option>
                    <option value="mac">MAC</option>
                    <option value="oopj">OOPJ</option>
                    <option value="daa">DAA</option>
                    <option value="dbms">DBMS</option>
                    <option value="mfsc">MFCS</option>
                </select>
            </div>
        <button className="btn btn-primary mt-3">Submit</button>
        </form>
        
    </div>
  )
}

export default Form