import {useState, useEffect} from 'react';
import Product from './Product.jsx';
import './css/product.css';
import filter from './../assets/filter.svg'
const API_URL = 'https://dummyjson.com/products'
const ProductPage = (token) => {
	const [searchTerm, setSearchTerm] = useState("");
	const [products, setProducts] = useState("");
const [Open, setOpen] = useState(0);
	  useEffect(() => {
    searchProducts(searchTerm);
  }, [searchTerm]);
   const searchProducts = async (title) => {
    const response = await fetch(`${API_URL}/search?q=${searchTerm}`);
    const data = await response.json();

    setProducts(data);
  }; 
  // console.log(products.products.length);
	return(
	<>
	
	<div className = "search-bar"><input type = "text"value ={searchTerm} onChange ={(e) =>setSearchTerm(e.target.value)} placeholder = "Search for Products"/>
	<button className = "filter" onClick = {() =>{setOpen(!Open)}}><img src = {filter} height = {50}
	width = {50} /></button>
		{Open?(<div className = "menu-box">
			<div className = "menu"><h3>Sort by</h3>
		<button className = "menu-item" onClick = {()=>{products.products.sort((firstproduct, secondproduct) => firstproduct.price-secondproduct.price); setOpen(!Open);}}>Price: low to high</button>
			<button className = "menu-item"onClick = {()=>{products.products.sort((firstproduct, secondproduct) => secondproduct.price-firstproduct.price); setOpen(!Open);}}>Price: high to low</button>
			<button className = "menu-item"onClick = {()=>{products.products.sort((firstproduct, secondproduct) => secondproduct.discount-firstproduct.discount); setOpen(!Open);}}>Dicount: high to low</button>
			<button className = "menu-item"onClick = {()=>{products.products.sort((firstproduct, secondproduct) => secondproduct.rating-firstproduct.rating); setOpen(!Open);}}>Rating: high to low</button>
			</div>
			</div>):(<p></p>)}
	</div>
	
	{
	  products?
	   (<div className="container">
	   
	   {products.products.map((product)=>(
	   <Product product={product} />
	   ))}
	   </div>
	   ):
	   (
	<div className="Empty"><h2>loading...</h2>
	</div>
	)
   }
	
	
	</>
	)
	
}
export default ProductPage;