import "../../../../styles/common/utilities.css"
import "../../../../styles/common/colors.css"
import "./style.css"
import { useState, useEffect } from "react"


const Signup = () => {
  const [incorrect, setIncorrect] = useState(false)
  const [error, setError] = useState("User Already Exists")
  const [credentials, setCredentials] = useState({fName: "", lName: "", email: "",password: "", confPassword: ""})
    
  return(
    <div className="flex column center auth-warapper">
      <h2 className="col-primary">LinkedIn</h2>
      <input type="text" placeholder="First Name" onChange={(e) => setCredentials({...credentials, fName: e.target.value})}/>

      <input type="text" placeholder="Last Name" onChange={(e) => setCredentials({...credentials, lName: e.target.value})}/>

      <input type="text" placeholder="Example@email.com" onChange={(e) => setCredentials({...credentials, email: e.target.value})}/>

      <input type="password" placeholder="Password" onChange={(e) => setCredentials({...credentials, password: e.target.value})}/>

      <input type="password" placeholder="Confirm-Password" onChange={(e) => setCredentials({...credentials, confPassword: e.target.value})}/>

      <p className={`incorrect red ${ incorrect ? "" : "invisible" }`}>{`${error}`}</p>

      <button className="bg-primary bold" onClick={() => {
          const { fName, lName, email, password, confPassword} = credentials
          const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
          const checkEmail = regex.test(email)
          switch (true) {
            case !fName || !lName || !email || !password || !confPassword:
                setIncorrect(true);
                setError("All Fields Are required");
                break;
            case !checkEmail:
                setIncorrect(true);
                setError("Invalid Email Address");
                break;
            case password.length < 6:
                setIncorrect(true);
                setError("Password is Too Short");
                break;
            case password !== confPassword:
                setIncorrect(true);
                setError("Passwords Don't Match");
                break;
            default:
              
                break;
        }
        }
        
      }>Signup</button>

      <p>Already have an account? <span className="col-primary bold">Login</span></p>
    </div>
  )
}

export default Signup