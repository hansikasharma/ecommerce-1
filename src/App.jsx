import { useState,useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter,Route,Routes,Link } from 'react-router-dom';
import HomePage from './components/HomePage.jsx'
import Signin from './components/Signin.jsx'
import Dashboard from './components/Dashboard.jsx'
import { AuthContext } from './context/user.jsx'
function App() {
 const { user, token } = useContext(AuthContext)

  return (
    <>
		<BrowserRouter>
      
	  <Routes>
	  <Route path = "/" element = {<HomePage />} />
	  <Route path = "/dashboard" element = {user?<Dashboard />:<Signin /> }/>
	 
	  </Routes>
      
    </BrowserRouter>
	 
    </>
  )
}

export default App
