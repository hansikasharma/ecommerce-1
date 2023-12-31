import Navbar from './Navbar';
import './css/HomePage.css'
import {useState, useEffect, useContext} from 'react'
const API_URL = 'https://dummyjson.com/auth/login';
import ProductPage from './ProductPage.jsx';
import Signin from './Signin.jsx';
import { AuthContext } from './../context/user.jsx'


const HomePage = () =>
{
const { user, token } = useContext(AuthContext)
	
	
  
  
return (
	<>
	<Navbar user = {user}/>
	{!token?<Signin />:(<ProductPage token = {token} />)}
	</>
	
	)
}
export default HomePage;