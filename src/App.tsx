import React, { Suspense } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import LazyLoader from 'components/Loading/LazyLoader';
import ErrorBoundary from 'components/Error/ErrorBoundary/ErrorBoundary';
import AppRoutes from 'routes/Routes';
import ScrollToTop from 'components/ScrollToTop/ScrollToTop';

function App() {
	return (
		<BrowserRouter>
			<Suspense fallback={<LazyLoader />}>
				<ErrorBoundary>
					<ScrollToTop>
						<AppRoutes />
					</ScrollToTop>
				</ErrorBoundary>
			</Suspense>
		</BrowserRouter>
	);
}

export default App;
