import React from 'react'
import "./style.css"
import Header from './components/Header'
import Posting from './components/Posting'
import Post from './components/Post'

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Posting></Posting>
      <Post></Post>
      {/* <div>
         {postsList.map(post => (
          <Post user ={post.user} imag = {post.image} content = {post}/>
        ))}
      </div> */}
    </div>
  )
}

export default Home

