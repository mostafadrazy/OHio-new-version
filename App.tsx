import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import SellNow from './components/SellNow';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';
import FAQ from './components/FAQ';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import CookiePolicy from './components/CookiePolicy';
import CityLanding from './components/CityLanding';
import WhyUs from './components/WhyUs';
import Contact from './components/Contact';

const ScrollToTop = () => {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    // If we have a hash, attempt to scroll to the element
    if (hash) {
      const id = hash.replace('#', '');
      const timer = window.setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
        }
      }, 100); // Small delay to ensure render
      return () => window.clearTimeout(timer);
    } else {
      // Otherwise, scroll to top instantly
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    }
  }, [pathname, hash, key]);

  return null;
};

const AppContent: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden font-sans text-gray-900 bg-white selection:bg-essa-yellow selection:text-black">
      <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <ScrollToTop />
      <main id="main-content" tabIndex={-1} className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sell" element={<SellNow />} />
          <Route path="/why-us" element={<WhyUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/cookies" element={<CookiePolicy />} />

          {/* Local SEO Landing Pages */}
          <Route path="/sell-my-house-dayton" element={<CityLanding cityKey="dayton" />} />
          <Route path="/sell-my-house-cincinnati" element={<CityLanding cityKey="cincinnati" />} />
          <Route path="/sell-my-house-cleveland" element={<CityLanding cityKey="cleveland" />} />
          <Route path="/sell-my-house-columbus" element={<CityLanding cityKey="columbus" />} />
        </Routes>
      </main>
    </div>
  );
}

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
