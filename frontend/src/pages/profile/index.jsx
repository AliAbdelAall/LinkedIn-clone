import React, {useState, useEffect} from 'react'
import profile from "../../assests/profile.jpg"
import "./style.css"

const Profile = () => {
  // const [userId, setUserId] = useState("")
  const [userInfo, setUserInfo] = useState({})
  const userId = localStorage.getItem("userId")


  const loadUserInfo = async () => {

    
    console.log(userId)
    try{
      const response =  await fetch(
        `http://127.0.0.1/LinkedIn-clone/backend/getUserInfo.php?user_id=${userId}`,{
          method: "GET"
        }
      );
      const user = await response.json()
      if(user.status === "success"){
        setUserInfo(user.user_info)
        console.log(user.user_info)

      }
    }catch(error){
      console.error(error)
    }
  }

  useEffect(()=>{
    loadUserInfo ()
  },[])


  return (
    <div className='flex center column profile-wrapper'>
      <div className='flex column align-center image-wrapper'>
        <img src={profile} alt="profile" />
        <p>{`${userInfo.first_name} ${userInfo.last_name}`}</p>
      </div>
      <div className='flex column info-wrapper'>
        <p>{`Email: ${userInfo.email}`}</p>
        <p>{`Experience: ${userInfo.experience}`}</p>
        <p>{`Skills: ${userInfo.skills}`}</p>
        <p>{`Bio: ${userInfo.bio}`}</p>
      </div>
    </div>
  )
}

export default Profile