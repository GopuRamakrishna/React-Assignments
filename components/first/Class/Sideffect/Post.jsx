import { useEffect, useState } from "react"

function Post() {
    let[posts,setPosts]=useState([]);
    let [err,setErr]=useState(null);
    useEffect(()=>{
        //make api request
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(postList=>setPosts(postList))
        .catch(e=>setErr(e))
    },[]);
    // console.log(posts);
  return (
    <div className="container">
      {/* if err puccured err not null */}
        {
            err!=null && posts.length!==0 && <p className="text-danger display-3">{err.message}</p>
        }
        {/* if errr!=null and data is fetching that is len=0 */}
        {
          err==null && posts.length==0 && (<div className="spinner-grow mt-5 display-1 text-warning" role="status"> </div>)
        }
        {
            err==null && posts.length!=0 &&  (<table className="table">
        <thead>
        <tr>
            <th>UserId</th>
            <th>ID</th>
            <th>Tittle</th>
        </tr>
        </thead>
        <tbody>
                    {
                        posts.map((post)=>
                            <tr key={post.id}>
                            <td>{post.id}</td>
                            <td>{post.name}</td>
                            <td>{post.username}</td>
                        </tr>
                        )
                    }
        </tbody>
      </table>)
        }
    

    </div>
  )
}

export default Post