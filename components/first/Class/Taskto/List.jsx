import React from 'react'

function List(props) {
  return (
    <div>
    <h6 className='text-warning display-6'>List</h6>
    <div className='text-center'>
    {
          props.tasks.map((ele,idx)=><h6 className='lead' key={idx}>{ele}</h6>
        )
    }
    </div>
    </div>
  )
}

export default List