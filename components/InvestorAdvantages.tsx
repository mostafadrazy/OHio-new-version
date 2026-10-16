import { useHomeReducedMotion } from './HomeMotion';
import React from 'react';
import { motion } from 'framer-motion';

const advantages = [
  { title: 'People who know the work.', text: 'An in-house crew and vetted subcontractors bring practical experience to the project.', paths: ['M32 31a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z', 'M16 52v-5c0-8 7-12 16-12s16 4 16 12v5', 'M12 17a7 7 0 0 0 0 14M6 47v-5c0-5 3-8 8-9', 'M52 17a7 7 0 0 1 0 14M58 47v-5c0-5-3-8-8-9'] },
  { title: 'Work you can look at.', text: 'Ask about our renovation work and see the details behind the finish.', paths: ['M10 29 32 10l22 19', 'M17 26v29h30V26', 'm24 39 6 6 11-12'] },
  { title: 'A coordinated approach.', text: 'Bring the people, scope, and schedule into the same conversation from the start.', paths: ['M15 14h34a5 5 0 0 1 5 5v32a5 5 0 0 1-5 5H15a5 5 0 0 1-5-5V19a5 5 0 0 1 5-5Z', 'M21 8v13M43 8v13M10 28h44', 'm23 41 6 6 13-13'] },
];

export default function InvestorAdvantages() {
  const reducedMotion = useHomeReducedMotion();
  return <div className="home-advantages home-icon-advantages">{advantages.map((item, index) => (
    <motion.article key={item.title} initial={reducedMotion ? false : { opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .3 }} transition={{ duration: .5, delay: index * .06 }} >
      <motion.div className="advantage-icon-disc" whileHover={reducedMotion ? undefined : { scale: 1.035 }} transition={{ duration: .55 }}>
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{item.paths.map((d, part) => <motion.path key={d} d={d} initial={reducedMotion ? false : { pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: .55, delay: index * .05 + part * .04, ease: 'easeInOut' }} />)}</svg>
      </motion.div>
      <div className="advantage-icon-copy"><h3>{item.title}</h3><p>{item.text}</p></div>
    </motion.article>
  ))}</div>;
}
