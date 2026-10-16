import React, { createContext, useContext, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

const MotionContext = createContext<boolean | null>(null);
export const useHomeReducedMotion = () => {
  const preference = useContext(MotionContext);
  const systemReduced = useReducedMotion();
  return preference ?? systemReduced;
};

export default function HomeMotion({ children }: { children: React.ReactNode }) {
  const systemReduced = useReducedMotion();
  const [enabled, setEnabled] = useState<boolean | null>(() => {
    try { const value = localStorage.getItem('essa-motion'); return value === null ? null : value === 'on'; }
    catch { return null; }
  });
  const reduced = enabled === null ? Boolean(systemReduced) : !enabled;
  const toggle = () => {
    const next = reduced;
    setEnabled(next);
    try { localStorage.setItem('essa-motion', next ? 'on' : 'off'); } catch { /* Storage may be unavailable. */ }
  };
  return <MotionContext.Provider value={reduced}>
    <div className="yellow-home" data-motion={reduced ? 'reduced' : 'full'}>
      {children}
      <div className="home-motion-bar"><button className="home-motion-toggle" type="button" onClick={toggle} aria-pressed={!reduced} aria-label="Enable page animations"><span className="home-motion-icon" aria-hidden="true">{reduced ? '▷' : 'Ⅱ'}</span><span className="home-motion-label" aria-hidden="true">Motion {reduced ? 'off' : 'on'}</span></button></div>
    </div>
  </MotionContext.Provider>;
}
