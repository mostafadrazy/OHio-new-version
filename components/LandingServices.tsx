import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { FadeUp } from './landing-motion';
import WordHighlight from './WordHighlight';

const cards = [
  { tone: 'is-dark', title: 'Construction & renovation', copy: 'We open up layouts, add rooms where they fit, and finish every detail properly.', link: 'Our approach', to: '/#construction' },
  { tone: 'is-yellow', title: 'Insurance rebuilds', copy: 'After major damage, architects, claim specialists, and contractors work from one plan.', link: 'How it works', to: '/#insurance', image: 'https://res.cloudinary.com/dmnqlruhl/image/upload/v1772107522/Whisk_e7ce7s2f4048217c92594d3e2fa728a01dr_azfphp.png' },
  { tone: 'is-photo', title: 'Estate investments', copy: 'Rental-ready properties and partnerships, with the numbers laid out up front.', link: 'See properties', to: '/#investments', image: '/images/ai/investment-home-ai-v1.webp' },
];
const areas = [
  { city: 'Dayton', to: '/sell-my-house-dayton' },
  { city: 'Cincinnati', to: '/sell-my-house-cincinnati' },
  { city: 'Cleveland', to: '/sell-my-house-cleveland' },
  { city: 'Columbus', to: '/sell-my-house-columbus' },
];

/** Who we are: a heading, three cards with a notched corner arrow, then the cities we serve. */
export default function LandingServices() {
  return <section className="lp-section lp-who" id="services" aria-labelledby="services-title">
    <div className="lp-container">
      <div className="lp-who-head">
        <FadeUp><p className="lp-label-pill"><span aria-hidden="true" />Who we are</p></FadeUp>
        <FadeUp delay={.06}><h2 id="services-title">We rebuild homes and create <WordHighlight>real value</WordHighlight> across Ohio.</h2></FadeUp>
      </div>
      <div className="lp-who-grid">
        {cards.map((card, index) => <FadeUp key={card.title} delay={index * .1} y={40}>
          <Link to={card.to} className={`lp-who-card ${card.tone}`}>
            {card.tone === 'is-photo' && <img className="lp-who-bg" src={card.image} alt="" loading="lazy" />}
            <span className="lp-who-num">0{index + 1}.</span>
            <span className="lp-who-body">
              <span className="lp-who-title">{card.title}</span>
              <span className="lp-who-copy">{card.copy}</span>
              <span className="lp-who-link">{card.link}</span>
            </span>
            {card.tone === 'is-yellow' && <img className="lp-who-figure" src={card.image} alt="" loading="lazy" referrerPolicy="no-referrer" />}
            <span className="lp-notch" aria-hidden="true"><span><ArrowUpRight /></span></span>
          </Link>
        </FadeUp>)}
      </div>

      <FadeUp className="lp-areas">
        <p className="lp-areas-title"><span className="lp-areas-icon"><MapPin aria-hidden="true" /></span>Proudly serving homeowners across Ohio</p>
        <ul aria-label="Cities we serve">
          {areas.map(({ city, to }) => <li key={city}><Link to={to}>{city}<ArrowUpRight aria-hidden="true" /></Link></li>)}
        </ul>
      </FadeUp>
    </div>
  </section>;
}
