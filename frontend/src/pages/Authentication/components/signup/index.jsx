import "../../../../styles/common/utilities.css"
import "../../../../styles/common/colors.css"
import "./style.css"


const Signup = () => {
  return(
    <div className="flex column center auth-warapper">
      <h2 className="col-primary">LinkedIn</h2>
      <input type="text" placeholder="First Name"/>
      <input type="text" placeholder="Last Name"/>
      <input type="text" placeholder="Example@email.com"/>
      <input type="password" placeholder="Password"/>
      <input type="password" placeholder="Confirm-Password"/>
      <p className="incorrect red invisible">User Already Exists</p>
      <button className="bg-primary bold">Signup</button>
      <p>Already have an account? <span className="col-primary bold">Login</span></p>
    </div>
  )
}

export default Signup