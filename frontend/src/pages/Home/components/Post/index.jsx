import React, { useState } from 'react'
import "../../../../styles/common/utilities.css"
import "./style.css"
import profile from "../../../../assests/profile.jpg"

const Post = ({firstName, lastName, userProfile, content, postImage}) => {
  return (
    <div className='flex column post-wrapper'>
      <div className='flex space-between'>
        <div className='flex align-center poster-info'>
          <img className='profile-img' src={userProfile} alt="profileImage" />
          <p className='bold'>{`${firstName} ${lastName}`}</p>
        </div>
        <button className='follow-btn white bold bg-primary'>Follow</button>
      </div>
      <p>{`${content}`}</p>
      {postImage && <img className='post-img' src={postImage} alt="postImage" />} 

    </div>
  )
}

export default Post