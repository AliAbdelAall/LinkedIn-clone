import React, { useState, useEffect } from 'react'
import "./style.css"
import "../../styles/common/utilities.css"
import Header from './components/Header'
import Posting from './components/Posting'
import Post from './components/Post'

const Home = ({userId}) => {
  console.log(userId)
  const [image, setImage] = useState(null)
  const [posts, setPosts] = useState(null)
  const [postImage, setPostImage] = useState(null)
  const [postInput, setPostInput] = useState("")
  const [incorrect, setIncorrect] = useState(false)
  const [error, setError] = useState("")
  
  const loadPosts = async () => {
    try{
      const response =  await fetch(
        "http://127.0.0.1/LinkedIn-clone/backend/getPosts.php",{
          method: "GET"
        }
      );
      const postsList = await response.json()
      if(postsList.status === "success"){
        setPosts(postsList.posts)
        console.log(posts)
      }
    }catch(error){
      console.error(error)
    }
  }

  useEffect(()=>{
    loadPosts ()
  },[])
  

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    console.log(file.type)
    if(file){
      if (file.type === "image/png" ||
        file.type === "image/jpg" ||
        file.type === "image/jpeg"){
        setIncorrect(false)
      
        console.log(file)

        const reader = new FileReader();
        reader.onloadend = () => {
          const result = reader.result
          setImage(result)
          setPostImage(result)
          
        };
        reader.readAsDataURL(file);
        console.log(image)
        console.log(postImage)
      }else{
        setError("File is not an image");
        setIncorrect(true);
      }
    } 
  }

  const validatePost = async () => {
    if (!postInput || !image){
      setError("Fill all fields")
      setIncorrect(true)
    }else{
      setIncorrect(false)
      try {
        const formData = new FormData
        formData.append("content", postInput)
        formData.append("post_image", image)
        formData.append("user_id", userId)
       
        
        const response =  await fetch(
          "http://127.0.0.1/LinkedIn-clone/backend/savePost.php",{
            method: "POST",
            body: formData
          }
        );
        const data = await response.json()
        console.log(data)
        if(data.status !== "success"){
          setIncorrect(true)
          setError("Failed to upload")
          setImage(null)
          setPostInput("")
          setError("")
          
          
        }else{
          setError("failed to post")
          setIncorrect(false)
          setImage(null);
          setPostInput("");
          setError("")
          
        }
      } catch (error) {
        console.error(error)
      }
    }
    
  }

  return (
    <div>
      <Header></Header>
      <div className='flex center column'>
        <Posting 
        image={image}
        handleImageChange={handleImageChange}
        validatePost={validatePost}
        incorrect={incorrect}
        error={error}
        setPostInput={setPostInput}
        postInput={postInput}
        ></Posting>
        <Post 

        ></Post>
      </div>
      {/* <div>
         {posts.map(post => (
          <Post 
          key ={post.user_id} 
          firstName={post.first_name} 
          firstName={post.first_name} 
          content = {post.content}
          image = {post.post_image} 
          />
        ))}
      </div> */}
    </div>
  )
}

export default Home
