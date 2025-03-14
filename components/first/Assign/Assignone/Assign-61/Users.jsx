import { useState } from "react"
import Usercount from "./Usercount"
import { useEffect } from "react";
function Users() {
  let [counter,setCount]=useState(0);
  let [arre,setarre]=useState([])
  function getData(){
    setCount(counter+1);
  }
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users ')
    .then(res=>res.json())
    .then(posts=>setarre(posts))
    .catch()
  },[]);
  return (
    <div className="container">
      <Usercount counter={counter}/>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
        {
               arre.map((userobj,idx)=>
              <div className="col m-2" key={idx}>
                <div className="card card-body  h-100 bg-info d-flex flex-direction-column align-items-center gap-2">
                <p className="display-5">Id:{userobj.id}</p>
                <h5>:-{userobj.name}</h5>
                <p>Username:{userobj.username}</p>
                <p>Email:{userobj.email}</p>
                <button className="btn btn-outline-light w-75 " onClick={getData}>Add User</button>
                </div>
              </div>
              )
        }
      </div>
   
    </div>
  )
}

export default Users