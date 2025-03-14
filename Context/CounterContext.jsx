import { useState } from "react";
import { createContext } from "react";
export const counterContextObj=createContext();
import React from 'react';

function CounterContext({children}) {
    const [counter,setCounter]=useState(100);
  return (
   <counterContextObj.Provider value={{counter,setCounter}}>
    {children}
   </counterContextObj.Provider>
  );
}

export default CounterContext