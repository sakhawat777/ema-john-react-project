import React, { useState, useEffect } from 'react';
import fakeData from '../../fakeData';
import {
	addToDatabaseCart,
	getDatabaseCart,
} from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Product from '../Products/Product';
import './Shop.css';
import { Link } from 'react-router-dom';
const Shop = () => {
	// Slice data from fakeData Array
	const first10 = fakeData.slice(0, 10);
	// Store first 10 products from fakeData
	const [products, setProducts] = useState(first10);
	// Figure Out Items Ordered value
	const [cart, setCart] = useState([]);
	useEffect(() => {
		const savedCart = getDatabaseCart();
		// console.log(savedCart);
		const productKeys = Object.keys(savedCart);
		// const counts = Object.values(saveCart);
		const previousCart = productKeys.map((existingKey) => {
			const product = fakeData.find((pd) => pd.key === existingKey);
			product.quantity = savedCart[existingKey];
			return product;
		});
		// console.log(productKeys);
		// console.log(cartProducts);
		setCart(previousCart);
	}, []);
	// add to cart button handler method
	const handleAddProduct = (product) => {
		const toBeAddedKey = product.key;
		const sameProduct = cart.find((pd) => pd.key === toBeAddedKey);
		let count = 1;
		let newCart;
		if (sameProduct) {
			count = sameProduct.quantity + 1;
			sameProduct.quantity = count;
			const others = cart.filter((pd) => pd.ke !== toBeAddedKey);
			newCart = [...others, sameProduct];
		} else {
			product.quantity = 1;
			newCart = [...cart, product];
		}

		setCart(newCart);

		// Local Storage method
		addToDatabaseCart(product.key, count);
	};

	return (
		<div className='twin-container'>
			<div className='product-container'>
				{products.map((product) => (
					<Product
						showAddToCart={true}
						product={product}
						handleAddProduct={handleAddProduct}
						key={product.key}></Product>
				))}
			</div>
			<div className='cart-container'>
				<Cart cart={cart}>
					<Link to='/review'>
						<button className='add-cart-btn'>Review Order</button>
					</Link>
				</Cart>
			</div>
		</div>
	);
};

export default Shop;
