import { createContext, useState } from "react";
export const loginContextObj=createContext();
import React from 'react'

function LoginContext({children}) {
    const [userLoginStatus,setLoginStatus]=useState(false);
    const [CurrUser,setCurrUser]=useState(null);
    const [cart,setCart]=useState(null);
    const [errr,setLogerr]=useState(null);
    function handleUserLogin({username,password}){
        fetch(`http://localhost:3000/users?username=${username}&password=${password}`,{method:"GET"})
        .then(res=>res.json())
        .then(userObj=>{
            if(userObj.length!=0){
              setLoginStatus(true);
              setCurrUser(userObj[0]);
              setLogerr(null);
            }
            else{ 
              setLogerr({message:"Invalid jdnajdfnva"})
            }
        })
        .catch(err=>setLogerr(err))
    }
    function userLogOut(){
      setLoginStatus(false);
      setCurrUser(null);
      setLogerr(null);

    }

  return (
    <loginContextObj.Provider value={{handleUserLogin,userLogOut,userLoginStatus,CurrUser,errr}}>
{children}
    </loginContextObj.Provider>
  )
}

export default LoginContext