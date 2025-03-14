function Protre(props){
    return (
        <div class="divi">
            <img src="https://cdn-icons-png.flaticon.com/512/8955/8955033.png" width="260px" heigth="260px" alt="" />
            <h5>Id:-{props.p.id}</h5>
            <h6>Id:-{props.p.name}</h6>
            <p>Id:-{props.p.profession}</p>
            <button className="btn btn-outline-primary">Profile</button>
        </div>

    );
}
export default Protre