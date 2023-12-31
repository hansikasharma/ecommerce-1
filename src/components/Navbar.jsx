import './css/navcss.css'
import profile from './../assets/profile-circle.svg'
import card from './../assets/cart.svg'
import {useState, useEffect} from 'react';
import Cart from './Cart.jsx'
import { Link } from 'react-router-dom'
import { AuthContext } from './../context/user.jsx'
const API_URL = 'https://dummyjson.com/carts'

const Navbar = (user) => {
	
	
	const[cartOpen, setCartOpen] = useState(0);
	
	
	
 console.log(localStorage)
	
	return (
		<>
		<div className = "nav-box">
		<ul>
			<li>{user.user.firstName}Mart</li>
	<li>{!user.user?(<button>Sign in</button>):(<p><Link to = "/dashboard"> <img src = {user.user.image} height = {40} width = {20} className = "dash-img" /></Link></p>)}</li>
	
	<li >{!user.user?(<p></p>):(<div><img src = {card} height = {50} width = {50} onClick = {()=>{setCartOpen(!cartOpen);getCart(user.user.id);}} />
		{cartOpen?<Cart  />:(<p></p>)}</div>) }</li>
		</ul>
	
		</div>
		</>
		
		)
}
export default Navbar;