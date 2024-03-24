import { BrowserRouter, Routes, Route } from "react-router-dom"
import Authentication from "./pages/Authentication";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path = "/home" element = {<Home/>}/>
        <Route path = "/auth" element = {<Authentication/>}/>

        <Route index element={<Authentication/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
} 

export default App;
