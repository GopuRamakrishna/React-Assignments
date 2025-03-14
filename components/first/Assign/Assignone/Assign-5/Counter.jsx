import { useState } from "react"
import './Counter.css'
function Counter(){
    let [count,setcount]=useState(0);
    function handleIncre(){
        setcount(count+1);
    }
    function handleDecre(){
        setcount(count-1);
    }
    function handleReset(){
        setcount(count-count);
    }

    return (
        <div className="container div">
        <h4>Count: {count}</h4>
        <button className="btn btn-primary" onClick={handleIncre}>Increment</button>  
        <button className="btn btn-outline-primary" onClick={handleReset}>Reset</button>
        <button className="btn btn-primary" onClick={handleDecre}>Decrement</button>
        </div>
    );
}
export default Counter