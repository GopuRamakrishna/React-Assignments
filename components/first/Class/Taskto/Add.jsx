import React from 'react'
import { useForm } from 'react-hook-form'

function Add(props) {
    let {register,handleSubmit,formState:{errors},reset}=useForm();
    function handleFormSubmit(taskObj){
     props.setArre([...props.tasks,taskObj.input]);
     reset();
    }
  return (
    <div>
        <h6 className='text-warning display-6'>AddTask</h6>
        <form  className="form mx-auto m-4" onSubmit={handleSubmit(handleFormSubmit)}>
            <input type="text" className="form-control" {...register('input',{required:true})} />
            {
              errors.input?.type==='required'&& <p className="mt-2 text-danger">*input required</p>
            }
            <button className="btn mt-3 btn-primary">Submit</button>
        </form>
    </div>
  )
}

export default Add