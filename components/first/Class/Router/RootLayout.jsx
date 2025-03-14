import Header from './Header'
import Footer from './Footer'
import {Outlet} from 'react-router-dom'

function RootLayout() {
  return (
    <div>
        <Header/>
        <div style={{minHeight:"100vh"}} className='m-4'>
            <Outlet/>
        </div>
        <Footer/>
    </div>
  )
}

export default RootLayout



 // path:"/",
      // element:<RootLayout/>,
      // children:[
      //    {
      //       path:'',
      //       element:<Home/>
      //    },
      //    {
      //       path:'register',
      //       element:<Register/>
      //    },
      //    {
      //       path:'login',
      //       element:<Login/>
      //    },
      //    {
      //       path:'Technology',
      //       element:<Techno/>,
      //       children:[
      //          {
      //             path:'Angular',
      //             element:<Angular/>
      //          },
      //          {
      //             path:'Reactt',
      //             element:<Reactt/>
      //          },
      //          {
      //             path:'Vue',
      //             element:<Vue/>
      //          }
      //       ]
      //    }
      // ]