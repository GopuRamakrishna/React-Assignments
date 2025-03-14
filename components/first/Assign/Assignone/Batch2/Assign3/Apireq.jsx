import React, { useEffect, useState } from 'react'

function Apireq() {
    let [arre,setArre]=useState([]);
    useEffect(()=>{
        fetch('https://reqres.in/api/users?page=2')
        .then(res=>res.json())
        .then(post=>setArre(post.data))
        .catch(err=>console.log(err))
    },[])
  return (
    <div className='container'>
    <h4 className='display-6 m-4'>API request using  useEffect</h4>
    <div className="mx-auto">
   <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 ">
    {
   arre.length!==0 && arre.map((ele,idx)=>
                <div className='col m-1' key={idx}>
                    <div className="card card-body h-100 d-flex flex-direction-column justify-content-space-evenly align-items-center">
                    <img src={ele.avatar} alt="" />
                    <p>{ele.id}</p>
                    <h6>{ele.email}</h6>
                    <h6>{ele.first_name}</h6>
                    <h6>{ele.last_name}</h6>
                    </div>
                </div>
)}
   </div>
   </div>

    </div>
  )
}

export default Apireq