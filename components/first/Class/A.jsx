import B from './B'
function A(){
    let a=10;
    return (
        <div>
            <h1>Comp-A</h1>
            <B s={a} />
        </div>
    );

}
export default A