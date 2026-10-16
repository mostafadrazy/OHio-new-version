import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Reveal from './Reveal';
import { cityData } from './cityData';
import ProcessSection from './ProcessSection';
import BenefitsSection from './BenefitsSection';
import ConditionsSection from './ConditionsSection';
import TestimonialsSection from './TestimonialsSection';
import ContactFooter from './ContactFooter';

interface CityLandingProps {
    cityKey: string;
}

const CityLanding: React.FC<CityLandingProps> = ({ cityKey }) => {
    const data = cityData[cityKey];
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [cityKey]);

    if (!data) return <div>City not found</div>;

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        // Redirect to sell page with city pre-filled in logic if needed, 
        // or just general sell page
        navigate(`/sell?address=${encodeURIComponent(data.name + ", OH")}`);
    };

    return (
        <div className="bg-white">
            {/* 1. City Hero */}
            <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-20">
                <div className="absolute inset-0 z-0">
                    <img 
                        src={data.heroImage} 
                        alt={`Sell your house in ${data.name}`} 
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/70 to-white"></div>
                    {/* Animated blobs */}
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-essa-yellow/10 rounded-full blur-[120px] animate-pulse-slow"></div>
                </div>

                <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
                    <Reveal direction="down">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-essa-yellow/20 border border-essa-yellow/30 text-essa-yellow font-bold uppercase tracking-widest text-xs mb-6 backdrop-blur-md">
                            <i className="fa-solid fa-location-dot"></i> Serving {data.name}, Ohio
                        </div>
                    </Reveal>
                    
                    <Reveal>
                        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                            Sell your <span className="text-essa-yellow">{data.name}</span> home <br/>
                            <span className="text-gray-900">fast for cash.</span>
                        </h1>
                    </Reveal>

                    <Reveal delay={0.2}>
                        <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
                            {data.intro}
                        </p>
                    </Reveal>

                    <Reveal delay={0.4}>
                         <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-lg mx-auto">
                            <button 
                                onClick={handleSearch}
                                className="bg-essa-yellow text-black font-bold text-lg px-8 py-4 rounded-xl hover:bg-black hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(255,215,0,0.3)] hover:shadow-[0_0_40px_rgba(0,0,0,0.5)] flex items-center justify-center gap-2"
                            >
                                Get My Cash Offer <i className="fa-solid fa-arrow-right"></i>
                            </button>
                            <a 
                                href="tel:19375209357"
                                className="bg-white/50 text-gray-900 font-bold text-lg px-8 py-4 rounded-xl hover:bg-white/80 transition-all duration-300 border border-black/10 backdrop-blur-md flex items-center justify-center gap-2"
                            >
                                <i className="fa-solid fa-phone"></i> +1 (937) 520-9357
                            </a>
                         </div>
                         <p className="mt-6 text-sm text-gray-500">No repairs needed • No agent fees • 100% Free</p>
                    </Reveal>
                </div>
            </section>

            {/* 2. City Specific Stats */}
            <section className="py-12 border-b border-black/5 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-black/10">
                        <div className="text-center py-4">
                            <span className="block text-4xl font-bold text-gray-900 mb-1">{data.stats.familiesHelped}</span>
                            <span className="text-sm text-gray-500 uppercase tracking-widest">Families in {data.name} Helped</span>
                        </div>
                        <div className="text-center py-4">
                            <span className="block text-4xl font-bold text-gray-900 mb-1">{data.stats.avgTime}</span>
                            <span className="text-sm text-gray-500 uppercase tracking-widest">Average Closing Time</span>
                        </div>
                        <div className="text-center py-4">
                            <span className="block text-4xl font-bold text-gray-900 mb-1">{data.stats.cashInvested}</span>
                            <span className="text-sm text-gray-500 uppercase tracking-widest">Invested in Local Economy</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Local Market Context */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
                    <Reveal direction="right">
                        <div>
                            <span className="text-essa-yellow font-bold tracking-widest uppercase text-xs mb-3 block">Local Market Insight</span>
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why selling in {data.name} can be tricky.</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                {data.description}
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                Traditional agents might ask you to spend thousands on repairs to get your home "market ready." We believe you shouldn't have to pay to sell your house. We buy it exactly as it sits today.
                            </p>
                            <Link to="/sell" className="text-gray-900 border-b border-essa-yellow pb-1 font-bold hover:text-essa-yellow transition-colors inline-flex items-center gap-2 group">
                                Start your offer <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
                            </Link>
                        </div>
                    </Reveal>
                    <Reveal direction="left">
                        <div className="bg-white border border-black/10 rounded-3xl p-8 relative shadow-sm">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <i className="fa-solid fa-map-location-dot text-9xl text-gray-900"></i>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">We buy all over {data.name}:</h3>
                            <div className="flex flex-wrap gap-3">
                                {data.areas.map((area, idx) => (
                                    <span key={idx} className="bg-black/5 border border-black/10 px-4 py-2 rounded-lg text-gray-600 text-sm hover:bg-essa-yellow hover:text-black transition-colors cursor-default">
                                        {area}
                                    </span>
                                ))}
                                <span className="bg-essa-yellow/10 border border-essa-yellow/20 px-4 py-2 rounded-lg text-essa-yellow text-sm">
                                    + Many more
                                </span>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Reuse existing sections */}
            <ProcessSection />
            <ConditionsSection />
            <BenefitsSection />
            <TestimonialsSection />
            <ContactFooter />
        </div>
    );
};

export default CityLanding;