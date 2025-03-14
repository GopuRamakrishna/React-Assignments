import React, { useState } from 'react'
import Add from './Add'
import List from './List'
import Count from './Count'
function Manager() {
  let [tasks,setArre]=useState([]);
 
  return (
    <div>
      <h1 className="text-center display-5 mt-4 text-primary">To-Do using Forms</h1>
      <div className='d-flex justify-content-evenly mt-3'>
    <Add tasks={tasks} setArre={setArre}/>
    <List tasks={tasks}/>
    <Count tasks={tasks}/>
    </div>
    </div>

  )
}

export default Manager