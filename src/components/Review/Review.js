import React, { useEffect, useState } from 'react';
import { getDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from './ReviewItem/ReviewItem';
const Review = () => {
	const [cart, setCart] = useState([]);
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
				<ReviewItem product={pd} key={pd.key}></ReviewItem>
			))}
		</div>
	);
};

export default Review;
