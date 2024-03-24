import React, { useState } from 'react'
import "./style.css"
import "../../../../styles/common/utilities.css"
import "../../../../styles/common/colors.css"
const Posting = ({ image, setImage, handleImageChange, handleTextInputChange, validatePost, incorrect, setIncorrect, error, setError}) => {
  

  return (
    <div className='flex column post-inputs-wrapper'>
      <span className={`incorrect red ${incorrect? "" : "invisible"}`}>{`${error}`}</span>
      <div className='flex center post-inputs'>
        
        <input className='text-input' type="text" placeholder='Start a post' onChange={handleTextInputChange}/>       
        <div className='flex column file-input-button'>
          <label htmlFor="file-input" >Upload Image</label>
          <input className='file-input' type="file" placeholder='Uplaod image' id='file-input'onChange={handleImageChange}/>
        </div>
      </div>
      <div >
        {image && (
          <img
          className='post-img'
          src={image} 

          alt="uploaded-image" />
        )}
      </div>
      <button className='post-btn bg-primary white bold' onClick={validatePost}>POST</button>
    </div>
  )
}

export default Posting