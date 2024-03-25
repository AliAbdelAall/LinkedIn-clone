import React, { useState } from 'react'
import "../../../../styles/common/utilities.css"
import "./style.css"
import profile from "../../../../assests/profile.jpg"

const Post = ({firstName, lastName, userProfile, content, postImage}) => {
  return (
    <div className='flex column post-wrapper'>
      <div className='flex space-between'>
        <div className='flex'>
          <i className="fa-solid fa-user"></i>
          <p>{`${firstName} ${lastName}`}</p>
        </div>
        <button>follow</button>
      </div>
      <p>{`${content}`}</p>
      {profile && <img className='post-img' src={profile} alt="postImage" />} 

    </div>
  )
}

export default Post