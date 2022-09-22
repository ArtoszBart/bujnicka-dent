import './styles/main.scss';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/fragments/Header';
import Routes from './navigation/Routes';
import Footer from './components/fragments/Footer';
import ScrollToTop from './helpers/scrollToTop';
import UpButton from './components/fragments/UpButton';

function App() {
	return (
		<Router>
			<ScrollToTop />
			<Header />
			<Routes />

			<UpButton />
			<Footer />
		</Router>
	);
}

export default App;
