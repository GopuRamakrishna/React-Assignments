import { useState } from 'react';
import {useEffect} from 'react'
function Sideeff() {
    let [counter,setc]=useState(100);
    let [count,seta]=useState(200);

    //useeffect executes only after intial rendering
    //it will execute every time when state is changed if there is no second argu
    //effect will execute when the state of array is changed
    useEffect(()=>{
        //effect
        console.log("use effect execuyed");
    },[])
    //[] called once
    function handleCounter(){
        setc(counter+1);
    }
    function handleCounter2(){
        seta(count+1);
    }
  return (
    <div className='container text-center'>
        <h1>SideEffect</h1>
        <h2>Counter:{counter}</h2>


        <button className="btn btn-primary " onClick={handleCounter}>click</button>
        <h2>Counter2:{count}</h2>
        <button className="btn btn-outline-primary" onClick={handleCounter2}>click-two</button>

    </div>
  )
}

export default Sideeff