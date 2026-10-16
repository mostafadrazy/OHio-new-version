import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { FadeUp } from './landing-motion';
import WordHighlight from './WordHighlight';

const strips = [
  { title: 'Layout planning', copy: 'Open up living areas, improve how you move through the house, and find room for more.', image: '/images/ai/layout-planning-ai-v1.webp' },
  { title: 'Major renovations', copy: 'Kitchens, bathrooms, and whole-house work, coordinated from the first plan to the final finish.', image: '/images/ai/renovated-kitchen-ai-v1.webp' },
  { title: 'Investor projects', copy: 'Renovations planned around the budget and the property’s next use—rent, sell, or hold.', image: '/images/ai/renovated-living-ai-v1.webp' },
  { title: 'Insurance rebuilds', copy: 'Structural repairs and roof replacements, planned as one coordinated rebuild.', image: '/images/ai/rebuilt-home-ai-v1.webp' },
];

/** 01 · A dark section: heading on the left, photo strips on the right that open on hover or focus. */
export default function LandingConstruction() {
  const [active, setActive] = useState(0);
  return <section className="lp-strips-section" id="construction" aria-labelledby="construction-title">
    <div className="lp-container lp-strips-grid">
      <div className="lp-strips-copy">
        <FadeUp><p className="lp-label-pill lp-label-pill-dark"><span aria-hidden="true" />Construction & renovation</p></FadeUp>
        <FadeUp delay={.05}><h2 id="construction-title">Renovations tailored to <WordHighlight>your property</WordHighlight>.</h2></FadeUp>
        <FadeUp delay={.1}><p>Most homes don’t need to be bigger—they need to work better. We start with the floor plan and build from there.</p></FadeUp>
        <FadeUp delay={.15}><Link to="/contact" className="lp-pill-btn">Plan your renovation <span className="lp-pill-btn-arrow"><ArrowUpRight aria-hidden="true" /></span></Link></FadeUp>
      </div>

      <FadeUp delay={.1} className="lp-strips">
        {strips.map((strip, index) => <button key={strip.title} type="button" className={`lp-strip${index === active ? ' is-open' : ''}`}
          aria-pressed={index === active} onClick={() => setActive(index)} onPointerEnter={() => setActive(index)} onFocus={() => setActive(index)}>
          <img src={strip.image} alt="" loading="lazy" />
          <span className="lp-strip-label">{strip.title}</span>
          <span className="lp-strip-detail">
            <strong>{strip.title}</strong>
            <span>{strip.copy}</span>
          </span>
        </button>)}
      </FadeUp>
    </div>
  </section>;
}
