import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Contact from './pages/Contact';
import Signup from './pages/Signup';

import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

export default function App() {
  return (
    <BrowserRouter>
    
      <Header />

      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="*" element={<h2>Wrong path 404 💩</h2>} />
      </Routes>

      <Footer />

    </BrowserRouter>
  );
}
