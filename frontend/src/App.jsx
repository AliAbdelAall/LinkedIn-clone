import { useState, useEffect} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Authentication from "./pages/Authentication";
import Home from "./pages/Home";
import Header from "./pages/Home/components/Header";
import Profile from "./pages/profile";
import "./styles/common/utilities.css"

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>

        <Route path = "/" element = {<Authentication ></Authentication>}/>
        
        <Route path = "/home" element = {<> <Header/> <Home/> </>}/>
        <Route path = "/profile" element = {<> <Header/> <div className="flex center"><Profile/></div>  </>}/>

      </Routes>
      </BrowserRouter>
      
    </div>
  );
} 

export default App;
