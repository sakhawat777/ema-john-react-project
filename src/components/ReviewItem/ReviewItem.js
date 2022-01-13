import React from 'react';
import '../ReviewItem/ReviewItem.css';
const ReviewItem = (props) => {
	console.log(props);
	const { name, quantity, key, price } = props.product;

	return (
		<div className='review-item'>
			<h1 className='product-name'>{name}</h1>
			<p>Quantity: {quantity}</p>
			<p>
				<small>${price}</small>
			</p>
			<br />
			<button
				className='add-cart-btn'
				onClick={() => props.handleRemoveItem(key)}>
				Remove
			</button>
		</div>
	);
};

export default ReviewItem;
