import React, { useState } from 'react'
import "../../../../styles/common/utilities.css"
import "./style.css"
import profile from "../../../../assests/profile.jpg"

const Posts = (firstName,lastName, content, postImage) => {
  return (
    <div className='flex column post-wrapper'>
      <div className='flex space-between'>
        <div className='flex'>
          <i class="fa-solid fa-user"></i>
          <p>username</p>
        </div>
        <button>follow</button>
      </div>
      <p>dwasdwa</p>
      {profile && <img className='post-img' src={profile} alt="postImage" />} 

    </div>
  )
}

export default Posts