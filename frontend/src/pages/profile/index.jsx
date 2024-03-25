import React from 'react'
import profile from "../../assests/profile.jpg"

const Profile = () => {

  const loadUserInfo = async () => {
    const [userId, setUserId] = useState()
    const [userInfo, setUserInfo] = useState()

    setUserId(localStorage.getItem("userId"))
    try{
      const response =  await fetch(
        `http://127.0.0.1/LinkedIn-clone/backend/getUserInfo.php?user_id=${userId}`,{
          method: "GET"
        }
      );
      const user = await response.json()
      if(user.status === "success"){
        setUserInfo(user.user_info)

      }
    }catch(error){
      console.error(error)
    }
  }

  useEffect(()=>{
    loadUserInfo ()

  },[])


  return (
    <div >
      <div>
        <img src={profile} alt="" />
        <p>{`${firstName} ${lastName}`}</p>
      </div>
      <div>
        <p>{`Email: ${email}`}</p>
        <p>{`Experience: ${experience}`}</p>
        <p>{`Skills: ${skills}`}</p>
        <p>{`Bio: ${bio}`}</p>
      </div>
    </div>
  )
}

export default Profile