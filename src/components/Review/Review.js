import React, { useEffect, useState } from 'react';
import {
	getDatabaseCart,
	removeFromDatabaseCart,
} from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from './ReviewItem/ReviewItem';
const Review = () => {
	const [cart, setCart] = useState([]);
	const handleRemoveItem = (productKey) => {
		// console.log('Remove Clicked', productKey);
		const newCart = cart.filter((pd) => pd.key !== productKey);
		setCart(newCart);
		removeFromDatabaseCart(productKey);
	};
	useEffect(() => {
		const saveCart = getDatabaseCart();
		const productKeys = Object.keys(saveCart);
		// const counts = Object.values(saveCart);
		const cartProducts = productKeys.map((key) => {
			const product = fakeData.find((pd) => pd.key === key);
			product.quantity = saveCart[key];
			return product;
		});
		// console.log(productKeys);
		// console.log(cartProducts);
		setCart(cartProducts);
	}, []);
	return (
		<div>
			<h1>Review Items: {cart.length}</h1>
			{cart.map((pd) => (
				<ReviewItem
					product={pd}
					handleRemoveItem={handleRemoveItem}
					key={pd.key}></ReviewItem>
			))}
		</div>
	);
};

export default Review;
