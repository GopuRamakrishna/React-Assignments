import React, { useState } from 'react'
import Adduser from './Adduser'
import List from './List'
import Count from './Count'
import Remove from './Remove'
function Manag() {
    let [user,setUser]=useState([]);
  return (
    <div>
        <h2 className='text-center mt-3 text-info'>User management App</h2>
        <div className="d-flex justify-content-evenly  mt-3">
           <Adduser user={user} setUser={setUser} />
           <Count user={user}/>
           <Remove user={user} setUser={setUser} />
        </div>
        <List user={user}/>
    </div>
  )
}

export default Manag