import { createContext ,useState} from "react";
export const taskContextObj=createContext();

function TaskMan({children}) {
    const [arre,setArre]=useState(null);
    const [status,setStatus]=useState(false);
    const [removed_user,setRemovedUser]=useState([]);

  //to restore the deleted data
function handleForm(userObj){
    fetch('http://localhost:3000/users',{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(userObj)})
    .then(res=>{
        if(res.status==201){
           setRemovedUser(removed_user=>removed_user.filter(user=>user.id!=userObj.id));
        }
    })
    .catch(err=>setErr(err))
    }
function handleUpdate(currUser){
   
}
  return (
    <taskContextObj.Provider value={{arre,setArre,removed_user,setRemovedUser,handleForm,handleUpdate}}>{children}</taskContextObj.Provider>
  )
}

export default TaskMan