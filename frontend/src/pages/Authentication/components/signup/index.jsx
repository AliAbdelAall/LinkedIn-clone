import "../../../../styles/common/utilities.css"
import "../../../../styles/common/colors.css"
import "./style.css"
import { useState, useEffect } from "react"

const Signup = () => {
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
    <div className="flex column center auth-warapper">
      <h2 className="col-primary">LinkedIn</h2>
      <input type="text" placeholder="First Name" onChange={(e) => handleInputChange(e, "fName")}/>

      <input type="text" placeholder="Last Name" onChange={(e) => handleInputChange(e, "lName")}/>

      <input type="text" placeholder="Example@email.com" onChange={(e) => handleInputChange(e, "email")}/>

      <input type="password" placeholder="Password" onChange={(e) => handleInputChange(e, "password")}/>

      <input type="password" placeholder="Confirm-Password" onChange={(e) => handleInputChange(e, "confPassword")}/>

      <p className={`incorrect red ${ incorrect ? "" : "invisible" }`}>{`${error}`}</p>

      <button className="bg-primary bold" onClick={validateSignup}>Signup</button>

      <p>Already have an account? <span className="col-primary bold">Login</span></p>
    </div>
  )
}

export default Signup