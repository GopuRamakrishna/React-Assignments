import { useState } from 'react'
import Test2 from './Test2'
function Test1() {
  const [counter,setCount]=useState(100);
  function handleCounter(){
    setCount(counter+2);
  }
  console.log(counter);
  return (
    <div className='text-center mt-5'>
      <p>Test1</p>
      <h2>count:{counter}</h2>
      <button className="btn btn-outline-primary" onClick={handleCounter}>Count</button>
    <Test2 p={counter} handleCounter={handleCounter}/>
    </div>
  )
}

export default Test1 