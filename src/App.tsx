import React, { Suspense } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import LazyLoader from 'components/Loading/LazyLoader';
import AppRoutes from 'routes/Routes';

function App() {
	return (
		<BrowserRouter>
			<Suspense fallback={<LazyLoader />}>
				<AppRoutes />
			</Suspense>
		</BrowserRouter>
	);
}

export default App;
