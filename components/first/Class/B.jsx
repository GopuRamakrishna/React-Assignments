import C from './C'
function B(props){
    console.log(props.s);
    return (
        <div>
            <h2>{props.s}</h2>
            <h1>Comp-B</h1>
            <C/>
        </div>
    );

}
export default B