import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CalendarCheck, Eye, HandCoins, HardHat, LayoutPanelLeft, MapPin } from 'lucide-react';
import { FadeUp, RevealImage } from './landing-motion';
import WordHighlight from './WordHighlight';

const features = [
  { Icon: HardHat, title: 'In-house crew', copy: 'Our own crew plus vetted subcontractors on every job.' },
  { Icon: LayoutPanelLeft, title: 'Layout-first planning', copy: 'Every project starts with the floor plan, so the budget goes where it adds value.' },
  { Icon: HandCoins, title: 'Free cash offers', copy: 'Thinking of selling? Get an offer with no repairs and no obligation.' },
  { Icon: Eye, title: 'Work you can see', copy: 'We renovate and sell homes ourselves. Ask to see the details.' },
  { Icon: CalendarCheck, title: 'One coordinated plan', copy: 'People, scope, and schedule agreed in the same conversation.' },
  { Icon: MapPin, title: 'Local Ohio team', copy: 'Based in Dayton, working across Cincinnati, Cleveland, and Columbus.' },
];

/** What makes us different: a photograph and heading beside a grid of six reasons. */
export default function LandingFeatures() {
  return <section className="lp-section lp-diff" aria-labelledby="features-title">
    <div className="lp-container lp-diff-grid">
      <div className="lp-diff-side">
        <RevealImage className="lp-diff-photo" src="/images/ai/layout-planning-ai-v1.webp" alt="Hands sketching a floor plan on paper" />
        <FadeUp><h2 id="features-title">What makes us <WordHighlight>different</WordHighlight></h2></FadeUp>
        <FadeUp delay={.06}><Link to="/why-us" className="lp-pill-btn lp-pill-btn-dark">About us <span className="lp-pill-btn-arrow"><ArrowUpRight aria-hidden="true" /></span></Link></FadeUp>
      </div>
      <ul className="lp-diff-list">
        {features.map(({ Icon, title, copy }, index) => <FadeUp as="li" key={title} delay={(index % 2) * .08}>
          <span className="lp-diff-icon"><Icon aria-hidden="true" /></span>
          <h3>{title}</h3>
          <p>{copy}</p>
        </FadeUp>)}
      </ul>
    </div>
  </section>;
}
