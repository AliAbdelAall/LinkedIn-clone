import "../../../../styles/common/utilities.css"
import "../../../../styles/common/colors.css"
import "../signup/style.css"
import { useState } from "react"

const Login = () => {
  // const [first, setfirst] = useState(second)
  return(
    <div className="flex column center auth-warapper">
      <h2 className="col-primary">LinkedIn</h2>
      <input type="text" placeholder="Example@email.com"/>
      <input type="password" placeholder="Password"/>
      <p className="incorrect red invisible">Incorrect Username or Password</p>
      <button className="bg-primary bold">Login</button>
      <p>Don't have an account? <span className="col-primary bold">Signup</span></p>
    </div>
  )
}

export default Login