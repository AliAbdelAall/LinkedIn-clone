import Signup from "./components/signup"
import "../../styles/common/utilities.css"
import "./style.css"

const Authentication = () => {
  return(
    <div className="flex center auth">
      <div>
        <Signup></Signup>
      </div>
    </div>
  )
}

export default Authentication