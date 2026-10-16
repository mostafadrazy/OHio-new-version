import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

interface NavbarProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isMenuOpen, toggleMenu }) => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const menuToggleRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isMenuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    drawerRef.current?.querySelector<HTMLButtonElement>('button')?.focus();
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { toggleMenu(); menuToggleRef.current?.focus(); }
      if (event.key !== 'Tab') return;
      const controls = Array.from<HTMLElement>(drawerRef.current?.querySelectorAll<HTMLElement>('a, button') || []);
      const first = controls[0];
      const last = controls[controls.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
    };
    document.addEventListener('keydown', handleKey);
    return () => { document.body.style.overflow = previousOverflow; document.removeEventListener('keydown', handleKey); };
  }, [isMenuOpen, toggleMenu]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Define nav links with absolute paths (including hashes for sections)
  const navLinks = [
    { name: 'Construction', to: '/#construction' },
    { name: 'Insurance claims', to: '/#insurance' },
    { name: 'Investments', to: '/#investments' },
    { name: 'About us', to: '/why-us' },
  ];

  // Over the home page's dark hero photo the bar is transparent with white text;
  // once the page scrolls (and on every other page) it becomes a solid white bar.
  const onHero = isHomePage && !scrolled;

  const handleLinkClick = () => {
    if (isMenuOpen) toggleMenu();
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-[background-color,box-shadow,border-color,padding] duration-300 ease-out motion-reduce:transition-none ${onHero
          ? 'py-5 bg-transparent border-b border-white/15'
          : 'py-3 bg-white border-b border-black/5 shadow-[0_12px_30px_-22px_rgba(0,0,0,0.35)]'
          }`}
      >
        <div className="max-w-[1320px] mx-auto px-6 md:px-10 flex justify-between items-center">

          {/* Logo */}
          <Link to="/" className="group flex items-center z-50" aria-label="Essa Estates home">
            <Logo light={onHero} textSize="text-xl md:text-2xl" iconSize="h-7 w-auto md:h-8" />
          </Link>

          {/* Desktop Nav */}
          <nav aria-label="Main navigation" className="hidden xl:flex items-center">
            <div className="flex gap-9">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  className={`text-[15px] font-medium relative group py-1.5 transition-colors duration-300 ${onHero ? 'text-white/85 hover:text-white' : 'text-gray-600 hover:text-black'}`}
                >
                  {link.name}
                  {/* A small curved yellow stroke draws in under the hovered link. */}
                  <svg className="absolute left-0 -bottom-1.5 w-full h-2 text-essa-yellow pointer-events-none" viewBox="0 0 100 10" preserveAspectRatio="none" aria-hidden="true">
                    <path d="M3 7 Q 50 0 97 6" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" vectorEffect="non-scaling-stroke"
                      pathLength={1} strokeDasharray="1" className="opacity-0 [stroke-dashoffset:1] group-hover:opacity-100 group-hover:[stroke-dashoffset:0] transition-[stroke-dashoffset,opacity] duration-500 ease-out" />
                  </svg>
                </Link>
              ))}
            </div>
          </nav>

          <div className="hidden xl:flex items-center gap-5">
            <a href="tel:+19375209357" className={`flex items-center gap-2.5 text-[15px] font-semibold transition-colors duration-300 ${onHero ? 'text-white hover:text-essa-yellow' : 'text-gray-900 hover:text-black'}`}>
              <span className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-300 ${onHero ? 'bg-white/15' : 'bg-gray-100'}`}>
                <i className="fa-solid fa-phone text-xs text-essa-yellow"></i>
              </span>
              (937) 520-9357
            </a>
            <Link to="/sell" className={`rounded-full font-semibold transition-colors duration-300 px-6 py-3 text-sm bg-essa-yellow text-black ${onHero ? 'hover:bg-white' : 'hover:bg-black hover:text-white'}`}>
              Sell Now
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            ref={menuToggleRef}
            onClick={toggleMenu}
            className={`xl:hidden p-2 transition-colors z-50 ${onHero ? 'text-white hover:text-essa-yellow' : 'text-gray-900 hover:text-essa-yellow'}`}
            aria-label="Open menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <i className="fa-solid fa-bars text-2xl"></i>
          </button>
        </div>
      </header>

      {/* Mobile Menu Backdrop */}
      <div
        className={`fixed inset-0 bg-black/20 backdrop-blur-sm z-50 transition-opacity duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
          }`}
        onClick={toggleMenu}
      />

      {/* Mobile Menu Slide-in Drawer */}
      <div
        id="mobile-menu"
        ref={drawerRef}
        role="dialog"
        aria-modal={isMenuOpen || undefined}
        aria-label="Navigation menu"
        inert={!isMenuOpen}
        className={`fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white border-l border-black/5 shadow-2xl z-50 transform transition-transform duration-300 ease-out flex flex-col ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        {/* Drawer Header */}
        <div className="flex justify-between items-center p-6 border-b border-black/5">
          <span className="font-sans text-xl font-bold tracking-tight text-gray-900">
            Menu
          </span>
          <button
            onClick={toggleMenu}
            aria-label="Close menu"
            className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center text-gray-900 hover:bg-essa-yellow hover:text-black transition-all duration-300"
          >
            <i className="fa-solid fa-xmark text-lg"></i>
          </button>
        </div>

        {/* Drawer Links */}
        <nav className="flex-grow flex flex-col p-6 overflow-y-auto">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                onClick={handleLinkClick}
                className="text-2xl font-bold text-gray-800 hover:text-essa-yellow transition-colors tracking-tight py-4 border-b border-black/5 last:border-0"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="mt-auto pt-8">
            <a href="tel:+19375209357" className="text-xl text-gray-900 font-medium flex items-center gap-3 mb-6 group">
              <div className="w-10 h-10 rounded-full bg-essa-yellow/20 flex items-center justify-center group-hover:bg-essa-yellow transition-colors duration-300">
                <i className="fa-solid fa-phone text-essa-yellow text-sm group-hover:text-black"></i>
              </div>
              +1 (937) 520-9357
            </a>

            <Link
              to="/sell"
              onClick={toggleMenu}
              className="block w-full text-center bg-essa-yellow text-black px-6 py-4 rounded-xl text-lg font-bold hover:bg-black hover:text-white transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] shadow-yellow hover:shadow-[0_10px_30px_rgba(0,0,0,0.4)] hover:-translate-y-1 active:scale-[0.98]"
            >
              Sell Now
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
