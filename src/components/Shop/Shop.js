import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Products/Product';
import './Shop.css';
const Shop = () => {
	// Slice data from fakeData Array
	const first10 = fakeData.slice(0, 10);
	// Store first 10 products from fakeData
	const [products, setProducts] = useState(first10);
	// Figure Out Items Ordered value
	const [cart, setCart] = useState([]);
	// add to cart button handler method
	const handleAddProduct = (product) => {
		const newCart = [...cart, product];
		setCart(newCart);
	};
	return (
		<div className='shop-container'>
			<div className='product-container'>
				{products.map((product) => (
					<Product
						product={product}
						handleAddProduct={handleAddProduct}></Product>
				))}
			</div>
			<div className='cart-container'>
				<Cart cart={cart}></Cart>
			</div>
		</div>
	);
};

export default Shop;
