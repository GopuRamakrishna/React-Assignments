import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div className='bg-light py-3 d-flex justify-content-around align-items-center'>
        <img width={"160px"} height={"80px"} src="https://cdn.mos.cms.futurecdn.net/JYMtGzLr6f2RGuHkaxJjwD.jpg" alt="" />
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <Link className='nav-link' to="">Home</Link>
            </li>
            <li className="nav-item">
                <Link  className='nav-link' to="register">register</Link>
            </li>
            <li className="nav-item">
                <Link  className='nav-link' to="login">Login</Link>
            </li>
            <li className="nav-item">
                <Link  className='nav-link' to="profile">Profile</Link>
            </li>
        </ul>
    </div>
  )
}

export default Header