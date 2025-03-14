import './First.css'
function First(){
    let a=45;
    let  obj={
        roll:123,
        name:"abhi",
        branch:"IOT"

    }
    let marks=["css","js","react","css"];
    let students=[{std:"abb",id:67},{std:"num",id:90}];
    return (
    <div className="main">
    <h1 className="text-danger mt-5">First component</h1>;
    <h2>Name of the student is : {a}</h2>
    <h2>roll of the student is : {obj.roll}</h2>
    <h2>roll of the student is : {obj.name}</h2>
    <h2>roll of the student is : {obj.branch}</h2>
    {
        marks.map((ele,idx)=><h2 key={idx}>{ele}</h2>)
    }
    {
        students.map((sobj,idx)=>
            <div key={sobj.id}>
                <h1>{sobj.id}</h1>
                <h1>{sobj.std}</h1>
            </div>
            )
    }
    

      </div>
    );
}
export default First;