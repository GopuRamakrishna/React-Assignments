import React from 'react'

function Remove(props) {
    function handleUserdel(){
     let arre=[...props.user];
     arre.shift();
     props.setUser([...arre]);
    }
  return (
    <div>
         <h2 className='text-center text-warning'>Remove User </h2>
        <button className="btn btn-danger mt-4" onClick={handleUserdel}>Remove</button>
    </div>
  )
}

export default Remove