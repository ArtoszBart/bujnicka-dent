import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Header from './components/fragments/Header';
import Footer from './components/fragments/Footer';

import MainPage from './components/pages/MainPage';
import About from './components/pages/About';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path='/' element={<MainPage />} />
        <Route exact path='/about' element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
