import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';
import { Link } from 'react-router-dom';

const Product = (props) => {
	// console.log(props);
	// Assign value of props.product
	const { img, name, seller, price, stock, key } = props.product;
	return (
		<div className='product'>
			<div>
				{/* <img src={props.product.img} alt='' /> */}
				<img src={img} alt='' />
			</div>
			<div>
				{/* <h4 className='product-name'>{props.product.name}</h4> */}
				<h4 className='product-name'>
					<Link to={'/product/' + key}>{name}</Link>
				</h4>
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
				{/* Conditional Element or (Button) Conditional DOM or React Conditional render : props.showAddToCart === true or props.showAddToCart && or used if-else   */}
				{props.showAddToCart && (
					<button
						className='add-cart-btn'
						onClick={() => props.handleAddProduct(props.product)}>
						<FontAwesomeIcon icon={faShoppingCart} /> add to cart
					</button>
				)}
			</div>
		</div>
	);
};

export default Product;
