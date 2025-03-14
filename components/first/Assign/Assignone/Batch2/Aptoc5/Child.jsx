import React from 'react'

function Child({b,fun}) {
    let a=100;
  return (
    <div className='bg-info p-5'>
        <h2>child</h2>
        <h5>State from parent is:{b}</h5>
        <button className="btn btn-danger" onClick={()=>fun(a)}>Send-to-Parent</button>
    </div>
  )
}

export default Child