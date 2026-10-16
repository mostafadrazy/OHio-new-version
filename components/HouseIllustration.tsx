import React from 'react';
import { motion } from 'framer-motion';

const HouseIllustration: React.FC<{ className?: string }> = ({ className }) => {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => ({
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay: i * 0.08, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay: i * 0.08, duration: 0.01 }
      }
    })
  };

  const fade = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 2.5, duration: 1 } }
  };

  const accentFade = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { delay: 0.2, duration: 1.5, ease: "easeOut" } }
  };

  return (
    <svg viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Background Accents (Yellow) */}
      <motion.circle cx="400" cy="300" r="220" fill="#FFD700" opacity="0.15" variants={accentFade} initial="hidden" animate="visible" />
      <motion.rect x="220" y="170" width="360" height="310" fill="#FFD700" opacity="0.1" rx="20" variants={accentFade} initial="hidden" animate="visible" />
      <motion.path d="M 100 500 L 700 500" stroke="#FFD700" strokeWidth="8" strokeLinecap="round" opacity="0.4" variants={accentFade} initial="hidden" animate="visible" />

      <g stroke="#1F2937" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Ground */}
        <motion.path d="M 150 500 L 650 500" variants={draw} custom={1} initial="hidden" animate="visible" />

        {/* Main House Body */}
        <motion.rect x="250" y="250" width="300" height="250" fill="#FFFFFF" variants={draw} custom={2} initial="hidden" animate="visible" />

        {/* Left Extension */}
        <motion.rect x="180" y="320" width="70" height="180" fill="#FFFFFF" variants={draw} custom={3} initial="hidden" animate="visible" />
        <motion.path d="M 160 320 L 250 260 L 250 320 Z" fill="#FFFFFF" variants={draw} custom={4} initial="hidden" animate="visible" />

        {/* Right Extension */}
        <motion.rect x="550" y="320" width="70" height="180" fill="#FFFFFF" variants={draw} custom={5} initial="hidden" animate="visible" />
        <motion.path d="M 640 320 L 550 260 L 550 320 Z" fill="#FFFFFF" variants={draw} custom={6} initial="hidden" animate="visible" />

        {/* Chimney */}
        <motion.rect x="480" y="120" width="30" height="80" fill="#FFFFFF" variants={draw} custom={7} initial="hidden" animate="visible" />
        <motion.rect x="475" y="110" width="40" height="10" fill="#FFFFFF" variants={draw} custom={8} initial="hidden" animate="visible" />

        {/* Main Roof */}
        <motion.path d="M 220 250 L 400 100 L 580 250 Z" fill="#FFFFFF" variants={draw} custom={9} initial="hidden" animate="visible" />
        <motion.path d="M 250 250 L 400 125 L 550 250" variants={draw} custom={10} initial="hidden" animate="visible" />

        {/* Front Porch Base & Steps */}
        <motion.rect x="320" y="480" width="160" height="20" fill="#FFFFFF" variants={draw} custom={11} initial="hidden" animate="visible" />
        <motion.rect x="340" y="500" width="120" height="10" fill="#FFFFFF" variants={draw} custom={12} initial="hidden" animate="visible" />
        <motion.rect x="360" y="510" width="80" height="10" fill="#FFFFFF" variants={draw} custom={13} initial="hidden" animate="visible" />

        {/* Porch Columns */}
        <motion.rect x="330" y="380" width="12" height="100" fill="#FFFFFF" variants={draw} custom={14} initial="hidden" animate="visible" />
        <motion.rect x="458" y="380" width="12" height="100" fill="#FFFFFF" variants={draw} custom={15} initial="hidden" animate="visible" />

        {/* Porch Roof */}
        <motion.path d="M 310 380 L 400 340 L 490 380 Z" fill="#FFFFFF" variants={draw} custom={16} initial="hidden" animate="visible" />

        {/* Front Door */}
        <motion.rect x="375" y="400" width="50" height="80" fill="#FFFFFF" variants={draw} custom={17} initial="hidden" animate="visible" />
        <motion.rect x="385" y="410" width="30" height="30" strokeWidth="2" variants={draw} custom={18} initial="hidden" animate="visible" />
        <motion.rect x="385" y="445" width="30" height="30" strokeWidth="2" variants={draw} custom={19} initial="hidden" animate="visible" />
        <motion.circle cx="415" cy="445" r="3" fill="#1F2937" variants={fade} initial="hidden" animate="visible" />

        {/* Windows */}
        {/* Left Extension Window */}
        <motion.rect x="195" y="360" width="40" height="60" fill="#FFFFFF" variants={draw} custom={20} initial="hidden" animate="visible" />
        <motion.path d="M 195 390 L 235 390 M 215 360 L 215 420" strokeWidth="2" variants={draw} custom={21} initial="hidden" animate="visible" />

        {/* Right Extension Window */}
        <motion.rect x="565" y="360" width="40" height="60" fill="#FFFFFF" variants={draw} custom={22} initial="hidden" animate="visible" />
        <motion.path d="M 565 390 L 605 390 M 585 360 L 585 420" strokeWidth="2" variants={draw} custom={23} initial="hidden" animate="visible" />

        {/* Main Left Window */}
        <motion.rect x="270" y="280" width="40" height="60" fill="#FFFFFF" variants={draw} custom={24} initial="hidden" animate="visible" />
        <motion.path d="M 270 310 L 310 310 M 290 280 L 290 340" strokeWidth="2" variants={draw} custom={25} initial="hidden" animate="visible" />

        {/* Main Right Window */}
        <motion.rect x="490" y="280" width="40" height="60" fill="#FFFFFF" variants={draw} custom={26} initial="hidden" animate="visible" />
        <motion.path d="M 490 310 L 530 310 M 510 280 L 510 340" strokeWidth="2" variants={draw} custom={27} initial="hidden" animate="visible" />

        {/* Attic Window */}
        <motion.circle cx="400" cy="190" r="20" fill="#FFFFFF" variants={draw} custom={28} initial="hidden" animate="visible" />
        <motion.path d="M 380 190 L 420 190 M 400 170 L 400 210" strokeWidth="2" variants={draw} custom={29} initial="hidden" animate="visible" />

        {/* Landscaping / Bushes */}
        <motion.path d="M 180 500 C 180 470 200 450 230 470 C 250 440 280 450 290 480 C 300 460 320 480 320 500 Z" fill="#FFFFFF" variants={draw} custom={30} initial="hidden" animate="visible" />
        <motion.path d="M 620 500 C 620 470 600 450 570 470 C 550 440 520 450 510 480 C 500 460 480 480 480 500 Z" fill="#FFFFFF" variants={draw} custom={31} initial="hidden" animate="visible" />
      </g>
    </svg>
  );
};

export default HouseIllustration;
