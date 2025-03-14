import { useState } from "react"

function Test2(props) {
    const [userName,setuser]=useState("mastrescoding");
    function handlechange(){
        setuser('abhi');
    }
    console.log(props);
  return (
    <div>
        <h1>Count:{props.p}</h1>
        <button className="btn btn-dark" onClick={props.handleCounter}>Test-2</button>

        <h2>UserName:{userName}</h2>
        <button className="btn btn-warning" onClick={handlechange}>Test-2</button>
    </div>
  )
}

export default Test2