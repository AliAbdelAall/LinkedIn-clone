import "../../../../styles/common/utilities.css"
import "../../../../styles/common/colors.css"
import "../signup/style.css"

const Login = () => {
  return(
    <div className="flex column center auth-warapper">
      <h2 className="col-primary">LinkedIn</h2>
      <input type="text" placeholder="Example@email.com"/>
      <input type="password" placeholder="Password"/>
      <p className="incorrect red invisible">Incorrect Username or Password</p>
      <button className="bg-primary bold">Signup</button>
      <p>Don't have an account? <span className="col-primary bold">Login</span></p>
    </div>
  )
}

export default Login