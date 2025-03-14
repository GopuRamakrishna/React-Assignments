import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

function Root() {
  return (
    <div>
        <Header/>
        <div style={{minHeigth:"100vh"}}>
            <Outlet/>
        </div>
    </div>
  )
}

export default Root

// {
//   path:'',
//   element:<Root/>,
//   children:[
//         {
//            path:'',
//            element:<Home/>,
//         },
//         {
//            path:'register',
//            element:<Register/>
//         },
//         {
//            path:'users',
//            element:<Users/>
//         },
//         {
//            path:'removed_user',
//            element:<Remove/>
//         }
//   ]
// }