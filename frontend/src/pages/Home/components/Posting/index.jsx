import React, { useState } from 'react'
import "./style.css"
const Posting = ({ image, setImage, handleImageChange}) => {
  

  return (
    <div className='flex column post-inputs-wrapper'>
      <div className='flex center post-inputs'>
        <input className='text-input' type="text" placeholder='Start a post' />       
        <div className='flex column file-input-button'>
          <label htmlFor="file-input" >Upload Image</label>
          <input className='file-input' type="file" placeholder='Uplaod image' id='file-input'onChange={handleImageChange}/>
        </div>
      </div>
      <div>
        {image && (
          <img 
          className=''
          src={URL.createObjectURL(image)} 
          alt="uploaded-image" />
        )}
      </div>
      <button className='post-btn bg-primary white bold'>POST</button>
    </div>
  )
}

export default Posting