import React from 'react'

function Child(props) {
  return (
    <div className='d-flex justify-content-around'>
      <button className="btn btn-outline-primary" onClick={props.handleIncre}>Increment</button>
      <button className="btn btn-outline-warning" onClick={props.handleDecre}>Decrement</button>
    </div>
  )
}

export default Child