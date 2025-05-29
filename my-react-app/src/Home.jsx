function Home(props){
    return(
        <div className="bkVid">
            <video autoPlay muted loop >
                <source src={props.source} type="video/mp4" />
            </video>
            <div>

            </div>
        </div>

);
}
export default Home