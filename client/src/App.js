import React from "react";
import {BrowserRouter, Route} from "react-router-dom";

//importamos nuestros componentes
import CreateCharacter from "./components/createCharacter";
import Landing from "./components/LandingPage";
import Home from "./components/Home";
function App() {
  return (
    <BrowserRouter>
    
    <Route exact path ="/" component={Landing} />
    <Route exact path="/home" component={Home} />
    <Route exact path="/create" component={CreateCharacter} />

    </BrowserRouter>
  
  )
}

export default App;
