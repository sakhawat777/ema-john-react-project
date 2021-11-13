import React from 'react';
import { useParams } from 'react-router';
import fakeData from '../../fakeData';
import Product from '../Products/Product';

const ProductDetails = () => {
	// We used 'useParams' hook here to access the dynamic pieces of the URL.
	const { productKey } = useParams();
	// use UseEffect when data load from server
	const product = fakeData.find((pd) => pd.key === productKey);
	console.log(product);
	return (
		<div>
			<h1>Product Details: ProductKey({productKey})</h1>
			<Product showAddToCart={false} product={product}></Product>
		</div>
	);
};

export default ProductDetails;
