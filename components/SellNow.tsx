import React, { useState, useRef, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import Reveal from './Reveal';
import AddressInput from './AddressInput';

declare global {
    interface Window {
        google: any;
    }
}

const SellNow: React.FC = () => {
    const [formData, setFormData] = useState({
        address: '',
        city: '',
        state: '',
        zip: '',
        propertyType: '',
        bedrooms: '',
        bathrooms: '',
        condition: '',
        askingPrice: '',
        phone: '',
        name: '',
        email: '',
        reason: ''
    });

    const [currentStep, setCurrentStep] = useState(1);
    const totalSteps = 3;

    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');
    const addressInputRef = useRef<HTMLInputElement>(null);
    const location = useLocation();

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const addressParam = searchParams.get('address');
        const cityParam = searchParams.get('city');
        const stateParam = searchParams.get('state');
        const zipParam = searchParams.get('zip');

        if (addressParam) {
            setFormData(prev => ({
                ...prev,
                address: addressParam,
                city: cityParam || prev.city,
                state: stateParam || prev.state,
                zip: zipParam || prev.zip
            }));
        }

    }, [location.search]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateStep = () => {
        if (currentStep === 1) {
            if (!formData.address.trim() || !formData.city.trim() || !formData.state.trim() || !formData.zip.trim()) {
                setError('Please fill in all location fields.');
                return false;
            }
        } else if (currentStep === 2) {
            if (!formData.propertyType || !formData.condition || !formData.bedrooms || !formData.bathrooms) {
                setError('Please fill in all property details.');
                return false;
            }
        }
        setError('');
        return true;
    };

    const nextStep = () => {
        if (validateStep()) {
            setCurrentStep(prev => Math.min(prev + 1, totalSteps));
        }
    };

    const prevStep = () => {
        setCurrentStep(prev => Math.max(prev - 1, 1));
        setError('');
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (currentStep < totalSteps) { nextStep(); return; }
        if (!validateStep()) return;

        setIsSubmitting(true);
        setError('');

        try {
            const SERVICE_ID = 'service_us893v7';
            const PUBLIC_KEY = 'ZRYlOF3dpkaEiHGbm';

            const adminPromise = emailjs.send(
                SERVICE_ID,
                'template_7ofng5l',
                {
                    to_name: "Essa Estates Team",
                    from_name: formData.name,
                    reply_to: formData.email,
                    ...formData,
                    map_link: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(formData.address + ' ' + formData.city + ' ' + formData.state)}`
                },
                PUBLIC_KEY
            );

            const customerPromise = emailjs.send(
                SERVICE_ID,
                'template_szikkns',
                {
                    to_name: formData.name,
                    to_email: formData.email,
                    ...formData
                },
                PUBLIC_KEY
            ).catch(err => {
                console.warn("Customer confirmation email failed:", err);
            });

            await Promise.all([adminPromise, customerPromise]);

            setSubmitted(true);
            window.scrollTo({ top: 0, behavior: 'smooth' });

        } catch (err) {
            console.error('EmailJS Error:', err);
            setError('We encountered a connection issue. Please try again or call us directly at +1 (937) 520-9357.');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (submitted) {
        return (
            <div className="min-h-screen pt-24 pb-20 flex items-center justify-center bg-white relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-essa-yellow/10 rounded-full blur-[120px] pointer-events-none"></div>

                <Reveal>
                    <div className="relative text-center p-10 md:p-16 max-w-2xl mx-auto bg-white border border-black/5 rounded-3xl shadow-2xl z-10 overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-essa-yellow to-transparent"></div>

                        <div className="relative w-24 h-24 mx-auto mb-8">
                            <div className="absolute inset-0 bg-essa-yellow rounded-full animate-ping opacity-20"></div>
                            <div className="relative w-full h-full bg-essa-yellow rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(255,215,0,0.3)]">
                                <i className="fa-solid fa-check text-4xl text-black"></i>
                            </div>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">Offer Requested</h1>
                        <p className="text-gray-600 text-lg mb-8">We're preparing your cash offer.</p>

                        <div className="bg-gray-50 border border-black/5 rounded-2xl p-6 mb-8 text-left">
                            <p className="text-gray-700 mb-2">
                                Thank you, <span className="text-gray-900 font-semibold">{formData.name}</span>.
                            </p>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                We've received your details for <span className="text-essa-yellow font-semibold">{formData.address}</span>. Our acquisitions team is currently running a comprehensive market analysis.
                            </p>
                        </div>

                        <div className="flex flex-col gap-3 text-sm text-gray-600 mb-10">
                            <div className="flex items-center justify-center gap-3">
                                <i className="fa-solid fa-envelope text-green-500"></i>
                                <span>Confirmation sent to <strong className="text-gray-900">{formData.email}</strong></span>
                            </div>
                            <div className="flex items-center justify-center gap-3">
                                <i className="fa-solid fa-phone text-essa-yellow"></i>
                                <span>Expect a call within 24 hours</span>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/" className="px-8 py-4 rounded-xl font-semibold text-gray-900 border border-black/10 hover:bg-black/5 transition-colors">
                                Return Home
                            </Link>
                            <a href="tel:+19375209357" className="px-8 py-4 rounded-xl font-semibold bg-essa-yellow text-black hover:bg-yellow-400 transition-colors shadow-lg">
                                Call Us Now
                            </a>
                        </div>
                    </div>
                </Reveal>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white pt-32 pb-24 overflow-x-hidden font-sans selection:bg-essa-yellow selection:text-black">

            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-essa-yellow/10 rounded-full blur-[150px]"></div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <Reveal direction="down">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-white border border-black/5 text-gray-600 text-xs font-semibold uppercase tracking-wider mb-6 shadow-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-essa-yellow animate-pulse"></span>
                            Fast & Transparent
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 leading-[1.1] tracking-tight font-sans">
                            Get Your <span className="text-essa-yellow">Cash Offer</span>
                        </h1>
                        <p className="text-lg text-gray-600 font-light">
                            Complete the steps below to receive your no-obligation offer.
                        </p>
                    </div>
                </Reveal>

                <Reveal direction="up" delay={0.1}>
                    <div className="bg-white border border-black/5 rounded-3xl p-6 md:p-12 shadow-xl relative">

                        {/* Progress Bar */}
                        <div className="mb-10">
                            <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">
                                <span className={currentStep >= 1 ? 'text-essa-yellow' : ''}>Location</span>
                                <span className={currentStep >= 2 ? 'text-essa-yellow' : ''}>Details</span>
                                <span className={currentStep >= 3 ? 'text-essa-yellow' : ''}>Contact</span>
                            </div>
                            <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-essa-yellow transition-all duration-500 ease-out"
                                    style={{ width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%` }}
                                ></div>
                            </div>
                        </div>

                        {error && (
                            <div role="alert" className="mb-8 bg-red-500/10 border border-red-500/30 text-red-700 px-4 py-3 rounded-lg text-sm flex items-center gap-2">
                                <i className="fa-solid fa-circle-exclamation"></i>
                                {error}
                            </div>
                        )}

                        <form onSubmit={handleSubmit}>

                            {/* Step 1: Location */}
                            {currentStep === 1 && (
                                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-6 font-sans">Where is the property located?</h2>

                                    <div>
                                        <label className="block text-xs font-medium text-gray-500 mb-2 uppercase tracking-wide" htmlFor="sell-address">Street Address</label>
                                        <AddressInput id="sell-address" ref={addressInputRef} value={formData.address} className="w-full bg-gray-50 border border-black/10 rounded-xl px-4 py-4 text-gray-900 focus:border-essa-yellow focus:ring-1 focus:ring-essa-yellow outline-none text-lg" onChange={address => setFormData(prev => ({ ...prev, address }))} onSelect={place => setFormData(prev => ({ ...prev, ...place }))} />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                        <div>
                                            <label className="block text-xs font-medium text-gray-500 mb-2 uppercase tracking-wide" htmlFor="sell-city">City</label>
                                            <input id="sell-city" autoComplete="address-level2" type="text" name="city" value={formData.city} required className="w-full bg-gray-50 border border-black/10 rounded-xl px-4 py-4 text-gray-900 focus:border-essa-yellow focus:ring-1 focus:ring-essa-yellow transition-all outline-none text-lg" placeholder="Dayton" onChange={handleChange} />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-medium text-gray-500 mb-2 uppercase tracking-wide" htmlFor="sell-state">State</label>
                                            <input id="sell-state" autoComplete="address-level1" type="text" name="state" value={formData.state} required className="w-full bg-gray-50 border border-black/10 rounded-xl px-4 py-4 text-gray-900 focus:border-essa-yellow focus:ring-1 focus:ring-essa-yellow transition-all outline-none text-lg" placeholder="OH" onChange={handleChange} />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-medium text-gray-500 mb-2 uppercase tracking-wide" htmlFor="sell-zip">Zip Code</label>
                                            <input id="sell-zip" autoComplete="postal-code" inputMode="numeric" type="text" name="zip" value={formData.zip} required className="w-full bg-gray-50 border border-black/10 rounded-xl px-4 py-4 text-gray-900 focus:border-essa-yellow focus:ring-1 focus:ring-essa-yellow transition-all outline-none text-lg" placeholder="45402" onChange={handleChange} />
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Step 2: Details */}
                            {currentStep === 2 && (
                                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-6 font-sans">Tell us about the property</h2>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-xs font-medium text-gray-500 mb-2 uppercase tracking-wide">Property Type</label>
                                            <select name="propertyType" value={formData.propertyType} required className="w-full bg-gray-50 border border-black/10 rounded-xl px-4 py-4 text-gray-900 appearance-none focus:border-essa-yellow focus:ring-1 focus:ring-essa-yellow transition-all outline-none text-lg" onChange={(e) => handleChange(e as any)}>
                                                <option value="" disabled>Select Type</option>
                                                <option value="Single Family">Single Family</option>
                                                <option value="Townhouse">Townhouse</option>
                                                <option value="Condo">Condo</option>
                                                <option value="Multi-Family">Multi-Family</option>
                                                <option value="Land">Land</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label className="block text-xs font-medium text-gray-500 mb-2 uppercase tracking-wide">Condition</label>
                                            <select name="condition" value={formData.condition} required className="w-full bg-gray-50 border border-black/10 rounded-xl px-4 py-4 text-gray-900 appearance-none focus:border-essa-yellow focus:ring-1 focus:ring-essa-yellow transition-all outline-none text-lg" onChange={(e) => handleChange(e as any)}>
                                                <option value="" disabled>Select Condition</option>
                                                <option value="Excellent">Excellent (Move-in ready)</option>
                                                <option value="Good">Good (Minor updates)</option>
                                                <option value="Fair">Fair (Needs repairs)</option>
                                                <option value="Poor">Poor (Major repairs)</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label className="block text-xs font-medium text-gray-500 mb-2 uppercase tracking-wide">Bedrooms</label>
                                            <input type="number" name="bedrooms" value={formData.bedrooms} required className="w-full bg-gray-50 border border-black/10 rounded-xl px-4 py-4 text-gray-900 focus:border-essa-yellow focus:ring-1 focus:ring-essa-yellow transition-all outline-none text-lg" placeholder="e.g. 3" onChange={handleChange} />
                                        </div>

                                        <div>
                                            <label className="block text-xs font-medium text-gray-500 mb-2 uppercase tracking-wide">Bathrooms</label>
                                            <input type="number" step="0.5" name="bathrooms" value={formData.bathrooms} required className="w-full bg-gray-50 border border-black/10 rounded-xl px-4 py-4 text-gray-900 focus:border-essa-yellow focus:ring-1 focus:ring-essa-yellow transition-all outline-none text-lg" placeholder="e.g. 2" onChange={handleChange} />
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Step 3: Contact */}
                            {currentStep === 3 && (
                                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-6 font-sans">Where should we send your offer?</h2>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-xs font-medium text-gray-500 mb-2 uppercase tracking-wide">Full Name</label>
                                            <input type="text" name="name" value={formData.name} required className="w-full bg-gray-50 border border-black/10 rounded-xl px-4 py-4 text-gray-900 focus:border-essa-yellow focus:ring-1 focus:ring-essa-yellow transition-all outline-none text-lg" placeholder="John Doe" onChange={handleChange} />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-medium text-gray-500 mb-2 uppercase tracking-wide">Phone Number</label>
                                            <input type="tel" name="phone" value={formData.phone} required className="w-full bg-gray-50 border border-black/10 rounded-xl px-4 py-4 text-gray-900 focus:border-essa-yellow focus:ring-1 focus:ring-essa-yellow transition-all outline-none text-lg" placeholder="(555) 123-4567" onChange={handleChange} />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-medium text-gray-500 mb-2 uppercase tracking-wide">Email Address</label>
                                        <input type="email" name="email" value={formData.email} required className="w-full bg-gray-50 border border-black/10 rounded-xl px-4 py-4 text-gray-900 focus:border-essa-yellow focus:ring-1 focus:ring-essa-yellow transition-all outline-none text-lg" placeholder="john@example.com" onChange={handleChange} />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-medium text-gray-500 mb-2 uppercase tracking-wide">Reason for Selling (Optional)</label>
                                        <textarea name="reason" value={formData.reason} rows={3} className="w-full bg-gray-50 border border-black/10 rounded-xl px-4 py-4 text-gray-900 focus:border-essa-yellow focus:ring-1 focus:ring-essa-yellow transition-all outline-none resize-none text-lg" placeholder="e.g. Relocating, inherited property..." onChange={handleChange}></textarea>
                                    </div>
                                </div>
                            )}

                            {/* Navigation Buttons */}
                            <div className="mt-10 pt-8 border-t border-black/5 flex items-center justify-between">
                                {currentStep > 1 ? (
                                    <button
                                        type="button"
                                        onClick={prevStep}
                                        className="px-6 py-3 rounded-xl font-semibold text-gray-700 border border-black/10 hover:bg-black/5 transition-colors flex items-center gap-2"
                                    >
                                        <i className="fa-solid fa-arrow-left"></i> Back
                                    </button>
                                ) : (
                                    <div></div> // Spacer
                                )}

                                {currentStep < totalSteps ? (
                                    <button
                                        type="button"
                                        onClick={nextStep}
                                        className="px-8 py-3 rounded-xl font-bold bg-essa-yellow text-black hover:bg-yellow-400 transition-colors shadow-lg flex items-center gap-2"
                                    >
                                        Next Step <i className="fa-solid fa-arrow-right"></i>
                                    </button>
                                ) : (
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={`
                                        px-8 py-3 rounded-xl font-bold bg-essa-yellow text-black transition-all shadow-lg flex items-center gap-2
                                        ${isSubmitting ? 'opacity-70 cursor-wait' : 'hover:bg-yellow-400 hover:-translate-y-0.5'}
                                    `}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <i className="fa-solid fa-circle-notch animate-spin"></i> Processing...
                                            </>
                                        ) : (
                                            <>
                                                Get My Cash Offer <i className="fa-solid fa-check"></i>
                                            </>
                                        )}
                                    </button>
                                )}
                            </div>

                            <div className="text-center text-xs text-gray-600 mt-6 flex items-center justify-center gap-2">
                                <i className="fa-solid fa-lock"></i> 256-bit SSL secured and kept 100% private.
                            </div>
                        </form>
                    </div>
                </Reveal>
            </div>
        </div>
    );
}

export default SellNow;
