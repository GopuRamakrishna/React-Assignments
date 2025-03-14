import React, { useState } from 'react'
import Child from './Child'
function Parent() {
  let [child,setChild]=useState(0);
  let a=68;
  function handleSetChild(x){
     setChild(x);
}
  return (
    <div className='bg-warning mt-5 p-5'>
        <h3>Parent</h3>
        <h4>State from child is:{child}</h4>
        <button className="btn btn-danger mb-4">Send-to-Child</button>
         <Child b={a} fun={handleSetChild}/>
    </div>
  )
}

export default Parent