import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
function Root() {
  return (
    <div>
        <Header/>
        <div style={{minHeight:"100vh"}}>
            <Outlet/>
        </div>
        <Footer/>
    </div>
  )
}

export default Root

// {
//   path:'',
//   element:<Root/>,
//   children:[
//      {
//         path:'/',
//         element:<Home/>
//      },
//      {
//         path:'register',
//         element:<Register/>
//      },
//      {
//         path:'login',
//         element:<Login/>
//      },
//      {
//         path:'profile/:username',
//         element:<Profile/>
//      }
//   ]
// }