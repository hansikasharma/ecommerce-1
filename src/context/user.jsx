import {createContext, useState, useEffect} from 'react'
export const AuthContext = createContext()
export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(localStorage.getItem("user") ? JSON.parse(localStorage.getItem('user')) : []);;
	useEffect(() => {
	
	localStorage.setItem("user", JSON.stringify(user))
}, [user])
		const getUser = async (email,pwd) => {
    const response = await fetch(`https://dummyjson.com/auth/login`,{
		method:'POST',
		headers:{'Content-Type': 'application/json'},
		body: JSON.stringify({
		username: email, //kminchelle
		password: pwd
		//0lelplR'
			})
		})
    const data = await response.json();
	setUser(data);
};
	
const token = user.token
return (
	<AuthContext.Provider
		value = {{
			user,
			token,
			getUser
			}}
			>
			{children}
		</AuthContext.Provider>
	)
}
	