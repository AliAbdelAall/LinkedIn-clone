import "../../../../styles/common/utilities.css"
import "../../../../styles/common/colors.css"
import "./style.css"
import { useState, useEffect } from "react"


const Signup = () => {
  const [incorrect, setIncorrect] = useState(false)
  const [error, setError] = useState("User Already Exists")
  const [credentials, setCredentials] = useState({fName: "", lName: "", email: "",password: "", confPassword: ""})
    
  const validatePassword = (password, confPassword) => {
    if (password.length < 6){
      setIncorrect(true)
      setError("Password is Too Short")
      return true
    }else{
      if (password.length !== confPassword.length){
        setIncorrect(true)
        setError("Passwords Doesn't match")
        return true
      }
    return false
  }

  return(
    <div className="flex column center auth-warapper">
      <h2 className="col-primary">LinkedIn</h2>
      <input type="text" placeholder="First Name" onChange={(e) => setCredentials({...credentials, fName: e.target.value})}/>
      <input type="text" placeholder="Last Name" onChange={(e) => setCredentials({...credentials, lName: e.target.value})}/>
      <input type="text" placeholder="Example@email.com" onChange={(e) => setCredentials({...credentials, email: e.target.value})}/>
      <input type="password" placeholder="Password" onChange={(e) => setCredentials({...credentials, password: e.target.value})}/>
      <input type="password" placeholder="Confirm-Password" onChange={(e) => setCredentials({...credentials, confPassword: e.target.value})}/>
      <p className={`incorrect red ${ incorrect ? "" : "invisible" }`}>{`${error}`}</p>
      <button className="bg-primary bold" onClick={validSignup}>Signup</button>
      <p>Already have an account? <span className="col-primary bold">Login</span></p>
    </div>
  )
}

export default Signup