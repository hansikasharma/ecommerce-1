import { useContext } from 'react'
import { CartContext } from './../context/cart.jsx'
const Cart = () =>{
	const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } = useContext(CartContext)
	return(
		<>
		<div className = "cart">Your cart
		{cartItems?(cartItems.map((item)=> (<div className = "cart-item"><h4>{item.title}</h4><img src = {item.thumbnail} className = "cart-image"/>
			<div className = "cart-item-info"><h4>Quantity</h4>{item.quantity}</div>
			<div className = "cart-item-info"><h4>Price</h4> ${item.price}</div>
			<button onClick = {()=>{addToCart(item)}}><h1>+</h1></button>
			<button onClick = {()=>{removeFromCart(item)}}><h1>-</h1></button>
		</div>)))
			:
			(<p>Loading Carts</p>)}
		{cartItems.length > 0? (<div className = "cart-item" ><button onClick = {()=>{clearCart()}} > Clear </button>
				<h3><b>Your total is: ${getCartTotal()}</b></h3>
				<button>Checkout</button>
				</div>
				):(<p>Your Cart Is empty</p>)}
		</div>
		</>
		)
}
export default Cart;