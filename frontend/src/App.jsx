import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Authentication from "./pages/Authentication";
import Home from "./pages/Home";
import Header from "./pages/Home/components/Header";
import Profile from "./pages/profile";

const App = () => {
  const [userId, setUserId] = useState(null)
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>

        <Route path = "/" element = {
        <Authentication
         setUserId={setUserId}
         ></Authentication>}/>
        
        <Route path = "/home" element = {<><Header/><Home /></>}/>
        <Route path = "/profile" element = {<><Header/><Profile/></>}/>

      </Routes>
      </BrowserRouter>
      
    </div>
  );
} 

export default App;
