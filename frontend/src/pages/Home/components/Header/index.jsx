import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "../../../../styles/common/utilities.css"
import "../../../../styles/common/colors.css"
import "./style.css"

const Header = () => {
  const [route, setRoute]  = useState("home")
  const navigate = useNavigate()
  
  return (
    <header className='flex center header'>
      <div className='flex center linkedin-search-wrapper'>
        <i className="fa-brands fa-linkedin col-primary"></i>
        <div className='search-home gray'>
          <input type="text" placeholder = "Search"/>
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
      
      <nav className='flex center header-nav gray'>
        <div className={`flex column center ${route === "home" ? "col-primary" : ""}`} onClick={() => {
          setRoute("home");
          navigate("/home");
        }}>
          <i className="fa-solid fa-house-chimney" ></i>
          <p>Home</p>
        </div>
        <div className={`flex column center ${route === "network" ? "col-primary" : ""}`} onClick={() => {
          setRoute("network");
          navigate("/network");
        }}>
          <i className="fa-solid fa-user-group"></i>
          <p>My Network</p>
        </div>
        <div className={`flex column center ${route === "job" ? "col-primary" : ""}`} onClick={() => {
          setRoute("job");
          navigate("/job");
        }}>
          <i className="fa-solid fa-briefcase"></i>
          <p>Jobs</p>
        </div>
        <div className={`flex column center ${route === "profile" ? "col-primary" : ""}`} onClick={() => {
          setRoute("profile");
          navigate("/profile");
        }}>
          {/* {image && <img src={URL.createObjectURL(image)} alt="profile" />} */}
          <i className="fa-solid fa-user"></i>
          <p>Me</p>
        </div>
      </nav>
    </header>
  )
}

export default Header