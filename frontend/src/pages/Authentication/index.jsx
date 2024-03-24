import React from "react"
import { useState } from "react"
import Signup from "./components/signup"
import Login from "./components/login"
import "../../styles/common/utilities.css"
import "./style.css"


const Authentication = () => {
  const [isLogin, setIsLogin] = useState(true)
  const [incorrect, setIncorrect] = useState(false)
  const [error, setError] = useState("User Already Exists")
  const [credentials, setCredentials] = useState({fName: "", lName: "", email: "",password: "", confPassword: ""})
    
  const handleInputChange = (e, field) => {
    setCredentials({ ...credentials, [field]: e.target.value })
  }
  


  const validateSignup = async () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const { fName, lName, email, password, confPassword} = credentials
    const checkEmail = regex.test(email)
    switch (true) {
      case !fName || !lName || !email || !password || !confPassword:
          setIncorrect(true)
          setError("All Fields Are required")
          break;
      case !checkEmail:
          setIncorrect(true)
          setError("Invalid Email Address")
          break;
      case password.length < 6:
          setIncorrect(true)
          setError("Password is Too Short")
          break;
      case password !== confPassword:
          setIncorrect(true)
          setError("Passwords Don't Match")
          break;
      default:

        const formData = new FormData
        formData.append("f_name", fName.toLowerCase())
        formData.append("l_name", lName.toLowerCase())
        formData.append("email", email.toLowerCase())
        formData.append("password", password.toLowerCase())

        try {
          const response = await fetch(
            "http://127.0.0.1/LinkedIn-clone/backend/signup.php",{
              method: "POST",
              body: formData
            }
          );
          // console.log(response);
          const data = await response.json()
          // console.log(data)

          if(data.status !== "success"){
            setIncorrect(true)
            setError("User Already Exists")
          }else{
            setIncorrect(false)
          }

        } catch (error) {
          console.error(error)
        }
          break;
    }
  }

  return(
    <div className="flex center auth">
      {isLogin ?(
        <Login 
        setIsLogin = {setIsLogin} 

        ></Login>
      ):(
        <Signup 
        setIsLogin = {setIsLogin}
        handleInputChange = {handleInputChange}
        validateSignup = {validateSignup}
        incorrect = {incorrect}
        setIncorrect = {setIncorrect}
        error = {error}
        setError = {setError}
        credentials = {credentials}
        setCredentials = {setCredentials}
        ></Signup>
      )}
      

    </div>
  )
}

export default Authentication