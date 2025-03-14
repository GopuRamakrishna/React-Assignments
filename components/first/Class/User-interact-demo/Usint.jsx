import Statechn from "./Statechn";
function Usint(){
    //event handling function
    function handleClick(){
        console.log("event occuredr");
    }
//parameterised fun can be called as onclick={()=>funName()}
    function handleAnother(x){
        console.log("value of x is: ",x);
    }

    return(
        <div className="text-center">
            <h1 className="display-3">User-interaction-demo</h1>
            <button className="btn btn-outline-success" onClick={handleClick}>Click</button>
            <button className="btn btn-outline-danger" onClick={()=>handleAnother(124)}>Another Click</button>
            <Statechn/>
        </div>
    );
}
export default Usint