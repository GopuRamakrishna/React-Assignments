import React from 'react'
import { useRouteError } from 'react-router-dom'

function Routingerr() {
    const err=useRouteError();
    console.log(err.data);
  return (
    <div>
        <p className='text-center display-6 m-5 text-danger'>{err.data}</p>
        <p className='text-center m-5 text-danger'>{err.status}:{err.statusText}</p>
    </div>
  )
}

export default Routingerr