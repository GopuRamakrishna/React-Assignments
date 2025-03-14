import { useState } from "react"

function Task(props) {

  // console.log(tasks)
  return (
    <div>
        <h2 className="display-6 text-warning">Add Task</h2>
        <button className="btn btn-primary"onClick={props.handleTasks}>Submit</button>
    </div>
  )
}

export default Task