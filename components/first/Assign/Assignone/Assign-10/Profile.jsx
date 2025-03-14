import React from 'react'
import { useLocation } from 'react-router-dom'

function Profile() {
    let {state}=useLocation();
  return (
    <div>
        <h1 className="display-6 text-center text-info">User_Profile</h1>
        {
            state!=null &&<div className="m-4">
            <p>{state.id}</p>
            <p>{state.username}</p>
            <p>{state.email}</p>
            <p>{state.password}</p>
            
        </div>
}
    </div>
  )
}

export default Profile