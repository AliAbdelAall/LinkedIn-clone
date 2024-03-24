import React, { useState } from 'react'
import "./style.css"
import "../../styles/common/utilities.css"
import Header from './components/Header'
import Posting from './components/Posting'
import Post from './components/Post'

const Home = () => {
  const [image, setImage] = useState(null)
  const [blob, setBlob] = useState("")
  const [postInput, setPostInput] = useState("")
  const [incorrect, setIncorrect] = useState(false)
  const [error, setError] = useState("")

  const handleTextInputChange = (e) => {
    const input = e.target.value
    setPostInput(input)
 }




  return (
    <div>
      <Header></Header>
      <div className='flex center column'>
        <Posting 
        image={image}
        setImage={setImage}
        handleImageChange={handleImageChange}
        handleTextInputChange={handleTextInputChange}
        validatePost={validatePost}
        incorrect={incorrect}
        setIncorrect={setIncorrect}
        error={error}
        setError={setError}
        ></Posting>
        <Post></Post>
      </div>
      {/* <div>
         {postsList.map(post => (
          <Post user ={post.user} imag = {post.image} content = {post}/>
        ))}
      </div> */}
    </div>
  )
}

export default Home

