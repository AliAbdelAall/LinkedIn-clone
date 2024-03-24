import React from 'react'
import "../../../../styles/common/utilities.css"
import "../../../../styles/common/colors.css"
import "./style.css"

const Header = () => {
  return (
    <header className='flex center header'>
      <div className='flex center linkedin-search-wrapper'>
        <i class="fa-brands fa-linkedin col-primary"></i>
        <div className='search-home gray'>
          <input type="text" placeholder = "Search"/>
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
      <nav className='flex center header-nav gray'>
        <div className='flex column center'>
          <i class="fa-solid fa-house-chimney"></i>
          <p>Home</p>
        </div>
        <div className='flex column center'>
          <i class="fa-solid fa-user-group"></i>
          <p>My Network</p>
        </div>
        <div className='flex column center'>
          <i class="fa-solid fa-briefcase"></i>
          <p>Jobs</p>
        </div>
        <div className='flex column center'>
          <i class="fa-solid fa-user"></i>
          <p>Me</p>
        </div>
      </nav>
    </header>
  )
}

export default Header