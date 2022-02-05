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
import Contact from './components/pages/Contact';

import AestheticDentistry from './components/pages/services/AestheticDentistry';
import ConservativeDentistry from './components/pages/services/ConservativeDentistry';
import DentalSurgery from './components/pages/services/DentalSurgery';
import Diagnostics from './components/pages/services/Diagnostics';
import Endodontics from './components/pages/services/Endodontics';
import Implants from './components/pages/services/Implants';
import Joints from './components/pages/services/Joints';
import OnlayInlay from './components/pages/services/OnlayInlay';
import Periodontics from './components/pages/services/Periodontics';
import Prevention from './components/pages/services/Prevention';
import Prosthodontics from './components/pages/services/Prosthodontics';

import NotFound from './components/pages/NotFound';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path='/' element={<MainPage />} />
        <Route exact path='/about' element={<AboutPage />} />
        <Route exact path='/offer' element={<OfferPage />} />
        <Route exact path='/prices' element={<Prices />} />
        <Route exact path='/faq' element={<NotFound />} />
        <Route exact path='/certificates' element={<NotFound />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/appointment' element={<NotFound />} />

        <Route exact path='/offer/aesthetic-dentistry' element={<AestheticDentistry />} />
        <Route exact path='/offer/conservative-dentistry' element={<ConservativeDentistry />} />
        <Route exact path='/offer/dental-surgery' element={<DentalSurgery />} />
        <Route exact path='/offer/diagnostics' element={<Diagnostics />} />
        <Route exact path='/offer/endodontics' element={<Endodontics />} />
        <Route exact path='/offer/implants' element={<Implants />} />
        <Route exact path='/offer/joints' element={<Joints />} />
        <Route exact path='/offer/onlay-inlay' element={<OnlayInlay />} />
        <Route exact path='/offer/periodontics' element={<Periodontics />} />
        <Route exact path='/offer/prevention' element={<Prevention />} />
        <Route exact path='/offer/prosthodontics' element={<Prosthodontics />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
