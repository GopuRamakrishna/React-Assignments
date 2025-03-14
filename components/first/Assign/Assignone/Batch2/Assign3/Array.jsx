import React, { useState } from 'react'
import { RiH4 } from 'react-icons/ri';

function Array() {
    let [arre,setArre]=useState([1,2,3,4,5,6]);
    function handleArreAdd(){
        let one=[...arre];
        one.unshift(0);
        setArre([...one,7]);
    }
    function handleArreDel(){
        let copy=[...arre];
        copy.splice(2,1)
        setArre([...copy]);
    }
  return (
    <div className='container'>
        <h1 className='text-center display-6 mb-4'>Adding and deleting an element at specifi pos in the arre</h1>
        <div className="container text-center">
        {
            arre.map((ele,idx)=> <h4 key={idx}>{ele}</h4> )
        }
        <button className="btn btn-primary " onClick={handleArreAdd}>Add</button>
        <button className="btn btn-danger m-3" onClick={handleArreDel}>Delete</button>
        </div>
        </div>
  )
}

export default Array