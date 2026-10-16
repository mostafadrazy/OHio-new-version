import React from 'react';
import { motion } from 'framer-motion';
import { useHomeReducedMotion } from './HomeMotion';
import { homeEase } from './home-motion';

const stats = [
  { value: '12', suffix: '+', label: 'properties completed' },
  { value: '4', suffix: '', label: 'Ohio cities we serve' },
  { value: '10–12', suffix: '%', label: 'overview return range' },
  { value: '$1.45', suffix: '', label: 'collateral per $1 invested' },
];

/** A dark photo band; each figure stands on a thin line that rises from the floor. */
export default function LandingStats() {
  const reduced = useHomeReducedMotion();
  return <section className="lp-stats-band" aria-label="Essa Estates in numbers">
    <img className="lp-stats-bg" src="/images/ai/rebuilt-home-ai-v1.webp" alt="" loading="lazy" />
    <motion.dl className="lp-stats-grid" initial={reduced ? false : 'hidden'} whileInView="shown" viewport={{ once: true, amount: .35 }}>
      {stats.map((stat, index) => <motion.div key={stat.label} className="lp-stat-pin"
        variants={{ hidden: { opacity: 0, y: 40 }, shown: { opacity: 1, y: 0, transition: { duration: .9, delay: index * .12, ease: homeEase } } }}>
        <dt>{stat.label}</dt>
        <dd>{stat.value}<sup>{stat.suffix}</sup></dd>
      </motion.div>)}
    </motion.dl>
  </section>;
}
