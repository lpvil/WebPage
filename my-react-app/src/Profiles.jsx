
function Profile(props){
    return(
        
        <div className="profile">
            <img src={props.profilePic} className="profpic" alt="profile picture"></img>
            <h2 className="card-title">{props.name}</h2>
            <p className="card-text">{props.descrpt}</p>
        </div>
        
    );
}
export default Profile