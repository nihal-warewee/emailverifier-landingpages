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
import CTA from './components/CTA';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import LogoCloud from './components/LogoCloud';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';


// Home page component
const HomePage = () => (
  <main className="min-h-screen">
  
  <Hero />
  <HowItWorks />
  <Features />
  <Pricing />
  <LogoCloud />
  <Testimonials />
  <CTA />
  
</main>



);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path='/privacy-policy' element={<PrivacyPage />} />
          <Route path='/terms' element={<TermsPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;