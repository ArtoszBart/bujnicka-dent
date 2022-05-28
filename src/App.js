import './styles/main.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Header from './components/fragments/Header';
import Footer from './components/fragments/Footer';

import MainPage from './components/pages/MainPage';
import AboutPage from './components/pages/About';
import OfferPage from './components/pages/Offer';
import Prices from './components/pages/Prices';
import Certificates from './components/pages/Certificates';
import Contact from './components/pages/Contact';
import Appointment from './components/pages/Appointment';

import AestheticDentistry from './components/pages/services/AestheticDentistry';
import ConservativeDentistry from './components/pages/services/ConservativeDentistry';
import DentalSurgery from './components/pages/services/DentalSurgery';
import Diagnostics from './components/pages/services/Diagnostics';
import DigitalDentistry from './components/pages/services/DigitalDentistry';
import Endodontics from './components/pages/services/Endodontics';
import Implants from './components/pages/services/Implants';
import Joints from './components/pages/services/Joints';
import InlayOnlay from './components/pages/services/InlayOnlay';
import Periodontics from './components/pages/services/Periodontics';
import Prevention from './components/pages/services/Prevention';
import Prosthodontics from './components/pages/services/Prosthodontics';

import PrivacyPolicy from './components/pages/PrivacyPolicy';
import NotFound from './components/pages/NotFound';
import ScrollToTop from './helpers/scrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route exact path='/' element={<MainPage />} />
        <Route exact path='/about' element={<AboutPage />} />
        <Route exact path='/offer' element={<OfferPage />} />
        <Route exact path='/prices' element={<Prices />} />
        <Route exact path='/certificates' element={<Certificates />} />
        <Route exact path='/faq' element={<NotFound />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/appointment' element={<Appointment />} />

        <Route exact path='/offer/aesthetic-dentistry' element={<AestheticDentistry />} />
        <Route exact path='/offer/conservative-dentistry' element={<ConservativeDentistry />} />
        <Route exact path='/offer/dental-surgery' element={<DentalSurgery />} />
        <Route exact path='/offer/diagnostics' element={<Diagnostics />} />
        <Route exact path='/offer/digital-dentistry' element={<DigitalDentistry />} />
        <Route exact path='/offer/endodontics' element={<Endodontics />} />
        <Route exact path='/offer/implants' element={<Implants />} />
        <Route exact path='/offer/joints' element={<Joints />} />
        <Route exact path='/offer/inlay-onlay' element={<InlayOnlay />} />
        <Route exact path='/offer/periodontics' element={<Periodontics />} />
        <Route exact path='/offer/prevention' element={<Prevention />} />
        <Route exact path='/offer/prosthodontics' element={<Prosthodontics />} />

        <Route exact path='/privacy-policy' element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
