import React from 'react'
import { useContext } from 'react'
import { counterContextObj } from '../../../../Context/CounterContext'

function Angular() {
  const {counter,setCounter}=useContext(counterContextObj)
  return (
    <div>
      <h1>Angular</h1>
      <h4>counter:{counter}</h4>
      <button className="btn btn-outline-primary" onClick={()=>{setCounter(counter-1)}}>Decrement</button>
      <p className="lead m-4">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi accusantium ipsum similique ullam excepturi cumque ea animi aspernatur sit voluptatem eos aliquam vitae, omnis odit, maiores modi consequatur delectus neque! Architecto laboriosam accusamus recusandae iste non nam quod quas quae culpa, commodi quo iure debitis. Possimus quis nostrum nam fugiat nulla dolores corrupti. Maiores, quas ipsum soluta tenetur voluptas beatae itaque natus optio delectus cumque harum velit aliquam laborum quaerat officia magnam hic nostrum quibusdam ea ratione at unde id repellendus? Pariatur cum recusandae aperiam quos harum provident officiis nulla. Pariatur delectus autem atque officiis veniam ut provident, illo magni.
      </p>
    </div>
  )
}

export default Angular