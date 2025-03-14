import React from 'react'
import {Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

function Techno() {
  // createBrowserRouter([])
  return (
    <div>
      <h1>Technologies</h1>
      <ul className='nav nav-tabs'>
       <li className='nav-item'>
      <Link className='nav-link' to="Angular">Agular</Link>
       </li>
       <li className='nav-item'>
        <Link className='nav-link' to="Reactt">React</Link>
       </li>
       <li className='nav-item'>
        <Link className='nav-link' to="Vue">Vue</Link>
       </li>
      </ul>

      <Outlet/>
    </div>
  )
}

export default Techno