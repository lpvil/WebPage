import { useNavigate } from "react-router-dom"

function Profile(props){

    return(
        
        <div className="profile">
            <img src={props.profilePic} className="profpic" alt="profile picture"></img>
            <h2 className="card-title">{props.name}</h2>
            <p className="card-text">{props.descrpt}</p>
            <nav className="nav"><a className="link"href={props.links}></a></nav>
        </div>
        
    );
}
export default Profile