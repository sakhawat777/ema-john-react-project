import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = (props) => {
	//console.log(props);
	// Assign value of props.product
	const { img, name, seller, price, stock } = props.product;
	return (
		<div className='product'>
			<div>
				{/* <img src={props.product.img} alt='' /> */}
				<img src={img} alt='' />
			</div>
			<div>
				{/* <h4 className='product-name'>{props.product.name}</h4> */}
				<h4 className='product-name'>{name}</h4>
				<br />
				<p>
					{/* <small>by: {props.product.seller}</small> */}
					<small>by: {seller}</small>
				</p>
				<p>
					{/* ${props.product.price} */}${price}
				</p>
				<p>
					<small>Only {stock} left in stock - order soon</small>
				</p>
				<button
					className='add-cart-btn'
					onClick={() => props.handleAddProduct(props.product)}>
					<FontAwesomeIcon icon={faShoppingCart} /> add to cart
				</button>
			</div>
		</div>
	);
};

export default Product;
