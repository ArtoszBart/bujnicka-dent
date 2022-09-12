import './styles/main.scss';
import React, { lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/fragments/Header';
import Footer from './components/fragments/Footer';
import ScrollToTop from './helpers/scrollToTop';
import UpButton from './components/fragments/UpButton';

const MainPage = lazy(() => import('./components/pages/MainPage'));
const AboutPage = lazy(() => import('./components/pages/About'));
const OfferPage = lazy(() => import('./components/pages/Offer'));
const Prices = lazy(() => import('./components/pages/Prices'));
const Certificates = lazy(() => import('./components/pages/Certificates'));
const Faq = lazy(() => import('./components/pages/Faq'));
const Contact = lazy(() => import('./components/pages/Contact'));
const Appointment = lazy(() => import('./components/pages/Appointment'));

const AestheticDentistry = lazy(() => import('./components/pages/services/AestheticDentistry'));
const ConservativeDentistry = lazy(() => import('./components/pages/services/ConservativeDentistry'));
const DentalSurgery = lazy(() => import('./components/pages/services/DentalSurgery'));
const Diagnostics = lazy(() => import('./components/pages/services/Diagnostics'));
const DigitalDentistry = lazy(() => import('./components/pages/services/DigitalDentistry'));
const Endodontics = lazy(() => import('./components/pages/services/Endodontics'));
const Implants = lazy(() => import('./components/pages/services/Implants'));
const Joints = lazy(() => import('./components/pages/services/Joints'));
const InlayOnlay = lazy(() => import('./components/pages/services/InlayOnlay'));
const Periodontics = lazy(() => import('./components/pages/services/Periodontics'));
const Prevention = lazy(() => import('./components/pages/services/Prevention'));
const Prosthodontics = lazy(() => import('./components/pages/services/Prosthodontics'));

const PrivacyPolicy = lazy(() => import('./components/pages/PrivacyPolicy'));
const NotFound = lazy(() => import('./components/pages/NotFound'));
const UnderConstruction = lazy(() => import('./components/pages/UnderConstruction'));

function App() {
	return (
		<Router>
			<ScrollToTop />
			<Header />
			<Routes>
				<Route
					exact
					path='/'
					element={
						<React.Suspense fallback={<>...</>}>
							<MainPage />
						</React.Suspense>
					}
				/>
				<Route
					path='/about'
					element={
						<React.Suspense fallback={<>...</>}>
							<AboutPage />
						</React.Suspense>
					}
				/>
				<Route
					exact
					path='/offer'
					element={
						<React.Suspense fallback={<>...</>}>
							<OfferPage />
						</React.Suspense>
					}
				/>
				<Route
					exact
					path='/prices'
					element={
						<React.Suspense fallback={<>...</>}>
							<Prices />
						</React.Suspense>
					}
				/>
				<Route
					exact
					path='/certificates'
					element={
						<React.Suspense fallback={<>...</>}>
							<Certificates />
						</React.Suspense>
					}
				/>
				<Route
					exact
					path='/faq'
					element={
						<React.Suspense fallback={<>...</>}>
							<Faq />
						</React.Suspense>
					}
				/>
				<Route
					exact
					path='/contact'
					element={
						<React.Suspense fallback={<>...</>}>
							<Contact />
						</React.Suspense>
					}
				/>
				<Route
					exact
					path='/appointment'
					element={
						<React.Suspense fallback={<>...</>}>
							<UnderConstruction />
						</React.Suspense>
					}
				/>
				<Route
					exact
					path='/artoszbart'
					element={
						<React.Suspense fallback={<>...</>}>
							<Appointment />
						</React.Suspense>
					}
				/>

				<Route
					exact
					path='/offer/aesthetic-dentistry'
					element={
						<React.Suspense fallback={<>...</>}>
							<AestheticDentistry />
						</React.Suspense>
					}
				/>
				<Route
					exact
					path='/offer/conservative-dentistry'
					element={
						<React.Suspense fallback={<>...</>}>
							<ConservativeDentistry />
						</React.Suspense>
					}
				/>
				<Route
					exact
					path='/offer/dental-surgery'
					element={
						<React.Suspense fallback={<>...</>}>
							<DentalSurgery />
						</React.Suspense>
					}
				/>
				<Route
					exact
					path='/offer/diagnostics'
					element={
						<React.Suspense fallback={<>...</>}>
							<Diagnostics />
						</React.Suspense>
					}
				/>
				<Route
					exact
					path='/offer/digital-dentistry'
					element={
						<React.Suspense fallback={<>...</>}>
							<DigitalDentistry />
						</React.Suspense>
					}
				/>
				<Route
					exact
					path='/offer/endodontics'
					element={
						<React.Suspense fallback={<>...</>}>
							<Endodontics />
						</React.Suspense>
					}
				/>
				<Route
					exact
					path='/offer/implants'
					element={
						<React.Suspense fallback={<>...</>}>
							<Implants />
						</React.Suspense>
					}
				/>
				<Route
					exact
					path='/offer/joints'
					element={
						<React.Suspense fallback={<>...</>}>
							<Joints />
						</React.Suspense>
					}
				/>
				<Route
					exact
					path='/offer/inlay-onlay'
					element={
						<React.Suspense fallback={<>...</>}>
							<InlayOnlay />
						</React.Suspense>
					}
				/>
				<Route
					exact
					path='/offer/periodontics'
					element={
						<React.Suspense fallback={<>...</>}>
							<Periodontics />
						</React.Suspense>
					}
				/>
				<Route
					exact
					path='/offer/prevention'
					element={
						<React.Suspense fallback={<>...</>}>
							<Prevention />
						</React.Suspense>
					}
				/>
				<Route
					exact
					path='/offer/prosthodontics'
					element={
						<React.Suspense fallback={<>...</>}>
							<Prosthodontics />
						</React.Suspense>
					}
				/>

				<Route
					exact
					path='/privacy-policy'
					element={
						<React.Suspense fallback={<>...</>}>
							<PrivacyPolicy />
						</React.Suspense>
					}
				/>
				<Route
					path='/*'
					element={
						<React.Suspense fallback={<>...</>}>
							<NotFound />
						</React.Suspense>
					}
				/>
			</Routes>

			<UpButton />
			<Footer />
		</Router>
	);
}

export default App;
