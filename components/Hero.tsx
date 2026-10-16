import { useHomeReducedMotion } from './HomeMotion';
import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Check, MapPin } from 'lucide-react';
import AddressInput, { sellAddressUrl, type PropertyAddress } from './AddressInput';
import { homeEase } from './home-motion';
import WordHighlight from './WordHighlight';

/** Full-width hero: the photograph edge to edge, the message and address bar on the darker left side. */
const Hero: React.FC = () => {
  const reduced = useHomeReducedMotion();
  const [address, setAddress] = useState('');
  const [selectedAddress, setSelectedAddress] = useState<PropertyAddress | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const navigate = useNavigate();

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] });
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', reduced ? '0%' : '14%']);

  const enter = (delay: number) => ({
    initial: reduced ? false as const : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: .9, delay: reduced ? 0 : delay, ease: homeEase },
  });

  const submitAddress = (event: React.FormEvent) => {
    event.preventDefault();
    if (!address.trim()) {
      inputRef.current?.setCustomValidity('Please enter your property address.');
      inputRef.current?.reportValidity();
      return;
    }
    navigate(sellAddressUrl(address, selectedAddress));
  };

  return (
    <section ref={sectionRef} className="lp-hero" aria-labelledby="home-title">
      <motion.div className="lp-hero-bg" style={{ y: imageY }} aria-hidden="true">
        <motion.img src="/images/ai/hero-ai-v1.webp" alt="" fetchPriority="high"
          initial={reduced ? false : { scale: 1.1 }} animate={{ scale: 1 }} transition={{ duration: 2.4, ease: homeEase }} />
      </motion.div>
      <div className="lp-hero-shade" aria-hidden="true" />

      <div className="lp-container lp-hero-inner">
        <div className="lp-hero-copy">
          <motion.p {...enter(.05)} className="lp-label-pill lp-label-pill-dark"><span aria-hidden="true" />Construction · Rebuilds · Investments</motion.p>
          <motion.h1 {...enter(.12)} id="home-title">Better homes, rebuilt by a <WordHighlight>local team</WordHighlight>.</motion.h1>
          <motion.p {...enter(.22)} className="lp-hero-lead">Renovations, insurance rebuilds and investment properties across Ohio—planned around the floor plan and built to be worth more.</motion.p>

          <motion.form {...enter(.32)} onSubmit={submitAddress} className="lp-hero-form">
            <label htmlFor="hero-property-address">Selling a property? Get a fair cash offer.</label>
            <div className="lp-hero-field">
              <MapPin aria-hidden="true" />
              <AddressInput ref={inputRef} id="hero-property-address" value={address} onChange={value => { setAddress(value); setSelectedAddress(null); }} onSelect={setSelectedAddress} />
              <button type="submit">Get my offer <ArrowRight aria-hidden="true" /></button>
            </div>
            <ul className="lp-hero-trust" aria-label="What to expect">
              {['No repairs', 'No fees', 'No obligation'].map(item => <li key={item}><Check aria-hidden="true" />{item}</li>)}
            </ul>
          </motion.form>
        </div>

        <motion.div {...enter(.45)} className="lp-hero-side">
          <div className="lp-hero-badge">
            <span className="lp-hero-badge-num">12+</span>
            <span className="lp-hero-badge-text">properties completed across Ohio</span>
          </div>
          <Link to="/#services" className="lp-pill-btn">See our services <span className="lp-pill-btn-arrow"><ArrowUpRight aria-hidden="true" /></span></Link>
        </motion.div>
      </div>
    </section>
  );
};
export default Hero;
