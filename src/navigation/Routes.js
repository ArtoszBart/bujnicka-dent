import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import DentalSurgery from '../components/pages/services/DentalSurgery';
import Joints from '../components/pages/services/Joints';
import Prosthodontics from '../components/pages/services/Prosthodontics';
import Loading from '../components/Loading';
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
					<React.Suspense fallback={<Loading />}>
						<MainPage />
					</React.Suspense>
				}
			/>
			<Route
				path='/o-nas'
				element={
					<React.Suspense fallback={<Loading />}>
						<AboutPage />
					</React.Suspense>
				}
			/>
			<Route
				exact
				path='/oferta'
				element={
					<React.Suspense fallback={<Loading />}>
						<OfferPage />
					</React.Suspense>
				}
			/>
			<Route
				exact
				path='/cennik'
				element={
					<React.Suspense fallback={<Loading />}>
						<Prices />
					</React.Suspense>
				}
			/>
			<Route
				exact
				path='/certyfikaty'
				element={
					<React.Suspense fallback={<Loading />}>
						<Certificates />
					</React.Suspense>
				}
			/>
			<Route
				exact
				path='/czesto-zadawane-pytania'
				element={
					<React.Suspense fallback={<Loading />}>
						<Faq />
					</React.Suspense>
				}
			/>
			<Route
				exact
				path='/kontakt'
				element={
					<React.Suspense fallback={<Loading />}>
						<Contact />
					</React.Suspense>
				}
			/>
			<Route
				exact
				path='/umow-wizyte'
				element={
					<React.Suspense fallback={<Loading />}>
						<Appointment />
					</React.Suspense>
				}
			/>

			<Route
				exact
				path='/oferta/stomatologia-estetyczna'
				element={
					<React.Suspense fallback={<Loading />}>
						<AestheticDentistry />
					</React.Suspense>
				}
			/>
			<Route
				exact
				path='/oferta/stomatologia-zachowawcza'
				element={
					<React.Suspense fallback={<Loading />}>
						<ConservativeDentistry />
					</React.Suspense>
				}
			/>
			<Route
				exact
				path='/oferta/chirurgia-stomatoligiczna'
				element={
					<React.Suspense fallback={<Loading />}>
						<DentalSurgery />
					</React.Suspense>
				}
			/>
			<Route
				exact
				path='/oferta/wizyta-diagnostyczna'
				element={
					<React.Suspense fallback={<Loading />}>
						<Diagnostics />
					</React.Suspense>
				}
			/>
			<Route
				exact
				path='/oferta/stomatologia-cyfrowa'
				element={
					<React.Suspense fallback={<Loading />}>
						<DigitalDentistry />
					</React.Suspense>
				}
			/>
			<Route
				exact
				path='/oferta/endodoncja'
				element={
					<React.Suspense fallback={<Loading />}>
						<Endodontics />
					</React.Suspense>
				}
			/>
			<Route
				exact
				path='/oferta/implanty'
				element={
					<React.Suspense fallback={<Loading />}>
						<Implants />
					</React.Suspense>
				}
			/>
			<Route
				exact
				path='/oferta/leczenie-stawow-skroniowo-zuchwowych'
				element={
					<React.Suspense fallback={<Loading />}>
						<Joints />
					</React.Suspense>
				}
			/>
			<Route
				exact
				path='/oferta/inlay-onlay-overlay-endokorony'
				element={
					<React.Suspense fallback={<Loading />}>
						<InlayOnlay />
					</React.Suspense>
				}
			/>
			<Route
				exact
				path='/oferta/periodontologia'
				element={
					<React.Suspense fallback={<Loading />}>
						<Periodontics />
					</React.Suspense>
				}
			/>
			<Route
				exact
				path='/oferta/profilaktyka'
				element={
					<React.Suspense fallback={<Loading />}>
						<Prevention />
					</React.Suspense>
				}
			/>
			<Route
				exact
				path='/oferta/protetyka'
				element={
					<React.Suspense fallback={<Loading />}>
						<Prosthodontics />
					</React.Suspense>
				}
			/>

			<Route
				exact
				path='/polityka-prywatnosci'
				element={
					<React.Suspense fallback={<Loading />}>
						<PrivacyPolicy />
					</React.Suspense>
				}
			/>
			<Route
				path='/*'
				element={
					<React.Suspense fallback={<Loading />}>
						<NotFound />
					</React.Suspense>
				}
			/>
		</Routes>
	);
};
export default AppRoutes;
