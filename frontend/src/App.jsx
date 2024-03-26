import { useState, useEffect} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Authentication from "./pages/Authentication";
import Home from "./pages/Home";
import Header from "./pages/Home/components/Header";
import Profile from "./pages/profile";
import "./styles/common/utilities.css"

const App = () => {
  const [userId, setUserId] = useState(null)

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>

      <Route path="/" element={<Authentication setUserId={setUserId} />} />
        
        <Route path = "/home" element = {<> <Header/> <Home userId={userId}/> </>}/>
        <Route path = "/profile" element = {<> <Header/> <div className="flex center" ><Profile userId={userId}/></div>  </>}/>

      </Routes>
      </BrowserRouter>
      
    </div>
  );
} 

export default App;
