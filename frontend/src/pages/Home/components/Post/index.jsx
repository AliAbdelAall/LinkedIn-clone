import React, { useState } from 'react'
import "../../../../styles/common/utilities.css"
import "./style.css"

const Posts = (postImage) => {
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
      {postImage && <img src={postImage} alt="postImage" />} 

    </div>
  )
}

export default Posts