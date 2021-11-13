import React, { useEffect, useState } from 'react';
import { getDatabaseCart } from '../../utilities/databaseManager';

const Review = () => {
	const [cart, setCart] = useState([]);
	useEffect(() => {
		const saveCart = getDatabaseCart();
		const productKeys = Object.keys(saveCart);
		const counts = Object.values(saveCart);
		// const counts = productKeys.map(key => saveCart([key]));
		console.log(productKeys);
		console.log(counts);
		console.log(saveCart);
	});
	return (
		<div>
			<h1>Review is coming soon</h1>
		</div>
	);
};

export default Review;
