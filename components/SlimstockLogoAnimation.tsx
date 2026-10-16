import React, { useId } from 'react';

interface SlimstockLogoAnimationProps {
  /** Show the slimstock wordmark unfolding out of the icon */
  showText?: boolean;
  /** White wordmark for dark backgrounds */
  onDark?: boolean;
  /** Rendered width in px (height follows the aspect ratio) */
  width?: number;
  /** Length of one loop in seconds */
  duration?: number;
  className?: string;
}

const COLORS = {
  light: '#0099e5',
  overlap: '#004373',
  word: '#002d4d',
};

// Rounded diamond matching the logo's own corner curves: centre, half-diagonal, corner inset, handle
const diamond = (cx: number, cy: number, h: number, a: number, b: number) =>
  [
    `M${cx + a},${cy - h + a}`,
    `L${cx + h - a},${cy - a}`,
    `C${cx + h - a + b},${cy - a + b} ${cx + h - a + b},${cy + a - b} ${cx + h - a},${cy + a}`,
    `L${cx + a},${cy + h - a}`,
    `C${cx + a - b},${cy + h - a + b} ${cx - a + b},${cy + h - a + b} ${cx - a},${cy + h - a}`,
    `L${cx - h + a},${cy + a}`,
    `C${cx - h + a - b},${cy + a - b} ${cx - h + a - b},${cy - a + b} ${cx - h + a},${cy - a}`,
    `L${cx - a},${cy - h + a}`,
    `C${cx - a + b},${cy - h + a - b} ${cx + a - b},${cy - h + a - b} ${cx + a},${cy - h + a}`,
    'Z',
  ].join(' ');

// The icon is five diamonds on a shared grid; where two overlap the overlap is drawn dark.
// Listed bottom to top so later pieces can slide out from behind earlier ones.
const PIECES = [
  { key: 'medium', d: diamond(574.275, 60, 25.32, 2.815, 1.55), fill: COLORS.light },
  { key: 'small', d: diamond(548.915, 60, 12.66, 2.815, 1.55), fill: COLORS.light },
  { key: 'square', d: diamond(510.935, 47.345, 25.32, 2.815, 1.55), fill: COLORS.light },
  { key: 'big', d: diamond(472.96, 60, 63.3, 5.625, 3.11), fill: COLORS.light },
  { key: 'dot', d: diamond(434.985, 60, 12.665, 2.815, 1.55), fill: COLORS.overlap },
  // Exact overlap regions from the original artwork
  { key: 'joint-a', d: 'M488.43,50.15l19.69,19.69c1.55,1.55,4.07,1.55,5.63,0l16.18-16.18-25.32-25.32-16.18,16.18c-1.55,1.55-1.55,4.07,0,5.63Z', fill: COLORS.overlap },
  { key: 'joint-b', d: 'M558.76,57.19c1.55,1.55,1.55,4.07,0,5.63l-3.49,3.49-3.49-3.49c-1.55-1.55-1.55-4.07,0-5.63l3.49-3.49,3.49,3.49Z', fill: COLORS.overlap },
];
const SHAPES = PIECES.slice(0, 5);

