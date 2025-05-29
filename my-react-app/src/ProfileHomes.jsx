function ProfileHome(props){
    return(
        <div className="homeProfiles">
            <video autoPlay muted loop className="bkVid">
                <source src={props.source} type="video/mp4" />
            </video>
            <div>
                <nav>
                    <a href="./App.jsx">Profiles</a>
                </nav>
            </div>
        </div>

);
}
export default ProfileHome