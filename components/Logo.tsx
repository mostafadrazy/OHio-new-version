import React from 'react';

interface LogoProps {
  className?: string;
  textSize?: string;
  iconSize?: string;
  /** White mark and wordmark, for dark backgrounds. */
  light?: boolean;
}

const Logo: React.FC<LogoProps> = ({
  className = "",
  textSize = "text-2xl md:text-3xl",
  iconSize = "h-7 w-auto md:h-8",
  light = false
}) => {
  const tone = light ? 'text-white' : 'text-black';
  return (
    <div className={`flex items-center gap-2.5 font-sans select-none ${className}`}>
      {/* SVG Icon from current design requirements */}
      <svg
        id="Layer_2"
        className={`${iconSize} shrink-0 ${tone} group-hover:text-essa-yellow hover:text-essa-yellow transition-all duration-300 ease-in-out group-hover:scale-105`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 45.01 42.29"
        aria-hidden="true"
      >
        <g id="Layer_1-2">
          <g fill="currentColor" fillRule="evenodd">
            <polygon points="20.93 0 20.93 30.21 18.31 31.72 15.7 33.23 13.08 34.74 10.46 36.25 7.85 37.76 5.23 39.27 0 42.29 0 36.25 2.62 34.74 5.23 33.23 7.85 31.72 10.46 30.21 13.08 28.7 15.7 27.19 15.7 9.06 13.08 10.57 10.46 12.08 7.85 13.59 5.23 15.1 2.62 16.61 0 18.12 0 12.08 2.62 10.57 5.23 9.06 7.85 7.55 10.46 6.04 13.08 4.53 15.7 3.02 18.31 1.51 20.93 0" />
            <polygon points="45.01 24.16 45.01 30.21 39.78 27.19 37.16 25.68 34.55 24.17 34.55 18.12 37.16 19.63 39.78 21.14 42.4 22.65 45.01 24.16" />
            <polygon points="10.46 18.12 10.46 24.17 7.85 25.68 5.23 27.19 0 30.21 0 24.16 2.62 22.65 5.23 21.14 7.85 19.63 10.46 18.12" />
            <polygon points="45.01 12.08 45.01 18.12 42.4 16.61 39.78 15.1 37.16 13.59 34.55 12.08 31.93 10.57 29.32 9.06 29.32 27.19 31.93 28.7 34.55 30.21 37.16 31.72 39.78 33.23 42.4 34.74 45.01 36.25 45.01 42.29 39.78 39.27 37.16 37.76 34.55 36.25 31.93 34.74 29.32 33.23 26.7 31.72 24.09 30.21 24.09 0 26.7 1.51 29.32 3.02 31.93 4.53 34.55 6.04 37.16 7.55 39.78 9.06 42.4 10.57 45.01 12.08" />
          </g>
        </g>
      </svg>
      <span className={`${textSize} font-extrabold tracking-tight ${tone} group-hover:text-essa-yellow hover:text-essa-yellow transition-colors duration-300`}>
        ESSA<span className={`font-light ${tone} group-hover:text-essa-yellow hover:text-essa-yellow transition-colors duration-300`}>ESTATES</span>
      </span>
    </div>
  );
};

export default Logo;