const LETTERS = [
  'M34.87,50.09c-.55-2.19-.82-3.01-1.46-4.1-1.64-2.82-5.3-5.93-12.69-5.93-3.29,0-7.3.73-10.03,2.92-1.73,1.28-2.74,3.28-2.74,5.47,0,1.55.55,3.1,1.64,4.1,2.37,2.28,7.67,3.19,10.49,3.74,3.57.64,7.12,1.09,10.5,2.1,9.04,2.56,10.5,7.94,10.5,12.23,0,3.02-.91,5.57-2.74,7.94-2.74,3.47-7.48,6.38-16.79,6.38-1.18,0-4.19,0-7.48-.73-1.92-.54-8.85-2.47-12.05-8.76-1.46-2.74-1.64-4.75-2.01-7.76h5.93c.36,2.28.73,4.1,2,6.02,1.64,2.65,6.02,6.12,13.78,6.12,1.28,0,7.02,0,10.86-3.47.82-.82,2.47-2.55,2.47-5.47,0-.73-.09-2.28-1.28-3.84-2.55-3.19-7.57-3.74-11.32-4.38-2.82-.46-5.66-1.01-8.39-1.65-6.66-1.64-12.32-4.38-12.32-12.23,0-1.28.09-3.92,1.91-6.75,2.29-3.47,7.67-7.11,17.16-7.11,1.83,0,8.76,0,13.96,3.92,1.01.73,2.28,2.01,3.02,3.01,1.83,2.47,2.37,5.02,2.92,7.94l-5.83.28Z',
  'M55.24,83.68h-5.93V23.6h5.93v60.08Z',
  'M72.72,83.68h-5.93v-47.37h5.93v47.37Z',
  'M158.55,83.68h-5.93v-29.3c-.09-.63,0-3.74-.73-6.29-2.1-7.49-9.58-7.94-11.77-7.94-4.74.09-9.86,2.01-12.78,5.75-2.82,3.65-2.82,8.49-2.92,12.78v25.01h-5.93v-30.21c-.18-4.1-.55-7.57-3.84-10.49-2.38-2.1-5.38-2.92-8.58-2.92-6.02,0-12.05,2.83-14.42,8.4-1.28,2.82-1.46,5.29-1.46,8.31v26.92h-5.93v-47.37h5.93v6.67c.27-.46,1.09-1.46,2.1-2.47,2.19-2.19,6.93-5.47,14.88-5.47,2.1,0,9.21.18,13.59,5.57,1.19,1.46,1.56,2.28,2.28,3.93,3.56-6.67,11.05-9.4,18.34-9.4,10.77,0,14.88,6.2,16.15,10.5.91,2.73,1.01,5.47,1.01,8.39v29.63Z',
  'M200.46,50.09c-.55-2.19-.82-3.01-1.46-4.1-1.64-2.82-5.29-5.93-12.68-5.93-3.29,0-7.3.73-10.04,2.92-1.73,1.28-2.74,3.28-2.74,5.47,0,1.55.55,3.1,1.64,4.1,2.38,2.28,7.67,3.19,10.49,3.74,3.56.64,7.12,1.09,10.5,2.1,9.03,2.56,10.49,7.94,10.49,12.23,0,3.02-.91,5.57-2.74,7.94-2.74,3.47-7.48,6.38-16.79,6.38-1.19,0-4.2,0-7.49-.73-1.91-.54-8.86-2.47-12.05-8.76-1.46-2.74-1.64-4.75-2.01-7.76h5.93c.36,2.28.73,4.1,2.01,6.02,1.64,2.65,6.03,6.12,13.78,6.12,1.28,0,7.02,0,10.86-3.47.82-.82,2.46-2.55,2.46-5.47,0-.73-.09-2.28-1.28-3.84-2.55-3.19-7.57-3.74-11.31-4.38-2.83-.46-5.66-1.01-8.4-1.65-6.65-1.64-12.32-4.38-12.32-12.23,0-1.28.09-3.92,1.92-6.75,2.28-3.47,7.67-7.11,17.16-7.11,1.83,0,8.76,0,13.96,3.92,1.01.73,2.28,2.01,3.01,3.01,1.83,2.47,2.38,5.02,2.92,7.94l-5.82.28Z',
  'M225.28,35.7h10.77v5.29h-10.77v29.45c0,.18,0,2.37.28,3.74.45,2.28,1.64,4.56,6.38,4.56,1.92,0,3.47-.36,4.11-.46v5.38c-1.56.28-2.74.63-5.84.63-2.82,0-5.48-.46-7.85-2.47-.46-.36-1.64-1.46-2.37-3.1-.55-1.55-.55-3.56-.64-5.11v-32.65h-7.93v-5.29h7.93v-8.5h5.93v8.51Z',
  'M281.58,39.87c3.47,2.74,8.94,8.86,8.94,19.99,0,5.01-1.09,8.49-1.83,10.31-2.1,5.66-8.39,14.78-23.63,14.78-5.11,0-9.76-1-14.06-3.92-9.67-6.39-10.49-17.43-10.49-21.17,0-1.83.19-6.12,2.1-10.68,2.19-5.11,8.03-13.87,22.45-14.23,2.55,0,10.31.09,16.52,4.92h0ZM257.22,41.88c-4.01,1.92-10.49,6.75-10.49,18.16,0,1.91.18,7.94,3.83,12.77,2.01,2.65,6.48,7.03,14.78,7.03,4.56,0,7.76-1.28,9.31-2.1,3.92-2.01,9.76-7.12,9.67-17.89,0-2.37-.09-8.58-4.66-13.78-1.91-2.1-6.3-5.93-14.05-5.93-1.38,0-4.84.18-8.4,1.73Z',
  'M339.53,52.83c-.55-2.01-1.01-3.28-1.92-5.01-1.73-3.02-5.75-7.49-14.23-7.49-11.87,0-19.43,8.31-19.43,19.9.09,11.41,7.48,19.44,19.07,19.44,7.3,0,10.95-3.02,13.05-5.3,1.73-2,2.65-3.74,3.02-4.66.73-1.46,1.09-2.82,1.28-3.37l5.93.91c-.64,2.01-1.91,6.66-5.93,10.95-2.83,3.02-7.85,6.75-17.61,6.75-1.83,0-7.12-.09-12.32-2.55-8.76-4.2-12.77-13.14-12.77-22.36,0-4.66,1.09-8.12,1.73-9.76,3.92-10.4,13.41-15.33,24-15.33,11.68,0,17.24,6.29,19.71,10.4,1.01,1.64,1.46,3.01,2.55,6.48l-6.12,1.01Z',
  'M382.97,83.68h7.86l-24.64-24.64,22.91-22.91h-7.82s-23.39,23.39-23.39,23.39V23.6h-5.84v60.08h5.84v-16.34l4.37-4.37,20.71,20.71Z',
];

