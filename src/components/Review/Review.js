import React, { useEffect, useState } from 'react';
import {
	getDatabaseCart,
	processOrder,
	removeFromDatabaseCart,
} from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from './ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import happyImg from '../../images/giphy.gif';
const Review = () => {
	const [cart, setCart] = useState([]);
	const [orderPlaced, setOrderPlaced] = useState(false);
	const handlePlaceOrder = () => {
		// console.log('Order Placed');
		setCart([]);
		setOrderPlaced(true);
		processOrder();
	};
	const handleRemoveItem = (productKey) => {
		// console.log('Remove Clicked', productKey);
		const newCart = cart.filter((pd) => pd.key !== productKey);
		setCart(newCart);
		removeFromDatabaseCart(productKey);
	};
	useEffect(() => {
		const savedCart = getDatabaseCart();
		const productKeys = Object.keys(savedCart);
		// const counts = Object.values(saveCart);
		const cartProducts = productKeys.map((key) => {
			const product = fakeData.find((pd) => pd.key === key);
			product.quantity = savedCart[key];
			return product;
		});
		// console.log(productKeys);
		// console.log(cartProducts);
		setCart(cartProducts);
	}, []);
	let thankYou;
	if (orderPlaced) {
		thankYou = <img src={happyImg} alt='' />;
	}
	return (
		<div className='twin-container'>
			<div className='product-container'>
				{cart.map((pd) => (
					<ReviewItem
						product={pd}
						handleRemoveItem={handleRemoveItem}
						key={pd.key}></ReviewItem>
				))}
				{thankYou}
			</div>
			<div className='cart-container'>
				<Cart cart={cart}>
					<button onClick={handlePlaceOrder} className='add-cart-btn'>
						Place Order
					</button>
				</Cart>
			</div>
		</div>
	);
};

export default Review;
