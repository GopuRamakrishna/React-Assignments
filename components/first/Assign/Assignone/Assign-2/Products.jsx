import './Asst.css'
function Products(props){
    return (
        <>
            <img src={props.p.image} className='w-50' alt="" />
            <h6>Id-{props.p.id}</h6>
            <p>Tittle-{props.p.title}</p>
            <p>Price:-{props.p.price}</p>
            <p>Category:-{props.p.category}</p>

        </>
    );
}
export default Products