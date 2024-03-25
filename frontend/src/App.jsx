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
        
        <Route path = "/home" element = {
        <Home 
        userId={userId} 
        />}/>

        <Route path = "/auth" element = {
        <Authentication
         setUserId={setUserId}
         ></Authentication>}/>

        <Route index element={<Authentication setUserId={setUserId}/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
} 

export default App;
