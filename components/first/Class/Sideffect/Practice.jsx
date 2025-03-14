import { useEffect, useState } from "react"


function Practice() {
    let [count,setPost]=useState([]);
    let[err,seterr]=useState(null);
    useEffect(()=>{
             fetch('https://jsonplaceholder.typicode.com/users')
             .then(res=>res.json(res))
             .then(posts=>setPost(posts))
             .catch((e)=>seterr(e));
    },[]);
  return (
    <div className="container text-center mt-5">
        <h1>Componenti </h1>
        { 
        err!==null && (<p className="text-danger display-5">{err.message}</p>)
        
        }
         {
          err===null && posts.length===0 &&(<div className="spinner-grow mt-5 display-1 text-warning" role="status"></div>)
        }
        {
        err===null && posts.length!==0 && (<table className="table table-bordered table-dark">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>name</th>
                    <th>username</th>
                </tr>
            </thead>
            <tbody>
                {
                    count.map((obj)=>
                           <tr key={obj.id}>
                            <td>{obj.id}</td>
                            <td>{obj.name}</td>
                            <td>{obj.username}</td>
                           </tr>
                    )
                }
            </tbody>
        </table>
        
           ) }
    
    </div>
  )
}

export default Practice