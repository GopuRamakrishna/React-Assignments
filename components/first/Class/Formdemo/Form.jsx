import { useForm } from "react-hook-form";
function Form() {
   const {register,handleSubmit,formState:{errors}}= useForm();
   function handleForm(obj){
    console.log(obj);
   }
   console.log(errors);
  return (
    <div className="container">
        <h1 className="display-6 text-center text-info">Form Demo</h1>
        <form className=" mx-auto w-50" onSubmit={handleSubmit(handleForm)}>
            <div className="mb-3">
            <label  className="form-label fs-6">Username</label>
            <input type="text" {...register('username',{required:true,minLength:4})}  id="username" className="form-control"  />
            {
                errors.username?.type==='required'&&<p className="text-warning">*username id required</p>
                // errors.username?.type==='required'&&<p className="text-warning">*username id required</p>
            }
            {  errors.username?.type==='minLength'&&<p className="text-warning">*Minimum Length is four</p>}
            </div>
            <div className="mb-3">
            <label  className="form-label fs-6">Email</label>
            <input type="email" {...register('email')}  id="email" className="form-control"  />
            </div>
            <div className="mb-3">
                <label>Select Your skill</label>
            <div className="form-check">  
            <input type="checkbox" {...register('css')} id="css" className="form-check-input"  />
            <label htmlFor="css" className="form-check-label">css</label>
            </div>
            <div className="form-check">  
            <input type="checkbox" {...register('js')} id="js" className="form-check-input"  />
            <label htmlFor="js" className="form-check-label">js</label>
            </div>
            <div className="form-check">  
            <input type="checkbox" {...register('react')} id="react" className="form-check-input"  />
            <label htmlFor="react" className="form-check-label">react</label>
            </div>
            </div>
            <div className="mb-3">
                <label htmlFor="state" className="form-label">Select State</label>
            <select {...register('state')}  id="state" className="form-select">
                <option value="Telangana">Telangana</option>
                <option value="Maharastra">maharastra</option>
                <option value="Andhra">Andhra</option>
                <option value="Tamil nadu">Tamil nadu</option>
                <option value="Kerala">Kerala</option>
                <option value="Karnataka">Karnataka</option>
            </select>
            <div className="mb-3">
                <label className="form-label">Feedback</label>
                <textarea {...register('feedback')} id="feedback" className="form-control"></textarea>
            </div>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}

export default Form