import { useState } from "react";
import Count from "./Count"
import List from "./List"
import Task from "./Task"

function Manage() {
  let [tasks,settask]=useState([]);
  function handleTasks(){
    let newNumber=Math.round(Math.random()*10);
    settask([...tasks,newNumber]);
  }
  console.log(tasks)
  return (
    <div className="container mt-4">
        <h1 className="text-warning text-center">Add Task Management System</h1>
        <div className="d-flex justify-content-around">
        <Task handleTasks={handleTasks}/>
        <List tasks={tasks}/>
        <Count tasks={tasks}/>
        </div>
    </div>
  )
}

export default Manage