import React from 'react'
import { taskContextObj } from '../../Context/TaskMan'
import { useContext } from 'react'

function Remove() {
  const {arre,setArre,removed_user,setRemovedUser,handleForm}=useContext(taskContextObj);
  return (
    <div>
      <h3 className="text-center text-danger">Removed Users</h3>
     {
        removed_user.length!==0 ?(removed_user.map((user,idx)=><div key={idx} className='card card-body m-4 d-flex'>
          <p className='m-1'>UserId: {user.id}</p>
          <p className='m-1'>Username: {user.username}</p>
          <p className='m-1'>User_Date_Of_Birth: {user.dob}</p>
          <p className='m-1'>User_Address : {user.address}</p>
          <div>
          <button className="mt-2 btn btn-primary" onClick={()=>handleForm(user)}>Restore</button>
          </div>
        </div>)):<h5 className='text-center mt-5'>No User's to Remove</h5>
     }
    </div>
  )
}

export default Remove