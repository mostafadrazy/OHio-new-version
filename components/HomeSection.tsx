import { useHomeReducedMotion } from './HomeMotion';
import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { homeReveal } from './home-motion';

/** A single motion rhythm for the landing page, with no scroll hijacking. */
export default function HomeSection({ children, ...props }: HTMLMotionProps<'section'>) {
  const reducedMotion = useHomeReducedMotion();
  return <motion.section {...props}
    initial={reducedMotion ? false : { opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true, amount: .08 }}
    transition={homeReveal}>
    {children}
  </motion.section>;
}
