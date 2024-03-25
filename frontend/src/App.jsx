import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Authentication from "./pages/Authentication";
import Home from "./pages/Home";

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
        
        <Route path = "/home" element = {
        <Home 
        
        />}/>

      </Routes>
      </BrowserRouter>
      
    </div>
  );
} 

export default App;
