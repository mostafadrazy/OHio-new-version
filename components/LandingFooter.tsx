import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Clock, Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';
import AddressInput, { sellAddressUrl, type PropertyAddress } from './AddressInput';
import { motion } from 'framer-motion';
import { useHomeReducedMotion } from './HomeMotion';
import { FadeUp } from './landing-motion';
import WordHighlight from './WordHighlight';
import Logo from './Logo';
import { homeEase } from './home-motion';

const locations = [
  { city: 'Dayton', note: 'Primary market & operations', to: '/sell-my-house-dayton' },
  { city: 'Cincinnati', note: 'Serving Hamilton County', to: '/sell-my-house-cincinnati' },
  { city: 'Cleveland', note: 'Cuyahoga & surrounding', to: '/sell-my-house-cleveland' },
  { city: 'Columbus', note: 'Franklin County', to: '/sell-my-house-columbus' },
];
const menu = [
  { name: 'Construction', to: '/#construction' },
  { name: 'Insurance claims', to: '/#insurance' },
  { name: 'Investments', to: '/#investments' },
  { name: 'About us', to: '/why-us' },
  { name: 'FAQ', to: '/faq' },
];
const socials = [
  { label: 'Instagram', Icon: Instagram },
  { label: 'Facebook', Icon: Facebook },
  { label: 'LinkedIn', Icon: Linkedin },
  { label: 'X (Twitter)', Icon: Twitter },
];

/** The closing cash-offer card with the house photo on the right, then the home page's own footer. */
export default function LandingFooter() {
  const reduced = useHomeReducedMotion();
  const navigate = useNavigate();
  const [address, setAddress] = useState('');
  const [selected, setSelected] = useState<PropertyAddress | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!address.trim()) {
      inputRef.current?.setCustomValidity('Please enter your property address.');
      inputRef.current?.reportValidity();
      return;
    }
    navigate(sellAddressUrl(address, selected));
  };

  return <>
    <section className="lp-section-tight" id="sell-property" aria-labelledby="cta-title">
      <div className="lp-container">
        <div className="lp-cta">
          <span className="lp-cta-glow" aria-hidden="true" />
          <div className="lp-cta-copy">
            <FadeUp>
              <span className="lp-cta-label">No obligation • Free analysis</span>
              <h2 id="cta-title">Unlock your home’s <WordHighlight>true value</WordHighlight>.</h2>
              <p>Skip the open houses, repairs, and fees. Share your address and get a fair cash offer for your property.</p>
            </FadeUp>
            <FadeUp delay={.08}>
              <form onSubmit={submit} className="lp-cta-form">
                <label htmlFor="footer-property-address" className="lp-sr-only">Property address</label>
                <MapPin aria-hidden="true" />
                <AddressInput ref={inputRef} id="footer-property-address" value={address} onChange={value => { setAddress(value); setSelected(null); }} onSelect={setSelected} />
                <button type="submit">Get Started <ArrowUpRight aria-hidden="true" /></button>
              </form>
            </FadeUp>
          </div>
          <motion.div className="lp-cta-media" aria-hidden="true"
            initial={reduced ? false : { opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: .3 }}
            transition={{ duration: 1.1, ease: homeEase }}>
            <img src="https://res.cloudinary.com/dmnqlruhl/image/upload/v1772107522/Whisk_e7ce7s2f4048217c92594d3e2fa728a01dr_azfphp.png" alt="" referrerPolicy="no-referrer" loading="lazy" />
          </motion.div>
        </div>
      </div>
    </section>

    <footer className="lp-footer-wrap" id="contact">
      <div className="lp-footer">
        <div className="lp-footer-top">
          <h2>Let’s build what’s next, <WordHighlight>together</WordHighlight>.</h2>
          <Link to="/contact" className="lp-btn lp-btn-yellow lp-btn-sm">Get started <ArrowRight aria-hidden="true" /></Link>
        </div>
        <div className="lp-footer-grid">
          <div className="lp-footer-brand">
            <Link to="/" className="group inline-flex mb-5" aria-label="Essa Estates home"><Logo light textSize="text-2xl" iconSize="h-8 w-auto" /></Link>
            <p>Rebuilding homes with greater possibilities. Construction, renovation, and estate investments in Ohio.</p>
            <div className="lp-socials">
              {socials.map(({ label, Icon }) => <a key={label} href="#" aria-label={label}><Icon aria-hidden="true" /></a>)}
            </div>
          </div>
          <div>
            <h3>Contact</h3>
            <ul className="lp-footer-contact">
              <li><Mail aria-hidden="true" /><a href="mailto:Info@essaestates.com">Info@essaestates.com</a></li>
              <li><Phone aria-hidden="true" /><a href="tel:+19375209357">+1 (937) 520-9357</a></li>
              <li><Clock aria-hidden="true" /><span>Mon – Sat · 8am – 6pm</span></li>
            </ul>
          </div>
          <div>
            <h3>Locations</h3>
            <ul className="lp-footer-locations">
              {locations.map(({ city, to }) => <li key={city}><Link to={to}>{city}, Ohio</Link></li>)}
            </ul>
          </div>
          <div>
            <h3>Menu</h3>
            <ul className="lp-footer-menu">{menu.map(link => <li key={link.name}><Link to={link.to}>{link.name}</Link></li>)}</ul>
          </div>
        </div>
        <div className="lp-footer-bottom">
          <p>© {new Date().getFullYear()} Essa Estates. All rights reserved.</p>
          <nav aria-label="Legal"><Link to="/privacy">Privacy Policy</Link><Link to="/terms">Terms of Service</Link><Link to="/cookies">Cookie Settings</Link></nav>
        </div>
        <p className="lp-footer-wordmark" aria-hidden="true">Essa Estates<i /></p>
      </div>
    </footer>
  </>;
}