const VIEWBOX = {
  icon: '400 -14 210 148',
  full: '-6 -14 616 148',
};

const EASE = {
  out: 'cubic-bezier(0.16, 1, 0.3, 1)',
  in: 'cubic-bezier(0.7, 0, 0.84, 0)',
  back: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
  soft: 'cubic-bezier(0.45, 0, 0.55, 1)',
};

type Frame = [at: string, declarations: string, easing?: string];

const keyframes = (name: string, frames: Frame[]) =>
  `@keyframes ${name} {${frames
    .map(([at, decl, ease]) => `${at} { ${decl}${ease ? `; animation-timing-function: ${ease}` : ''} }`)
    .join(' ')}}`;

const at = (t: string) => `transform: ${t}`;

// The dot appears, the big diamond grows out of it, the rest slide out from behind.
// Each piece overshoots its spot by a hair and settles; on the way back it nudges outward
// (anticipation) before folding home.
const REST = 'translate(0, 0) scale(1)';
const emerge = (from: string, overshoot: string, start: number, land: number, leave: number, gone: number): Frame[] => [
  [`0%, ${start}%`, `opacity: 0; ${at(from)}`, EASE.out],
  [`${start + 5}%`, 'opacity: 1'],
  [`${land - 4}%`, at(`translate(${overshoot}) scale(1)`), EASE.soft],
  [`${land}%`, at(REST)],
  [`${leave}%`, `opacity: 1; ${at(REST)}`, EASE.soft],
  [`${leave + 3}%`, at(`translate(${overshoot}) scale(1)`), EASE.in],
  [`${gone}%, 100%`, `opacity: 0; ${at(from)}`],
];
// Dark joints grow into place as the two pieces meet
const grow = (show: number, hide: number): Frame[] => [
  [`0%, ${show}%`, `opacity: 0; ${at('scale(0.4)')}`, EASE.back],
  [`${show + 6}%, ${hide}%`, `opacity: 1; ${at('scale(1)')}`, EASE.in],
  [`${hide + 3}%, 100%`, `opacity: 0; ${at('scale(0.4)')}`],
];
const TIMELINE: Record<string, Frame[]> = {
  dot: [
    ['0%', `opacity: 0; ${at('scale(0)')}`, EASE.back],
    ['9%', `opacity: 1; ${at('scale(1)')}`],
    ['86%', `opacity: 1; ${at('scale(1)')}`, EASE.soft],
    ['90%', at('scale(1.18)'), EASE.in],
    ['98%, 100%', `opacity: 0; ${at('scale(0)')}`],
  ],
  big: [
    ['0%, 4%', `opacity: 0; ${at('scale(0)')}`, EASE.out],
    ['9%', 'opacity: 1'],
    ['22%', at('scale(1.03)'), EASE.soft],
    ['28%, 38%', at('scale(1)'), EASE.soft],
    // Gets nudged as the square docks into its notch
    ['41%', at('scale(0.985)'), EASE.soft],
    ['46%', at('scale(1)')],
    ['80%', `opacity: 1; ${at('scale(1)')}`, EASE.soft],
    ['83%', at('scale(1.025)'), EASE.in],
    ['93%, 100%', `opacity: 0; ${at('scale(0)')}`],
  ],
  square: emerge('translate(-38px, 12.66px) scale(0.5)', '1.9px, -0.63px', 18, 40, 76, 89),
  small: emerge('translate(-36px, 0px) scale(0.6)', '2px, 0px', 26, 46, 74, 87),
  medium: emerge('translate(-25.36px, 0px) scale(0.7)', '2.5px, 0px', 36, 56, 72, 85),
  'joint-a': grow(38, 73),
  'joint-b': grow(53, 70),
};

