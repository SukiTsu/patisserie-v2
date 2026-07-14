import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Vitrine from './pages/Vitrine';
import Ateliers from './pages/Ateliers';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vitrine" element={<Vitrine />} />
        <Route path="/ateliers" element={<Ateliers />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
