import {useState} from 'react'
import { GiH2O } from 'react-icons/gi';
function Statechn(){

    //let a=10;
    let [a,setA]=useState(10);
    let [username,setusername]=useState("Rajesh");
    let [person,setperson]=useState({id:1,name:'shreyas',age:19})
    let [skills,setskills]=useState(['cbhic++','abhijava','abhisql']);
    function handleIncre(){
        setA(a+1);
        // console.log(a);
        // a+=1;
    }
    function handleusername(){
        setusername("bhanu");
    }
   function handleperson(){
    setperson({...person,id:200,name:"kiran"});
   }
   function handleskill(){
    setskills([...skills,"angular"]);
   }
   function handledelete(){
    let myskills=[...skills];
    myskills.pop();
   }

    return (<>
    <h1>event handlers</h1>
    <p>value of a is {a}</p>
    <button className="btn btn-primary" onClick={handleIncre}>Change</button>
    <p>value of a is {a}</p>
    <p>name is : {username}</p>
    <button className="btn btn-primary" onClick={handleusername}>ChangeName</button>
    <h1>{person.id}</h1>
    <h1>{person.name}</h1>
    <h1>{person.age}</h1>
    <button className="btn btn-warning" onClick={handleperson}>Change obj</button>
    {
        skills.map((skill,idx)=><h2 key={idx}>{skill}</h2>)
    }
    <button className="btn btn-success" onclick={handleskill}>skill</button>
    <button className="btn btn-danger" onclick={handledelete}>Delete</button>
    </>);
}
export default Statechn