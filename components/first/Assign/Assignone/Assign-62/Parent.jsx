import React, { useState } from 'react'
import Child from './Child';

function Parent() {
    let [count,setCount]=useState(0);
    function handleIncre(){
        setCount(count+1);
    }
    function handleDecre(){
        setCount(count-1);
    }
  return (
    <div className='container m-5 text-center'>
     <h1 className="display-6 text-dark">Count:{count}</h1>
     <Child count={count} handleDecre={handleDecre} handleIncre={handleIncre}/>
    </div>
  )
}

export default Parent