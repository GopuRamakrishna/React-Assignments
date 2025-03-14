import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className=' bg-light py-4' >
        <ul className="nav nav-tabs d-flex justify-content-end">
           <li className="nav-item">
            <Link className="nav-link" to="" >Home</Link>
           </li>
           <li className="nav-item">
            <Link className="nav-link" to="register" >Register</Link>
           </li>
           <li className="nav-item">
            <Link className="nav-link" to="login" >Login</Link>
           </li>
           <li className="nav-item">
            <Link className="nav-link" to="profile" >Profile</Link>
           </li>
        </ul>
    </div>
  )
}

export default Header