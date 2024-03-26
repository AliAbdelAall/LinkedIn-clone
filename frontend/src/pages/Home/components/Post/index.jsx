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
        <button className='follow-btn white bold bg-primary'>Follow</button>
      </div>
      <p>{`${content}`}</p>
      {postImage && <img className='post-img' src={postImage} alt="postImage" />} 

    </div>
  )
}

export default Post