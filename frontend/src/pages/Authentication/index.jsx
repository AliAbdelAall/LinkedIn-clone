import Signup from "./components/signup"
import Login from "./components/login"
import "../../styles/common/utilities.css"
import "./style.css"

const Authentication = () => {
  return(
    <div className="flex center auth">
      <div>
        <Signup></Signup>
        <Login></Login>
      </div>
    </div>
  )
}

export default Authentication