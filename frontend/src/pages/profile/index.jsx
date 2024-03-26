import React, {useState, useEffect} from 'react'
import profile from "../../assests/profile.jpg"
import "./style.css"
import "../../styles/common/utilities.css"

const Profile = ({userId}) => {
  const [image, setImage] = useState(null)
  const [isOpen, setIsOpen] = useState(false)
  const [experience, setExperience] = useState(false)
  const [skills, setSkills] = useState(false)
  const [bio, setBio] = useState(false)
  const [userInfo, setUserInfo] = useState({})

  const loadUserInfo = async () => {
    try{
      const response =  await fetch(
        `http://127.0.0.1/LinkedIn-clone/backend/getUserInfo.php?user_id=${userId}`,{
          method: "GET"
        }
      );
      const user = await response.json()
      if(user.status === "success"){
        setUserInfo(user.user_info)
        setExperience(user.user_info.experience)
        setSkills(user.user_info.skills)
        setBio(user.user_info.bio)
        setImage((user.user_info.profile_image))
        console.log(user.user_info)

      }
    }catch(error){
      console.error(error)
    }
  }

const editProfile = () => {
  try{
    const result = fetch
  }catch(error){
    console.error(error)
  }
}


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
          
        };
        reader.readAsDataURL(file);
        console.log(image)
      }
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

      <button className='edit-btn white bg-primary bold' onClick={()=> setIsOpen(true)}>Edit</button>
      <div className={`flex center pupup ${isOpen ? "" : "hidden"}`}>
        <div className='flex column edit-popup'>
          <input 
              className='profile-input' 
              type="file" 
              placeholder='Uplaod image' 
              id='profile-input'
              onChange={handleImageChange}
              />
          
          <input 
            className='info-input' type="text" 
            placeholder='Experience'
            value={experience}
            onChange={(e)=> setExperience(e.target.value)}
            /> 

          <input 
            className='info-input' type="text" 
            placeholder='Skills' 
            value={skills}
            onChange={(e)=> setSkills(e.target.value)}
            /> 
              
          <input 
            className='info-input' type="text" 
            placeholder='Bio'
            value={bio} 
            onChange={(e)=> setBio(e.target.value)}
            />    
          <div className='flex space-between'>
            <button className='edit-btn white bg-primary bold' on>Confirm</button>
            <button className='edit-btn white bg-primary bold' onClick={(e)=> setIsOpen(false)}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile