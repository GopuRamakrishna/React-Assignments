import React, { useState } from 'react'
import { createContext } from 'react';
export const counterContextObj=createContext();

function Context({children}) {
const [user,setUser]=useState(false);
const [currUser,setCurrUser]=useState(null);
const [loginErr,setErr]=useState(null);
    function handleUserLogin({username,password}){
        fetch(`http://localhost:3000/users?username=${username}&password=${password}`,{method:"GET"})
        .then(res=>res.json())
        .then(userObj=>{
           if(userObj.length!=0){
             setUser(true);
             setCurrUser(userObj[0]);
             setErr(null);
        }
         else{
           setErr({message:"INVALID DATA"})
            }
  })
  .catch(err=>setErr(err))
}
function Logout(){
  setUser(false);
  setCurrUser(null);
  setErr(null);
}
  return (
   <counterContextObj.Provider value={{handleUserLogin,Logout,user,currUser,setCurrUser}}>{children}</counterContextObj.Provider>
  )
}

export default Context