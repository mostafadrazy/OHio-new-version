import { useHomeReducedMotion } from './HomeMotion';
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import WordHighlight from './WordHighlight';
import { homeEase } from './home-motion';

export default function ConstructionSection() {
  const reduced = useHomeReducedMotion();
  const ease = homeEase;
  const reveal = (delay = 0) => ({
    initial: reduced ? false as const : { opacity: 0, y: 12 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: .2 },
    transition: { duration: .55, delay: reduced ? 0 : Math.min(delay, .18), ease },
  });

  return <section id="construction" className="home-construction home-section" aria-labelledby="construction-title">
    <div className="home-container home-split">
      <motion.figure className="home-plan construction-motion-plan" {...reveal()}
        whileHover={reduced ? undefined : { y: -3, transition: { duration: .35, ease } }}>
        <div className="construction-plan-window">
          <motion.img src="/images/renovation-layout.jpg" alt="Before and updated floor plans showing relocated living spaces and added bedrooms and a bathroom" loading="lazy"
            initial={reduced ? false : { scale: 1.015, opacity: 1 }}
            whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .7, ease }} />
        </div>
        <motion.div className="construction-plan-rule" aria-hidden="true" initial={reduced ? false : { scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: reduced ? 0 : .25, ease }} />
        <figcaption><span>Better layouts. More possibilities.</span><span>Before <span className="construction-caption-arrow" aria-hidden="true">→</span> After</span></figcaption>
      </motion.figure>
      <div className="construction-motion-copy">
        <motion.p className="home-kicker" {...reveal(.05)}><span className="home-section-number">01</span> Construction services</motion.p>
        <motion.h2 id="construction-title" {...reveal(.12)}>Make the space work harder.<br />Make the home work <WordHighlight>better</WordHighlight>.</motion.h2>
        <motion.p className="home-body" {...reveal(.2)}>A good renovation starts with the floor plan. We look for ways to open living areas, improve circulation, and create room for an extra bedroom or bathroom where the property allows.</motion.p>
        <div className="home-inline-points">
          {['Layout planning', 'Major renovations', 'Investor projects'].map((label, index) => <motion.span key={label} {...reveal(.22 + index * .1)}>{label}</motion.span>)}
        </div>
        <motion.div {...reveal(.35)}><Link to="/contact" className="home-button">Discuss your renovation <span aria-hidden="true">↗</span></Link></motion.div>
      </div>
    </div>
  </section>;
}
