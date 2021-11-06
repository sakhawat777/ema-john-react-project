import React from 'react';
// Arrow function of Cart.js
const Cart = (props) => {
	// Assign value of props
	const cart = props.cart;
	// Calculate Total Price of Products
	// let totalPrice = 0;
	// for (let i = 0; i < cart.length; i++) {
	// 	const product = cart[i];
	// 	totalPrice = totalPrice + product.price;
	// }

	// Calculate Total Price of Products
	const totalPrice = cart.reduce((total, product) => total + product.price, 0);
	// Calculate Shipping Cost
	let shipping = 0;
	if (totalPrice > 49) {
		shipping = 0;
	} else if (totalPrice > 24) {
		shipping = 4.99;
	} else if (totalPrice > 0) {
		shipping = 12.99;
	}
	// Tax calculate
	const tax = totalPrice / 7.5;
	// toFixed Number Format
	const formatNumber = (num) => {
		const precision = num.toFixed(2);
		return Number(precision);
	};
	return (
		<div>
			<h4>Oder Summary</h4>
			{/* <p>Items Ordered: {props.cart.length} </p> */}
			<p>Items Ordered: {cart.length} </p>
			<p>
				<small>Shipping Cost: {formatNumber(shipping)} </small>
			</p>
			<p>
				<small>Tax + VAT: {formatNumber(tax)}</small>
			</p>
			<p>Total Price: {formatNumber(totalPrice + shipping + tax)}</p>
		</div>
	);
};

export default Cart;
