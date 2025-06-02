function Home(props){
return(
    <div>
        <video autoPlay muted loop className="bkVid">
            <source src={props.source} type="Video/mp4"/>
        </video>
    <div className="homeScrn">

    </div>
    </div>

);
}
export default Home