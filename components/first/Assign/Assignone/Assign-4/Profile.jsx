function Profile(props){
    return(
                <div class="divi">
                    <img src={props.p.image} width="260px" heigth="260px" alt="" />
                    <h5>Id:-{props.p.id}</h5>
                    <h6>Header:-{props.p.newsHeader}</h6>
                    <p>NEWS: {props.p.content}</p>
                    <button className="btn btn-outline-primary">Know More</button>
                </div>
    );
}
export default Profile