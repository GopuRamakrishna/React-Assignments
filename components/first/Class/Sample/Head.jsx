import React from 'react'
import { Link } from 'react-router-dom'
import { counterContextObj } from './Context'
import { useContext } from 'react'

function Head() {
  const {Logout,user}=useContext(counterContextObj);
  return (
    <div className="py-4 bg-light d-flex justify-content-center">
        <ul className="nav nav-tabs">
            <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/register">Register</Link>
            </li>
            {
               user? <li className="nav-item">
               <Link className="nav-link" to="/login" onClick={Logout}>Logout</Link>
               </li>: <li className="nav-item">
            <Link className="nav-link" to="/login">Log</Link>
            </li>
            }
           

            <li className="nav-item">
            <Link className="nav-link" to="/profile">profile</Link>
            </li>

        </ul>
    </div>
  )
}

export default Head