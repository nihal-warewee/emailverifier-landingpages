import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

// Import page components
import FeaturesPage from './pages/Features';
import PricingPage from './pages/Pricing';
import APIPage from './pages/API';
import BlogPage from './pages/Blog';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';

// Home page component
const HomePage = () => (
  <>
    <Hero />
    <Features />
    <Pricing />
  </>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/api" element={<APIPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;