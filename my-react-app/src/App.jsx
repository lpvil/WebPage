import Card from "./Card.jsx"
import Button from "./Button.jsx";
import Profile from "./Profiles.jsx"
import vic from "./assets/victorhugo.jpg"
import lo from "./assets/lo.jpg"
import gord from "./assets/gordon.jpeg"

function App() {
  
  return(    
    <>
    <Card/>
    <Profile profilePic={vic} name="Victor Hugo" descrpt="Four-time IBJJF World champion at black belt. Earned his black belt form Saulo and Xande Ribeiro at Six Blades Association" />
    <Profile profilePic={lo} name="Leandro Lo" descrpt="Eight-time IBJJF World Champion in five different weight classes. Earned black belt under Cicero Costha"/>
    <Profile profilePic={gord} name="Gordon Ryan" descrpt="Seven-time ADCC World Champion "/>
    </>
  
  
);
}

export default App
