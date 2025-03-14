import React from 'react'

function Count(props) {
  return (
    <div><h6 className='text-warning display-6'>Count</h6>
    <p className="lead">{props.tasks.length}</p>
    </div>
  )
}

export default Count