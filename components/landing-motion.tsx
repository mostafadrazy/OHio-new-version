import React from 'react';
import { motion } from 'framer-motion';
import { useHomeReducedMotion } from './HomeMotion';
import { homeEase } from './home-motion';

/** Fades and lifts its content a short way the first time it scrolls into view. */
export function FadeUp({ children, delay = 0, y = 16, className, as = 'div' }: { key?: React.Key; children: React.ReactNode; delay?: number; y?: number; className?: string; as?: 'div' | 'li' | 'p' | 'article' }) {
  const reduced = useHomeReducedMotion();
  const Tag = motion[as] as typeof motion.div;
  return <Tag className={className}
    initial={reduced ? false : { opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: .2 }}
    transition={{ duration: .7, delay: reduced ? 0 : delay, ease: homeEase }}>
    {children}
  </Tag>;
}

/**
 * A photograph that uncovers from the bottom edge as it scrolls into view.
 * The wrapper is observed, since a fully clipped element never registers as visible.
 */
export function RevealImage({ src, alt, className }: { src: string; alt: string; className?: string }) {
  const reduced = useHomeReducedMotion();
  return <motion.div className={`lp-reveal${className ? ` ${className}` : ''}`} initial={reduced ? false : 'hidden'} whileInView="shown" viewport={{ once: true, amount: .25 }}>
    <motion.div className="lp-reveal-clip"
      variants={{ hidden: { clipPath: 'inset(100% 0% 0% 0%)' }, shown: { clipPath: 'inset(0% 0% 0% 0%)', transition: { duration: 1.1, ease: homeEase } } }}>
      <motion.img src={src} alt={alt} loading="lazy"
        variants={{ hidden: { scale: 1.12 }, shown: { scale: 1, transition: { duration: 1.4, ease: homeEase } } }} />
    </motion.div>
  </motion.div>;
}
