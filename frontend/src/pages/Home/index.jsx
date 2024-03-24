import React, { useState } from 'react'
import "./style.css"
import "../../styles/common/utilities.css"
import Header from './components/Header'
import Posting from './components/Posting'
import Post from './components/Post'

const Home = () => {
  const [image, setImage] = useState(null)

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    setImage(file)
  }

  return (
    <div>
      <Header></Header>
      <div className='flex center column'>
        <Posting 
        image={image}
        setImage={setImage}
        handleImageChange={handleImageChange}
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

