import { useHomeReducedMotion } from './HomeMotion';
import React from 'react';
import { motion } from 'framer-motion';

export default function WordHighlight({ children }: { children: React.ReactNode }) {
  const reducedMotion = useHomeReducedMotion();
  return <span className="hero-highlight">{children}<svg viewBox="0 0 400 28" preserveAspectRatio="none" aria-hidden="true"><motion.path d="M 6 21 C 90 6, 240 2, 394 13" fill="none" stroke="currentColor" strokeWidth="6.5" strokeLinecap="round" initial={reducedMotion ? false : { pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true, amount: .5 }} transition={{ duration: reducedMotion ? 0 : .8, delay: reducedMotion ? 0 : .25, ease: 'easeOut' }} /></svg></span>;
}
