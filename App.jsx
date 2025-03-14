
// classes
// import First from './components/first/First'
// import First from './components/first/Class/First'
// import Usint from "./components/first/Class/User-interact-demo/Usint"
// import A from './components/first/Class/A'
// import Sideeff from "./components/first/Class/Sideffect/Sideeff"
// import Post from "./components/first/Class/Sideffect/Post"
// import Practice from "./components/first/Class/Sideffect/Practice"
// import Test1 from "./components/first/Class/Ctopar/Test1"
// import Manage from "./components/first/Class/Todo/Manage"
// import Form from "./components/first/Class/Formdemo/Form"
// import Manager from "./components/first/Class/Taskto/Manager"



//Assigments 


// import First from './components/first/First'

// import Assigone from './components/first/Assign/Assignone/Assigone'


// import First from './components/first/Class/First'

// import Asstwo  from './components/first/Assign/Assignone/Asstwo'

// import Assign2 from "./components/first/Assign/Assignone/Batch2/Assing21/Assign2";

// import Three from "./components/first/Assign/Assignone/Three"


// import Array from "./components/first/Assign/Assignone/Batch2/Assign3/Array"
// import Apireq from "./components/first/Assign/Assignone/Batch2/Assign3/Apireq"


// import Main from "./components/first/Assign/Assignone/Assign-4/Main"

// import Counter from "./components/first/Assign/Assignone/Assign-5/Counter"
// import Parent from "./components/first/Assign/Assignone/Batch2/Aptoc5/Parent"



// import Parent from './components/first/Assign/Assignone/Assign-62/Parent'
// import Users from "./components/first/Assign/Assignone/Assign-61/Users"

// import Form from "./components/first/Assign/Assignone/Assign-7/Form";
// import Adduser from "./components/first/Assign/Assignone/Assign7(2)/Adduser"


// import Manag from "./components/first/Assign/Assignone/Assign8/Manag"



// Assignment-9
// import Root from "./components/first/Assign/Assignone/Assign-9/Root";
// import Home from "./components/first/Assign/Assignone/Assign-9/Home";
// import Login from "./components/first/Assign/Assignone/Assign-9/Login";
// import Register from "./components/first/Assign/Assignone/Assign-9/Register";
// import Profile from "./components/first/Assign/Assignone/Assign-9/Profile";


// assignment-10
// import Root from "./components/first/Assign/Assignone/Assign-10/Root";
// import Home from "./components/first/Assign/Assignone/Assign-10/Home";
// import Login from "./components/first/Assign/Assignone/Assign-10/Login";
// import Register from "./components/first/Assign/Assignone/Assign-10/Register";
// import Profile from "./components/first/Assign/Assignone/Assign-10/Profile";

//smaple
// import Rool from "./components/first/Class/Sample/Rool";
// import Home from "./components/first/Class/Sample/Home";
// import Regis from "./components/first/Class/Sample/Regis";
// import { lazy,Suspense } from "react";
// const Login=lazy(()=>import('./components/first/Class/Sample/Login'))
// // import Login from "./components/first/Class/Sample/Login";
// import Profi from "./components/first/Class/Sample/Profi";


// task management
import Root from './components/Task_manage/Root';
import Home from './components/Task_manage/Home';
import Register from './components/Task_manage/Register';
import Users from './components/Task_manage/Users';
import Remove from './components/Task_manage/Remove';


import {createBrowserRouter,RouterProvider} from "react-router-dom";
// import Routingerr from './components/first/Class/Routingerr'

function  App(){

//routing configuration 
const routerObject=createBrowserRouter([
   {
  path:'',
  element:<Root/>,
  children:[
        {
           path:'home',
           element:<Home/>,
        },
        {
           path:'register',
           element:<Register/>
        },
        {
           path:'users',
           element:<Users/>
        },{
           path:'remove',
           element:<Remove/>
        }
  ]
}
 
 ])

   //return react element imp

   return(

    <RouterProvider router={routerObject}/>

   );

  
  
   //  <div>
   {/* <h2>Welcome to React</h2> */}
   {/* <img src="https://wallpapers.com/images/hd/random-pictures-ugouhhnlc2oe689b.jpg" alt="" /> */}
      {/* <img src={imgo} alt="" />
      <img src={red} alt="" /> */}
   {/* <First></First> */}
   {/* <Assigone/> */}
   {/* <Asstwo/> */}
   {/* <Three/> */}
   {/* <A/> */}
   {/* <Main/> */}
   {/* <Counter/> */}
   {/* <Usint/> */}
   {/* <Sideeff/>
   <Post/> */}
   {/* <Practice/> */}
   {/* <Test1/> */}
   {/* <Manage/>  */}
   {/* <Users/> */}
   {/* <Form /> */}
   {/* <Adduser/> */}
   {/* <Array /> */}
   {/* <Apireq/> */}
   {/* <Manager/> */}
   // <Parent/>
   {/* <Manag/> */}
   {/* <RootLayout/> */}
   // <Assign2/>
   {/* </div> */}

}
export default App;


