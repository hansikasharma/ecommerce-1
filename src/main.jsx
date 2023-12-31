import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CartProvider } from './context/cart.jsx'
import { AuthProvider } from './context/user.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider>
    <CartProvider>
	<App />
    </CartProvider>
	</AuthProvider>
  </React.StrictMode>,
)
