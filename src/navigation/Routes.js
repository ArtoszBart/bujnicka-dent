import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import DentalSurgery from '../components/pages/services/DentalSurgery';
import Joints from '../components/pages/services/Joints';
import Prosthodontics from '../components/pages/services/Prosthodontics';
const MainPage = lazy(() => import('../components/pages/MainPage'));
const AboutPage = lazy(() => import('../components/pages/About'));
const OfferPage = lazy(() => import('../components/pages/Offer'));
const Prices = lazy(() => import('../components/pages/Prices'));
const Certificates = lazy(() => import('../components/pages/Certificates'));
const Faq = lazy(() => import('../components/pages/Faq'));
const Contact = lazy(() => import('../components/pages/Contact'));

const AestheticDentistry = lazy(() =>
	import('../components/pages/services/AestheticDentistry')
);
const ConservativeDentistry = lazy(() =>
	import('../components/pages/services/ConservativeDentistry')
);
const Diagnostics = lazy(() =>
	import('../components/pages/services/Diagnostics')
);
const DigitalDentistry = lazy(() =>
	import('../components/pages/services/DigitalDentistry')
);
const Endodontics = lazy(() =>
	import('../components/pages/services/Endodontics')
);
const Implants = lazy(() => import('../components/pages/services/Implants'));
const InlayOnlay = lazy(() =>
	import('../components/pages/services/InlayOnlay')
);
const Periodontics = lazy(() =>
	import('../components/pages/services/Periodontics')
);
const Prevention = lazy(() =>
	import('../components/pages/services/Prevention')
);
const Appointment = lazy(() => import('../components/pages/Appointment'));

const PrivacyPolicy = lazy(() => import('../components/pages/PrivacyPolicy'));
const NotFound = lazy(() => import('../components/pages/NotFound'));
// const UnderConstruction = lazy(() =>
// 	import('../components/pages/UnderConstruction')
// );
const AppRoutes = () => {
	return (
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
				path='/o-nas'
				element={
					<React.Suspense fallback={<>...</>}>
						<AboutPage />
					</React.Suspense>
				}
			/>
			<Route
				exact
				path='/oferta'
				element={
					<React.Suspense fallback={<>...</>}>
						<OfferPage />
					</React.Suspense>
				}
			/>
			<Route
				exact
				path='/cennik'
				element={
					<React.Suspense fallback={<>...</>}>
						<Prices />
					</React.Suspense>
				}
			/>
			<Route
				exact
				path='/certyfikaty'
				element={
					<React.Suspense fallback={<>...</>}>
						<Certificates />
					</React.Suspense>
				}
			/>
			<Route
				exact
				path='/czesto-zadawane-pytania'
				element={
					<React.Suspense fallback={<>...</>}>
						<Faq />
					</React.Suspense>
				}
			/>
			<Route
				exact
				path='/kontakt'
				element={
					<React.Suspense fallback={<>...</>}>
						<Contact />
					</React.Suspense>
				}
			/>
			<Route
				exact
				path='/umow-wizyte'
				element={
					<React.Suspense fallback={<>...</>}>
						<Appointment />
					</React.Suspense>
				}
			/>

			<Route
				exact
				path='/oferta/stomatologia-estetyczna'
				element={
					<React.Suspense fallback={<>...</>}>
						<AestheticDentistry />
					</React.Suspense>
				}
			/>
			<Route
				exact
				path='/oferta/stomatologia-zachowawcza'
				element={
					<React.Suspense fallback={<>...</>}>
						<ConservativeDentistry />
					</React.Suspense>
				}
			/>
			<Route
				exact
				path='/oferta/chirurgia-stomatoligiczna'
				element={
					<React.Suspense fallback={<>...</>}>
						<DentalSurgery />
					</React.Suspense>
				}
			/>
			<Route
				exact
				path='/oferta/wizyta-diagnostyczna'
				element={
					<React.Suspense fallback={<>...</>}>
						<Diagnostics />
					</React.Suspense>
				}
			/>
			<Route
				exact
				path='/oferta/stomatologia-cyfrowa'
				element={
					<React.Suspense fallback={<>...</>}>
						<DigitalDentistry />
					</React.Suspense>
				}
			/>
			<Route
				exact
				path='/oferta/endodoncja'
				element={
					<React.Suspense fallback={<>...</>}>
						<Endodontics />
					</React.Suspense>
				}
			/>
			<Route
				exact
				path='/oferta/implanty'
				element={
					<React.Suspense fallback={<>...</>}>
						<Implants />
					</React.Suspense>
				}
			/>
			<Route
				exact
				path='/oferta/leczenie-stawow-skroniowo-zuchwowych'
				element={
					<React.Suspense fallback={<>...</>}>
						<Joints />
					</React.Suspense>
				}
			/>
			<Route
				exact
				path='/oferta/inlay-onlay-overlay-endokorony'
				element={
					<React.Suspense fallback={<>...</>}>
						<InlayOnlay />
					</React.Suspense>
				}
			/>
			<Route
				exact
				path='/oferta/periodontologia'
				element={
					<React.Suspense fallback={<>...</>}>
						<Periodontics />
					</React.Suspense>
				}
			/>
			<Route
				exact
				path='/oferta/profilaktyka'
				element={
					<React.Suspense fallback={<>...</>}>
						<Prevention />
					</React.Suspense>
				}
			/>
			<Route
				exact
				path='/oferta/protetyka'
				element={
					<React.Suspense fallback={<>...</>}>
						<Prosthodontics />
					</React.Suspense>
				}
			/>

			<Route
				exact
				path='/polityka-prywatnosci'
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
	);
};
export default AppRoutes;
