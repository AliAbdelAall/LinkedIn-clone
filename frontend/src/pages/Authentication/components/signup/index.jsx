import "../../../../styles/common/utilities.css"
import "../../../../styles/common/colors.css"
import "./style.css"


const Signup = () => {
  const [incorrect, setIncorrect] = useState(false)
  const [error, setError] = useState("User Already Exists")
  const [credentials, setCredentials] = useState({f_name: "", l_name, email: "",password: "", confPassword: ""})
    

  return(
    <div className="flex column center auth-warapper">
      <h2 className="col-primary">LinkedIn</h2>
      <input type="text" placeholder="First Name" onChange={(e) => setCredentials({...credentials, f_name: e.target.value})}/>
      <input type="text" placeholder="Last Name" onChange={(e) => setCredentials({...credentials, l_name: e.target.value})}/>
      <input type="text" placeholder="Example@email.com" onChange={(e) => setCredentials({...credentials, email: e.target.value})}/>
      <input type="password" placeholder="Password" onChange={(e) => setCredentials({...credentials, password: e.target.value})}/>
      <input type="password" placeholder="Confirm-Password" onChange={(e) => setCredentials({...credentials, conf_password: e.target.value})}/>
      <p className={`incorrect red ${ incorrect ? "" : "invisible" }`}>{`${error}`}</p>
      <button className="bg-primary bold">Signup</button>
      <p>Already have an account? <span className="col-primary bold">Login</span></p>
    </div>
  )
}

export default Signup