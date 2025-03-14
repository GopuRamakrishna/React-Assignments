import React from 'react'
import { useLocation } from 'react-router-dom'

function Profile() {
    let {state}=useLocation();
  return (
    <div className='text-center'>
        <p>{state.username}</p>
        <p>{state.email}</p>
        <p>{state.password}</p>
    </div>
  )
}

export default Profile