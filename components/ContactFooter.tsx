import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Reveal from './Reveal';
import WordHighlight from './WordHighlight';
import AddressInput, { sellAddressUrl, type PropertyAddress } from './AddressInput';

const ContactFooter: React.FC<{ propertyOverview?: boolean }> = ({ propertyOverview = false }) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [selectedAddress, setSelectedAddress] = useState<PropertyAddress | null>(null);
    const location = useLocation();

    // Use consistent full paths with hashes for cross-page navigation
    const footerLinks = [
        { name: 'Construction', to: '/#construction' },
        { name: 'Insurance claims', to: '/#insurance' },
        { name: 'Investments', to: '/#investments' },
        { name: 'FAQ', to: '/faq' },
    ];

    return (
        <footer id="contact" className="bg-neutral-100 pt-20 border-t border-black/5 relative">

            {/* Decorative Top Gradient */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* 1. Redesigned Call to Action (CTA) Banner */}
                <Reveal className="w-full" direction="up">
                    <div className="relative rounded-[2rem] text-left mb-32 border border-black/5 group bg-[#F9F8F4] flex flex-col lg:flex-row items-stretch justify-between overflow-hidden">

                        {/* Content */}
                        <div className="relative z-10 w-full lg:w-1/2 flex flex-col gap-6 p-8 md:p-12 lg:p-14">
                            <div>
                                <span className="inline-block py-1 px-3 rounded-full bg-white border border-black/10 text-essa-yellow text-xs font-bold uppercase tracking-widest mb-4 shadow-sm">
                                    {propertyOverview ? 'YOUR NEXT MOVE' : 'No Obligation • Free Analysis'}
                                </span>
                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-[1.1] tracking-tight">
                                    {propertyOverview ? 'We buy properties' : "Unlock your home's"} <br className="hidden md:block" />
                                    {propertyOverview ? <>as <WordHighlight>well</WordHighlight>.</> : <span className="relative inline-block">
                                        true value.
                                        <svg className="absolute w-full h-2 -bottom-1 left-0 text-essa-yellow" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.00025 6.99997C25.7201 5.20035 73.2447 2.17478 197.971 3" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /></svg>
                                    </span>}
                                </h2>
                                <p className="text-gray-600 text-base md:text-lg font-light leading-relaxed max-w-lg">
                                    {propertyOverview ? 'Have a property to sell? Tell us about your home and explore what comes next.' : 'Skip the open houses, repairs, and fees. Join over 500 families who chose the modern, stress-free way to sell.'}
                                </p>
                            </div>

                            {/* Input Form */}
                            <form onSubmit={event => { event.preventDefault(); navigate(propertyOverview ? sellAddressUrl(email, selectedAddress) : "/contact"); }} className="relative group/form w-full max-w-md">
                                <div className="footer-address-shell relative flex flex-col sm:flex-row gap-2 bg-white border border-black/10 p-2 rounded-2xl sm:rounded-full shadow-[0_12px_32px_-20px_rgba(17,24,39,0.22)]">
                                    <div className="flex-grow flex items-center px-4">
                                        <i aria-hidden="true" className={`${propertyOverview ? "fa-solid fa-location-dot" : "fa-regular fa-envelope"} text-gray-500 mr-3`}></i>
                                        {propertyOverview ? <AddressInput id="footer-property-address" aria-label="Property address" className="footer-address-input" value={email} onChange={value => { setEmail(value); setSelectedAddress(null); }} onSelect={setSelectedAddress} /> : (<input
                                            type={propertyOverview ? "text" : "email"}
                                            aria-label={propertyOverview ? "Property address" : "Email address"}
                                            required
                                            autoComplete={propertyOverview ? "street-address" : "email"}
                                            placeholder={propertyOverview ? "Your property address..." : "Enter your email..."}
                                            className="w-full bg-transparent border-none text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 py-2 md:py-3"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />)}
                                    </div>
                                    <button type="submit" className="bg-essa-yellow text-black px-6 py-3 rounded-xl sm:rounded-full font-semibold hover:bg-black hover:text-white transition-colors duration-300 whitespace-nowrap flex items-center justify-center gap-2 active:scale-95">
                                        Get Started <i className="fa-solid fa-arrow-right -rotate-45"></i>
                                    </button>
                                </div>
                            </form>
                        </div>

                        {/* 3D Image Composition */}
                        <div className="relative z-20 w-full lg:w-1/2 h-64 lg:h-auto pointer-events-none">
                            <div className="absolute inset-0 w-full h-full">
                                {/* Shadow under the house */}
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-12 bg-black/20 blur-2xl rounded-[100%] transition-all duration-700 group-hover:w-[50%] group-hover:opacity-50"></div>

                                {/* The House Image */}
                                <img
                                    src="https://res.cloudinary.com/dmnqlruhl/image/upload/v1772107522/Whisk_e7ce7s2f4048217c92594d3e2fa728a01dr_azfphp.png"
                                    alt="3D House"
                                    className="w-full h-full object-cover object-left transform transition-transform duration-700 group-hover:scale-105"
                                    referrerPolicy="no-referrer"
                                />
                            </div>
                        </div>
                    </div>
                </Reveal>

                {/* 2. Redesigned Footer Content */}
                <Reveal delay={0.2} className="w-full">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-black/5 pb-16">

                        {/* Column 1: Brand (Span 4) */}
                        <div className="md:col-span-4 pr-8">
                            <Link to="/" className="inline-block font-sans text-3xl font-bold tracking-tight text-gray-900 mb-6 group">
                                ESSA<span className="font-light group-hover:text-essa-yellow transition-colors">ESTATES</span>
                                <div className="w-2 h-2 rounded-full bg-essa-yellow mt-1 ml-0.5 inline-block group-hover:scale-150 transition-transform duration-500"></div>
                            </Link>
                            <p className="text-gray-500 leading-relaxed mb-8 font-light">
                                {propertyOverview ? 'Rebuilding homes with greater possibilities. Construction, renovation, and estate investments in Ohio.' : 'Stripping away the complexity of traditional real estate. We provide fair, stress-free, as-is cash closings for homeowners in Ohio.'}
                            </p>

                            {/* Social Icons */}
                            <div className="flex gap-4">
                                {['instagram', 'facebook-f', 'linkedin-in', 'twitter'].map((icon) => (
                                    <a key={icon} href="#" className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center text-gray-400 hover:text-black hover:bg-essa-yellow hover:border-essa-yellow transition-colors duration-300">
                                        <i className={`fa-brands fa-${icon}`}></i>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Column 2: Contact Info (Span 3) */}
                        <div className="md:col-span-3">
                            <h4 className="text-gray-900 font-semibold text-base mb-6 flex items-center gap-2">
                                <span className="w-1 h-4 bg-essa-yellow rounded-full"></span> Contact
                            </h4>
                            <ul className="space-y-6">
                                <li className="group">
                                    <span className="text-xs font-bold text-gray-500 uppercase tracking-widest block mb-1">Email</span>
                                    <a href="mailto:Info@essaestates.com" className="text-gray-800 text-lg hover:text-essa-yellow transition-colors flex items-center gap-2">Info@essaestates.com <i className="fa-solid fa-arrow-right text-xs opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"></i></a>
                                </li>
                                <li className="group">
                                    <span className="text-xs font-bold text-gray-500 uppercase tracking-widest block mb-1">Phone</span>
                                    <a href="tel:19375209357" className="text-gray-800 text-lg hover:text-essa-yellow transition-colors flex items-center gap-2">+1 (937) 520-9357 <i className="fa-solid fa-arrow-right text-xs opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"></i></a>
                                </li>
                                <li>
                                    <span className="text-xs font-bold text-gray-500 uppercase tracking-widest block mb-1">Hours</span>
                                    <span className="text-gray-600">Mon - Sat • 8am - 6pm</span>
                                </li>
                            </ul>
                        </div>

                        {/* Column 3: Locations (Span 3) */}
                        <div className="md:col-span-3">
                            <h4 className="text-gray-900 font-semibold text-base mb-6 flex items-center gap-2">
                                <span className="w-1 h-4 bg-essa-yellow rounded-full"></span> Locations
                            </h4>
                            <div className="space-y-6">
                                <div>
                                    <Link to="/sell-my-house-dayton" className="text-gray-800 font-medium mb-1 hover:text-essa-yellow transition-colors block">Dayton, Ohio</Link>
                                    <p className="text-gray-500 text-sm">Primary Market & Operations</p>
                                </div>
                                <div>
                                    <Link to="/sell-my-house-cincinnati" className="text-gray-800 font-medium mb-1 hover:text-essa-yellow transition-colors block">Cincinnati, Ohio</Link>
                                    <p className="text-gray-500 text-sm">Serving Hamilton County</p>
                                </div>
                                <div>
                                    <Link to="/sell-my-house-cleveland" className="text-gray-800 font-medium mb-1 hover:text-essa-yellow transition-colors block">Cleveland, Ohio</Link>
                                    <p className="text-gray-500 text-sm">Cuyahoga & Surrounding</p>
                                </div>
                                <div>
                                    <Link to="/sell-my-house-columbus" className="text-gray-800 font-medium mb-1 hover:text-essa-yellow transition-colors block">Columbus, Ohio</Link>
                                    <p className="text-gray-500 text-sm">Franklin County</p>
                                </div>
                            </div>
                        </div>

                        {/* Column 4: Links (Span 2) */}
                        <div className="md:col-span-2">
                            <h4 className="text-gray-900 font-semibold text-base mb-6 flex items-center gap-2">
                                <span className="w-1 h-4 bg-essa-yellow rounded-full"></span> Menu
                            </h4>
                            <ul className="space-y-4">
                                {footerLinks.map((link) => (
                                    <li key={link.name}>
                                        <Link to={link.to} className="text-gray-500 hover:text-black hover:translate-x-1 transition-all inline-block hover:text-essa-yellow">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </Reveal>

                {/* 3. Bottom Bar */}
                <div className="py-10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>© {new Date().getFullYear()} Essa Estates. All rights reserved.</p>
                    <div className="flex gap-8 mt-4 md:mt-0 font-medium">
                        <Link to="/privacy" className="hover:text-black transition-colors">Privacy Policy</Link>
                        <Link to="/terms" className="hover:text-black transition-colors">Terms of Service</Link>
                        <Link to="/cookies" className="hover:text-black transition-colors">Cookie Settings</Link>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default ContactFooter;