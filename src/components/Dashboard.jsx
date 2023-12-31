import {useContext} from 'react'
import {Link} from 'react-router-dom'
import { AuthContext } from './../context/user.jsx'
import './css/dashboard.css'

const Dashboard = () =>{
	const {user} = useContext(AuthContext)
	return(
		<>
		<Link to = "/"><button className = "dash-btn">Back</button></Link>
		<div className = "dash-main">
		<img src = {user.image} className = "dash-img" height = {50} width = {50}/>
		<div className = "dash-item"><h1>{user.firstName} {user.lastName}</h1></div>
		<div className = "dash-item"><h3>Email</h3>{user.email}</div>
		<div className = "dash-item"><h3>username</h3>{user.username}</div>
		<div className = "dash-item"><h3>gender</h3>{user.gender}</div>
		
		</div>
		</>
		)
}
export default Dashboard