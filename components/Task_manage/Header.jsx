import React from 'react'
import { Link } from 'react-router-dom'
import { taskContextObj } from '../../Context/TaskMan'
import { useContext } from 'react'

function Header() {
  const {arre}=useContext(taskContextObj);
  return (
    <div className='d-flex justify-content-between text-center m-3'>
        <img src="https://5.imimg.com/data5/MK/II/SD/SELLER-98949805/3d-logo-design-500x500.jpg" width={"120px"}  height={"80px"} alt="" />
        <ul className="nav nav-tabs mt-3">
            <li className='nav-item'>
           <Link className='nav-link' to=''>Home</Link>
            </li>
            <li className='nav-item'>
              {
               arre!=null ? <p></p> :<Link className='nav-link' to='register'>New_user</Link>
              }
            </li>
            <li className='nav-item'>
           <Link className='nav-link' to='users'>Users</Link>
            </li>
            <li className='nav-item'>
           <Link className='nav-link' to='removed_user'>Removed_user</Link>
            </li>
          
        </ul>
    </div>
  )
}

export default Header