import './css/product-box.css';
import cartAdd from './../assets/cart-plus.svg'
import {useState, useEffect, useContext} from 'react';
import { CartContext } from './../context/cart.jsx'
const Product = (product) => {
	const[cartOpen, setCartOpen] = useState(0);
	const { cartItems, addToCart } = useContext(CartContext)
return (
	<>
	{!product ? 
		(<p>Not Found</p>)
		:(<div className = "product-box"><h3>{product.product.title}</h3>
			<div className = "pro-img"><img src = {product.product.thumbnail} /></div>
		<div className = "rating"><h4>Rating: {product.product.rating}</h4><h4> Stock: {product.product.stock}</h4></div>
		<div className= "price"><h3>$ {product.product.price}</h3></div>
		<div className = "add-cart-box" onClick = {() =>{addToCart(product.product)}}><img src = {cartAdd} className = "add-cart" /></div>
			
			{cartOpen?(<p>Hello</p>):(<p></p>)}
				</div>)
		}
	</>
	)
};
export default Product;