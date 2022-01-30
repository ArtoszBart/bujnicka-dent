import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Header from './components/fragments/Header';
import Footer from './components/fragments/Footer';

import MainPage from './components/pages/MainPage';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path='/' element={<MainPage />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/offer' element={<NotFound />} />
        <Route exact path='/price-list' element={<NotFound />} />
        <Route exact path='/curiosities' element={<NotFound />} />
        <Route exact path='/gallery' element={<NotFound />} />
        <Route exact path='/contact' element={<NotFound />} />
        <Route exact path='/appointment' element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
