import React from 'react'

function Count(props) {
  return (
    <div>
        <h2 className='text-center text-warning '>Count</h2>
        <p className="lead text-center">No.of users: {props.user.length}</p>
    </div>
  )
}

export default Count