import React, { useId, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Mail, Phone, Plus } from 'lucide-react';
import { useHomeReducedMotion } from './HomeMotion';
import { FadeUp } from './landing-motion';
import WordHighlight from './WordHighlight';
import { homeEase } from './home-motion';

const questions = [
  ['What kind of projects can we discuss?', 'Major renovations, investor projects, and large-loss insurance construction. Tell us about the property and the work you have in mind so we can discuss the scope.'],
  ['Can you help rethink the layout?', 'Yes. Improving how a home functions is central to our approach. We look at living areas, circulation, and opportunities for additional rooms where the space and project allow.'],
  ['What should I bring to the first conversation?', 'Start with the address, a description of the property’s condition, and your goals. Photos, existing plans, and a rough budget are useful if you have them.'],
  ['What if I would rather sell the property?', 'We buy properties as well. Use the address form below to start the cash-offer process, or contact us to talk through your situation.'],
  ['How do I learn more about an investment?', 'Contact us about the property or partnership you’re interested in. Ask for current availability, project details, and the assumptions behind the figures in the overview.'],
];

/** Contact details beside an accordion whose answers ease open and closed. */
export default function LandingFAQ() {
  const reduced = useHomeReducedMotion();
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();
  return <section className="lp-section-tight lp-faq" id="questions" aria-labelledby="questions-title">
    <div className="lp-container lp-faq-grid">
      <div className="lp-faq-intro">
        <FadeUp><h2 id="questions-title">Questions, <WordHighlight>answered</WordHighlight>.</h2></FadeUp>
        <FadeUp delay={.06}><p className="lp-body">Every property is different. If yours isn’t covered here, ask us directly.</p></FadeUp>
        <FadeUp delay={.1} className="lp-contact-card">
          <a href="tel:+19375209357"><span className="lp-round-icon"><Phone aria-hidden="true" /></span><span><small>Call us</small>+1 (937) 520-9357</span></a>
          <a href="mailto:Info@essaestates.com"><span className="lp-round-icon"><Mail aria-hidden="true" /></span><span><small>Email</small>Info@essaestates.com</span></a>
          <Link to="/contact" className="lp-link">Send us a message <ArrowRight aria-hidden="true" /></Link>
        </FadeUp>
      </div>
      <div className="lp-faq-list">
        {questions.map(([question, answer], index) => {
          const isOpen = open === index;
          const panelId = `${baseId}-panel-${index}`;
          return <div key={question} className={`lp-faq-item${isOpen ? ' is-open' : ''}`}>
            <h3>
              <button type="button" aria-expanded={isOpen} aria-controls={panelId} onClick={() => setOpen(isOpen ? null : index)}>
                <span>{question}</span>
                <span className="lp-faq-toggle"><Plus aria-hidden="true" /></span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && <motion.div id={panelId} key="answer" className="lp-faq-answer"
                initial={reduced ? false : { height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={reduced ? undefined : { height: 0, opacity: 0 }}
                transition={{ duration: reduced ? 0 : .45, ease: homeEase }}>
                <p>{answer}</p>
              </motion.div>}
            </AnimatePresence>
          </div>;
        })}
      </div>
    </div>
  </section>;
}