const CSS_KEYFRAMES = [
  ...Object.entries(TIMELINE).map(
    ([key, frames]) => `${keyframes(`ssla-${key}`, frames)}\n.ssla__${key} { animation-name: ssla-${key}; }`,
  ),
  // A faint ring ripples out of the dot as it appears
  keyframes('ssla-seed', [
    ['0%', `opacity: 0; ${at('scale(0.6)')}`, EASE.out],
    ['3%', 'opacity: 0.6'],
    ['20%, 100%', `opacity: 0; ${at('scale(2.6)')}`],
  ]),
  // Soft depth builds as the logo forms and fades as it folds away
  keyframes('ssla-depth', [
    ['0%, 8%', 'filter: drop-shadow(0 0 0 rgba(0, 67, 115, 0))', EASE.soft],
    ['30%, 78%', 'filter: drop-shadow(0 6px 9px rgba(0, 67, 115, 0.2))', EASE.soft],
    ['94%, 100%', 'filter: drop-shadow(0 0 0 rgba(0, 67, 115, 0))'],
  ]),
  keyframes('ssla-sheen', [
    ['0%, 57%', `opacity: 0; ${at('translateX(0)')}`, EASE.soft],
    ['58%', 'opacity: 1'],
    ['71%', `opacity: 1; ${at('translateX(var(--ssla-sheen-travel))')}`],
    ['72%, 100%', `opacity: 0; ${at('translateX(var(--ssla-sheen-travel))')}`],
  ]),
  // The wordmark unfolds out of the icon: a reveal opens leftwards while the letters slide out
  keyframes('ssla-reveal', [
    ['0%, 30%', at('scaleX(0)'), EASE.out],
    ['52%, 72%', at('scaleX(1)'), EASE.in],
    ['86%, 100%', at('scaleX(0)')],
  ]),
  // Letters come out right to left (nearest the icon first) and go back left to right,
  // so the word always folds into the icon rather than vanishing from both ends
  ...LETTERS.map((_, i) => {
    const enter = Math.round(300 + (LETTERS.length - 1 - i) * 8) / 10;
    const leave = Math.round(700 + i * 8) / 10;
    const name = `ssla-letter-${i}`;
    return `${keyframes(name, [
      [`0%, ${enter}%`, `opacity: 0; ${at('translateX(28px)')}`, EASE.out],
      [`${enter + 16}%`, `opacity: 1; ${at('translateX(0)')}`],
      [`${leave}%`, `opacity: 1; ${at('translateX(0)')}`, EASE.in],
      [`${leave + 10}%, 100%`, `opacity: 0; ${at('translateX(28px)')}`],
    ])}\n.ssla__letter-${i} { animation-name: ${name}; }`;
  }),
].join('\n');

