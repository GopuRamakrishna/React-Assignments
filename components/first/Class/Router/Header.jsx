// import React from 'react'
// import icon from 'C:\React\react-app-one\src\assets\icon.jpg'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='py-4 bg-light d-flex justify-content-between'>
      <img src="https://i.pinimg.com/474x/cb/63/8f/cb638f1a43e04783bbbaec251a6f416f.jpg" width={"60px"} alt="" />
      <ul className="nav nav-tabs d-flex justify-content-end">
  <li className="nav-item">
    <Link className="nav-link" to="/" >Home</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/register">Register</Link>
  </li>
  <li className="nav-item">
   <Link className="nav-link" to="/Technology">Technology</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/login">Login</Link>
  </li>
</ul>
      
    </div>
  )
}

export default Header