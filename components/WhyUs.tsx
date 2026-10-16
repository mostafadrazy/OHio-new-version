import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Reveal from './Reveal';
import NetProfitCalculator from './NetProfitCalculator';

const WhyUs: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-white pt-28 pb-20 overflow-x-hidden">
             
             {/* Background Ambience */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-black/5 rounded-full blur-[150px]"></div>
                <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-essa-yellow/10 rounded-full blur-[150px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                
                {/* Hero Section */}
                <div className="text-center mb-20">
                    <Reveal direction="down">
                        <span className="inline-block py-1 px-3 rounded-full bg-essa-yellow/10 border border-essa-yellow/20 text-essa-yellow text-xs font-bold uppercase tracking-widest mb-6">
                            The Modern Choice
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                            Why Sell to <br/>
                            <span className="text-gray-900">Essa Estates?</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
                            Traditional real estate is broken. It's slow, expensive, and stressful. We built a process that prioritizes your timeline and your bottom line.
                        </p>
                    </Reveal>
                </div>

                {/* The Calculator */}
                <div className="mb-32">
                    <NetProfitCalculator />
                </div>

                {/* Feature Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-24">
                    <Reveal delay={0.1} direction="up" className="bg-white border border-black/10 p-8 rounded-[2rem] hover:border-essa-yellow/30 transition-all duration-300 shadow-sm">
                        <div className="w-16 h-16 rounded-full bg-black/5 flex items-center justify-center text-2xl text-gray-900 mb-6 border border-black/10 shadow-lg">
                            <i className="fa-solid fa-calendar-xmark"></i>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">No Uncertainty</h3>
                        <p className="text-gray-600 leading-relaxed">
                            With an agent, buyers can pull out at the last minute due to financing issues. Our cash is ready. When we sign, we close. Guaranteed.
                        </p>
                    </Reveal>
                    
                    <Reveal delay={0.2} direction="up" className="bg-white border border-black/10 p-8 rounded-[2rem] hover:border-essa-yellow/30 transition-all duration-300 shadow-sm">
                        <div className="w-16 h-16 rounded-full bg-black/5 flex items-center justify-center text-2xl text-gray-900 mb-6 border border-black/10 shadow-lg">
                            <i className="fa-solid fa-user-shield"></i>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Total Privacy</h3>
                        <p className="text-gray-600 leading-relaxed">
                            No "For Sale" sign in your yard. No photos of your bedroom on the internet. No neighbors asking questions. Your sale is between you and us.
                        </p>
                    </Reveal>

                    <Reveal delay={0.3} direction="up" className="bg-white border border-black/10 p-8 rounded-[2rem] hover:border-essa-yellow/30 transition-all duration-300 shadow-sm">
                        <div className="w-16 h-16 rounded-full bg-black/5 flex items-center justify-center text-2xl text-gray-900 mb-6 border border-black/10 shadow-lg">
                            <i className="fa-solid fa-hand-holding-heart"></i>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Compassionate Service</h3>
                        <p className="text-gray-600 leading-relaxed">
                            We specialize in difficult situations like probate, divorce, and foreclosure. We treat every seller with dignity and respect, regardless of the property's condition.
                        </p>
                    </Reveal>
                </div>

                {/* Final CTA */}
                <Reveal direction="up">
                    <div className="bg-essa-yellow rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden group">
                        <div className="absolute inset-0 bg-white/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        
                        <div className="relative z-10 max-w-3xl mx-auto">
                            <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">Ready to skip the hassle?</h2>
                            <p className="text-black/70 text-xl mb-10 font-medium">
                                Get a fair offer in 24 hours. Choose your closing date. Move on with your life.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <Link to="/sell" className="bg-black text-white px-10 py-5 rounded-xl font-bold text-lg transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] shadow-2xl hover:shadow-[0_10px_30px_rgba(0,0,0,0.4)] hover:-translate-y-1">
                                    Get Cash Offer <i className="fa-solid fa-arrow-right ml-2"></i>
                                </Link>
                                <a href="tel:19375209357" className="bg-white/20 border-2 border-black/10 text-black px-10 py-5 rounded-xl font-bold text-lg transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] hover:bg-white/40 hover:shadow-[0_10px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                                    Call +1 (937) 520-9357
                                </a>
                            </div>
                        </div>
                    </div>
                </Reveal>

            </div>
        </div>
    );
};

export default WhyUs;