const SlimstockLogoAnimation: React.FC<SlimstockLogoAnimationProps> = ({
  showText = true,
  onDark = false,
  width = showText ? 440 : 200,
  duration = showText ? 5 : 4.4,
  className = '',
}) => {
  const uid = useId().replace(/[^a-zA-Z0-9_-]/g, '');
  const ids = {
    sheen: `ssla-sheen-${uid}`,
    logo: `ssla-logo-${uid}`,
    reveal: `ssla-reveal-${uid}`,
  };

  return (
    <div
      role="status"
      aria-label="Calculating"
      className={`ssla ${className}`}
      style={{
        '--ssla-dur': `${duration}s`,
        '--ssla-sheen-travel': showText ? '760px' : '300px',
        width,
      } as React.CSSProperties}
    >
      <svg viewBox={VIEWBOX[showText ? 'full' : 'icon']} overflow="visible" aria-hidden="true">
        <defs>
          <clipPath id={ids.logo}>
            {SHAPES.map(({ key, d }) => <path key={key} d={d} />)}
            {showText && LETTERS.map((d) => <path key={d} d={d} />)}
          </clipPath>
          <clipPath id={ids.reveal}>
            <rect className="ssla__reveal" x="-10" y="0" width="420" height="100" />
          </clipPath>
          <linearGradient id={ids.sheen} x1="0" x2="1" y1="0" y2="0">
            <stop offset="0" stopColor="#fff" stopOpacity="0" />
            <stop offset="0.5" stopColor="#fff" stopOpacity="0.55" />
            <stop offset="1" stopColor="#fff" stopOpacity="0" />
          </linearGradient>
        </defs>

        {showText && (
          <g clipPath={`url(#${ids.reveal})`} fill={onDark ? '#fff' : COLORS.word}>
            {LETTERS.map((d, i) => (
              <path key={d} d={d} className={`ssla__letter ssla__letter-${i}`} />
            ))}
          </g>
        )}

        <circle className="ssla__seed" cx="434.985" cy="60" r="12" stroke={COLORS.light} />
        {PIECES.map(({ key, d, fill }) => (
          <path key={key} d={d} fill={fill} className={`ssla__el ssla__${key}`} />
        ))}

        <g clipPath={`url(#${ids.logo})`}>
          {/* Runs at 45° so it travels parallel to the diamond edges */}
          <polygon
            className="ssla__sheen"
            points={showText ? '-170 130 -26 -14 -4 -14 -148 130' : '290 130 434 -14 456 -14 312 130'}
            fill={`url(#${ids.sheen})`}
          />
        </g>
      </svg>

      <style>{`
        .ssla { display: inline-block; line-height: 0; }
        .ssla svg {
          width: 100%;
          height: auto;
          animation: ssla-depth var(--ssla-dur) infinite;
        }

        .ssla__el,
        .ssla__letter,
        .ssla__reveal,
        .ssla__seed {
          transform-box: fill-box;
          transform-origin: center;
          animation-duration: var(--ssla-dur);
          animation-iteration-count: infinite;
          animation-fill-mode: backwards;
        }
        /* The big diamond grows out of the dot that sits inside it */
        .ssla__big { transform-origin: 20% 50%; }

        /* Opens from the icon side towards the left */
        .ssla__reveal { transform-origin: 100% 50%; animation-name: ssla-reveal; }
        .ssla__seed {
          fill: none;
          stroke-width: 1.2;
          vector-effect: non-scaling-stroke;
          opacity: 0;
          animation-name: ssla-seed;
        }
        .ssla__sheen {
          opacity: 0;
          animation: ssla-sheen var(--ssla-dur) infinite;
        }

        ${CSS_KEYFRAMES}

        @media (prefers-reduced-motion: reduce) {
          .ssla svg, .ssla__el, .ssla__letter, .ssla__reveal { animation: none; }
          .ssla__sheen, .ssla__seed { display: none; }
        }
      `}</style>
    </div>
  );
};

export default SlimstockLogoAnimation;
