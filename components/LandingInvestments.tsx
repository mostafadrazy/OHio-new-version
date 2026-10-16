import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Bath, BedDouble, Maximize } from 'lucide-react';
import { FadeUp } from './landing-motion';
import WordHighlight from './WordHighlight';

const properties = [
  { type: '6-unit building', beds: '6', baths: '6', area: '2,200', rent: '$5,200', status: 'To be rented', price: '$425,000', image: '/images/ai/investment-home-ai-v1.webp' },
  { type: 'Duplex', beds: '8', baths: '4', area: '2,400', rent: '$3,550', status: 'Rented', price: '$259,950', image: '/images/ai/renovated-kitchen-ai-v1.webp' },
  { type: '4-unit building', beds: '19', baths: '6', area: '5,000', rent: '$6,500', status: 'To be rented', price: '$525,000', image: '/images/ai/renovated-living-ai-v1.webp' },
];

/** 03 · Centered heading, three listing cards, and a dark partnership strip. */
export default function LandingInvestments() {
  return <section className="lp-section" id="investments" aria-labelledby="investments-title">
    <div className="lp-container">
      <div className="lp-center-head">
        <FadeUp><p className="lp-kicker">03 · Estate investments</p></FadeUp>
        <FadeUp delay={.04}><h2 id="investments-title">Properties with the numbers <WordHighlight>up front</WordHighlight></h2></FadeUp>
        <FadeUp delay={.08}><p>Residential and multi-unit properties, with rent and pricing side by side.</p></FadeUp>
      </div>

      <ul className="lp-properties" id="available-properties" aria-label="Investment properties">
        {properties.map((property, index) => <FadeUp as="li" key={property.type} delay={index * .1} y={40} className="lp-property">
          <div className="lp-property-media">
            <img src={property.image} alt={`AI-generated illustration for the ${property.type} listing`} loading="lazy" />
            <span className={`lp-tag${property.status === 'Rented' ? ' is-dark' : ''}`}>{property.status}</span>
          </div>
          <div className="lp-property-body">
            <div className="lp-property-head"><h3>{property.type}</h3><p>{property.price}</p></div>
            <ul className="lp-property-specs" aria-label="Property details">
              <li><BedDouble aria-hidden="true" />{property.beds} beds</li>
              <li><Bath aria-hidden="true" />{property.baths} baths</li>
              <li><Maximize aria-hidden="true" />{property.area} sq ft</li>
            </ul>
            <div className="lp-property-foot">
              <span><small>{property.status === 'Rented' ? 'Monthly rent' : 'Planned rent'}</small>{property.rent}</span>
              <Link to="/contact" className="lp-circle-btn lp-circle-btn-sm" aria-label={`Ask about the ${property.type}`}><ArrowUpRight aria-hidden="true" /></Link>
            </div>
          </div>
        </FadeUp>)}
      </ul>
      <p className="lp-note">Figures come from our property overview. Ask us for current availability. Images are AI-generated illustrations.</p>

      <FadeUp className="lp-partner" y={30}>
        <div id="initiative">
          <h3>Invest alongside us.</h3>
          <p>Bring your goals and we’ll talk through fit, timelines, and the numbers.</p>
        </div>
        <dl>
          <div><dt>Overview return range</dt><dd>10–12%</dd></div>
          <div><dt>Collateral per $1 invested</dt><dd>$1.45</dd></div>
        </dl>
        <Link to="/contact" className="lp-btn lp-btn-yellow">Discuss a partnership <ArrowRight aria-hidden="true" /></Link>
      </FadeUp>
    </div>
  </section>;
}
