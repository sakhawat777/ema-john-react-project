import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import Shop from './components/Shop/Shop';
import NoMatch from './components/NoMatch/NoMatch';
import ProductDetails from './components/ProductDetails/ProductDetails';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<div>
			<Header></Header>
			{/* <Shop></Shop> */}

			<main>
				<BrowserRouter>
					<Routes>
						<Route path='/shop' element={<Shop />} />
						<Route path='review' element={<Review />} />
						<Route path='inventory' element={<Inventory />} />
						<Route path='/' element={<Shop />} />
						<Route
							// :productKey - URL Parameter (Dynamic URL Parameter)
							path='/product/:productKey'
							element={<ProductDetails />}
						/>
						<Route path='/*' element={<NoMatch />} />
					</Routes>
				</BrowserRouter>
			</main>
		</div>
	);
}

export default App;
