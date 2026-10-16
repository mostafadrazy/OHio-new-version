import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, BrickWall, FileCheck, HardHat, House, Ruler, ShieldCheck, Wrench } from 'lucide-react';
import { FadeUp } from './landing-motion';
import WordHighlight from './WordHighlight';

const team = [
  { Icon: Ruler, title: 'Architects', copy: 'Plan the repair, and any layout improvements, before work starts.' },
  { Icon: FileCheck, title: 'Claim specialists', copy: 'Document the damage and the full scope of the repair.' },
  { Icon: HardHat, title: 'Contractors', copy: 'Rebuild it properly, coordinated from start to finish.' },
];
const claims = [
  { Icon: BrickWall, label: 'Structural damage' },
  { Icon: House, label: 'Roof replacement' },
  { Icon: Wrench, label: 'Large-loss rebuilds' },
];

/** 02 · A cream bento grid: the rebuilt home, the three people on the job, and the claims we help with. */
export default function LandingInsurance() {
  return <section className="lp-section lp-rebuild" id="insurance" aria-labelledby="insurance-title">
    <div className="lp-container">
      <div className="lp-rebuild-head">
        <div>
          <FadeUp><p className="lp-label-pill"><span aria-hidden="true" />02 · Insurance construction</p></FadeUp>
          <FadeUp delay={.05}><h2 id="insurance-title">After the damage. <WordHighlight>One team</WordHighlight> for the rebuild.</h2></FadeUp>
        </div>
        <FadeUp delay={.1} className="lp-rebuild-intro">
          <p>Major damage brings a lot of decisions at once. We put the architects, claim specialists, and contractors into one plan, so the work moves together instead of in pieces.</p>
          <Link to="/contact" className="lp-pill-btn lp-pill-btn-dark">Talk about your rebuild <span className="lp-pill-btn-arrow"><ArrowUpRight aria-hidden="true" /></span></Link>
        </FadeUp>
      </div>

      <div className="lp-rebuild-grid">
        <FadeUp className="lp-rebuild-photo" y={30}>
          <img src="/images/ai/rebuilt-home-ai-v1.webp" alt="A rebuilt family home with warm lights at dusk" loading="lazy" />
          <span className="lp-rebuild-badge"><ShieldCheck aria-hidden="true" />One coordinated plan</span>
          <div className="lp-rebuild-caption">
            <strong>From assessment to final walkthrough</strong>
            <span>The repair, the paperwork, and the build—planned together from day one.</span>
          </div>
        </FadeUp>

        {team.map(({ Icon, title, copy }, index) => <FadeUp key={title} delay={.08 + index * .08} y={30} className="lp-rebuild-tile">
          <span className="lp-rebuild-tile-top">
            <span className="lp-rebuild-tile-icon"><Icon aria-hidden="true" /></span>
            <span className="lp-rebuild-tile-num">0{index + 1}</span>
          </span>
          <h3>{title}</h3>
          <p>{copy}</p>
        </FadeUp>)}

        <FadeUp delay={.32} y={30} className="lp-rebuild-claims">
          <p className="lp-rebuild-claims-title">We help with</p>
          <ul>
            {claims.map(({ Icon, label }) => <li key={label}>
              <Link to="/contact"><span className="lp-rebuild-claim-icon"><Icon aria-hidden="true" /></span>{label}<ArrowUpRight className="lp-rebuild-claim-arrow" aria-hidden="true" /></Link>
            </li>)}
          </ul>
        </FadeUp>
      </div>
    </div>
  </section>;
}
