import Profile from "./Profiles.jsx"
import vic from "./assets/victorhugo.jpg"
import lo from "./assets/leandro.jpg"
import gord from "./assets/gord.jpg"
import creg from "./assets/creg.webp"
import giles from "./assets/giles.png"
import me from "./assets/me.jpg"
import Home from "./ProfileHomes.jsx"
import NoPage from "./Pages/noPage.jsx"
import cji from "./assets/cji.webp"
//import { createBrowserRouter, RouterProvider } from "react-router-dom"

//const router = createBrowserRouter([{

//}]);

function App() {
  
  return(    
    <>
    <div className="navbar">
      <nav className="bar">
        <ul>
           <li><a>Home </a></li>
           <li><a>About </a></li>
           <li><a>Contact us</a></li>
        </ul>
       </nav>
    </div>
    <div className="eventInfo">
      <img src={cji} alt="cji image"></img>
        <p>
          The Craig Jones Invitational is the newest grappling event to come into the scene. Spawned from a bit of pettyness and troll like antics, CJI was born and is quickly becoming one of the most entertainig events in grappling to date.
          Coming back for their second year after a successfull event the year prior, many are fevershly waiting for the event to release tickets. With this event focusing on bringing the best of the best in the grappling world, It will surely be
          another banger of a show. Previoulsy in 2024 the ruleset was two weight divisions, over 80kg and under 80kg with a 16-man bracket in each division, whom winner of such division was awarded $1 millon dollars. This year 2025 the ruleset has changed into a team style event
          where multiple teams with a competitor of each weight divison battle it out for the $1 million dollar prize. Below are the teams that will compete this upcoming august in Las Vegas, Nevada.
        </p>
    </div>
    <Profile profilePic={me} name="Jesus Lopez" descrpt="Hi, I'm Jesus Welcome to my Page"/>
    <Profile profilePic={vic} name="Victor Hugo" descrpt="Four-time IBJJF World champion at black belt. Earned his black belt form Saulo and Xande Ribeiro at Six Blades Association" />
    <Profile profilePic={lo} name="Leandro Lo" descrpt="Eight-time IBJJF World Champion in five different weight classes. Earned black belt under Cicero Costha"/>
    <Profile profilePic={gord} name="Gordon Ryan" descrpt="Seven-time ADCC World Champion. Earned his black belt under Gary Tonon. "/>
    <Profile profilePic={creg} name="Craig Jones" descrpt="Second Best" />
    <Profile profilePic={giles} name="Lachlan Giles" descrpt="2019 ADCC bronze medalist 2017 World No-Gi Championship Bronze Medalist.Earned his black belt under John Simon." />
    </>
  
  
);
}

export default App
