import { useHomeReducedMotion } from './HomeMotion';
import React from 'react';
import { motion } from 'framer-motion';
import WordHighlight from './WordHighlight';
import { homeReveal } from './home-motion';

const steps = [
  { title: 'Discover', copy: 'Tell us about your goals and your property. Together, we explore what the space could become.', icon: 'M5 5h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H9l-5 4v-4H3V7a2 2 0 0 1 2-2ZM8 11h.01M12 11h.01M16 11h.01' },
  { title: 'Design', copy: 'Shape the layout, finishes, and scope into a clear plan that works for your priorities and budget.', icon: 'm15 4 5 5M4 20l5-1L21 7a2 2 0 0 0-5-5L4 14Z' },
  { title: 'Build', copy: 'Bring the plan to life with coordinated trades, careful workmanship, and clear communication.', icon: 'm14 11-9 10-3-3 10-9M10 4l4-2 6 5 1 4-3 1-3-4-3 1-3-3Z' },
  { title: 'Reveal', copy: 'Walk through the finished work and its details. A more functional home, ready for its next chapter.', icon: 'm2 11 10-9 10 9M5 9v12h14V9M9 21v-8h6v8' },
];

export default function RenovationJourney() {
  const reduced = useHomeReducedMotion();
  return <section className="renovation-journey home-band" aria-labelledby="journey-title" id="renovation-journey">
    <div className="home-container">
      <div className="home-section-heading"><div><p className="home-kicker">From first conversation to finishing touches</p><h2 id="journey-title">A clear path to your <WordHighlight>transformation</WordHighlight>.</h2></div><p>Four considered steps, with your property and your priorities at the heart of each one.</p></div>
      <ol className="journey-grid">
        {steps.map((step, index) => <motion.li key={step.title} className="journey-step"
          initial={reduced ? false : { opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .15 }}
          transition={{ ...homeReveal, delay: reduced ? 0 : index * .08 }}>
          <div className="journey-marker" aria-hidden="true"><span className="journey-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d={step.icon} /></svg></span></div>
          <p className="journey-number">Step 0{index + 1}</p>
          <h3>{step.title}</h3>
          <p>{step.copy}</p>
        </motion.li>)}
      </ol>
    </div>
  </section>;
}
