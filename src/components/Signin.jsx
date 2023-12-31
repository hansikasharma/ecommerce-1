import {useState, useContext} from 'react'
import { AuthContext } from './../context/user.jsx'
const Signin = () => {
	const { getUser, user } = useContext(AuthContext)
	const [email, setEmail] = useState("");
	const [err, setErr] = useState(0);
	const [pwd, setPwd] = useState("");
	const handleSubmit = (event) => {
		event.preventDefault();
		getUser(email,pwd);
		!user?(setErr(1)):(setErr(0))
	};

return (<form onSubmit = {handleSubmit}>
	<label> Username:
<input type = "text"value ={email} onChange ={(e) =>setEmail(e.target.value)} className = "form-input"/></label>
<label>Password: <input type = "password"value ={pwd} onChange ={(e) => setPwd(e.target.value)} className = "form-input" /> </label>
		<button type = "submit">Submit</button>
		{setTimeout (() => {err?(<p>Incorrect username or password</p>):(<p></p>)},5000)}
	</form>)
}
export default Signin