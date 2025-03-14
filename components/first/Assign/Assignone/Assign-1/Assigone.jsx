function Assigone(){
    let employee=[
        {id:1,name:"jhon",age:24,job:"developer"},
        {id:2,name:"wick",age:22,job:"engineer"},
        {id:3,name:"Thor",age:20,job:"Doctor"},
        {id:4,name:"Agustine",age:21,job:"HR"},
        {id:5,name:"Arun",age:25,job:"Manager"},
        {id:6,name:"varun",age:26,job:"intern"}
    ]
    return(
        <div className="container">
            {/* <h1>I am in the raect assindnjd</h1> */}
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Job</th>
                    </tr>
                </thead>
                <tbody>
                        {employee.map((empObj,idx)=>
                        <tr key={idx}>
                            <td>{empObj.id}</td>
                            <td>{empObj.name}</td>
                            <td>{empObj.age}</td>
                            <td>{empObj.job}</td>
                            </tr> )}
                           
                </tbody>
            </table>
        </div>
    )
}
export default Assigone;