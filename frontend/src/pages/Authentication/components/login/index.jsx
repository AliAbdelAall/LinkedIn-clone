import "../../../../styles/common/utilities.css"
import "../../../../styles/common/colors.css"
import "../signup/style.css"
import { useState } from "react"

const Login = ({setIsLogin}) => {
  // const [first, setfirst] = useState(second)
  return(
    <div className="flex column center auth-warapper">
      <h2 className="col-primary">LinkedIn</h2>
      <input type="text" placeholder="Example@email.com"  onChange={(e) => handleInputChange(e, "email")}/>
      <input type="password" placeholder="Password"  onChange={(e) => handleInputChange(e, "password")}/>
      <p className="incorrect red invisible">Incorrect Username or Password</p>
      <button className="bg-primary bold">Login</button>
      <p>Don't have an account? <span className="col-primary bold" onClick={()=>{setIsLogin(false)}}>Signup</span></p>
    </div>
  )
}

export default Login