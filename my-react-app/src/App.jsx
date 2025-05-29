import Card from "./Card.jsx"
import Profile from "./Profiles.jsx"
import vic from "./assets/victorhugo.jpg"
import lo from "./assets/leandro.jpg"
import gord from "./assets/gord.jpg"
import creg from "./assets/creg.webp"
import giles from "./assets/giles.png"
import me from "./assets/me.jpg"

function App() {
  
  return(    
    <>
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
