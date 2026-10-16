import React, { useState, useEffect } from 'react';
import Reveal from './Reveal';

const NetProfitCalculator: React.FC = () => {
    const [homeValue, setHomeValue] = useState(300000);
    const [repairs, setRepairs] = useState(5000);
    const [essaOffer, setEssaOffer] = useState(265000); // Default to a realistic cash offer relative to 300k

    // Traditional Costs Constants
    const AGENT_COMMISSION_RATE = 0.06;
    const CLOSING_COSTS_RATE = 0.02;
    const HOLDING_COSTS_RATE = 0.03; // ~4 months of mortgage, taxes, insurance, utilities

    // Calculations
    const commission = homeValue * AGENT_COMMISSION_RATE;
    const closingCosts = homeValue * CLOSING_COSTS_RATE;
    const holdingCosts = homeValue * HOLDING_COSTS_RATE;
    const totalTraditionalExpenses = commission + closingCosts + holdingCosts + repairs;
    const traditionalNet = homeValue - totalTraditionalExpenses;

    const essaNet = essaOffer; // No deductions

    const formatCurrency = (val: number) => {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(val);
    };

    // Auto-update default Essa offer when Home Value changes (just for better UX, user can override)
    useEffect(() => {
        // Simple logic: typical investor offer might be around 85-90% minus repairs depending on market
        // This is just a visual default, not the algorithm
        setEssaOffer(Math.floor((homeValue * 0.88))); 
    }, [homeValue]);

    return (
        <section className="py-20 bg-white rounded-[3rem] border border-black/10 relative overflow-hidden shadow-2xl mx-4 lg:mx-0">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-essa-yellow/10 rounded-full blur-[150px] pointer-events-none"></div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="text-center mb-12">
                    <span className="text-essa-yellow font-bold tracking-widest uppercase text-xs mb-3 block">Do The Math</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                        Listing Price <span className="text-gray-500">vs.</span> Net Cash
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        A higher sales price doesn't always mean more money in your pocket. Traditional sales are loaded with fees. See the difference yourself.
                    </p>
                </div>

                {/* Controls */}
                <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-3xl mx-auto">
                    <div>
                        <label className="block text-sm font-bold text-gray-500 mb-2 uppercase tracking-wide">Est. Market Value</label>
                        <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-900 font-bold">$</span>
                            <input 
                                type="number" 
                                value={homeValue} 
                                onChange={(e) => setHomeValue(Number(e.target.value))}
                                className="w-full bg-gray-100 border border-black/10 rounded-xl py-4 pl-8 pr-4 text-gray-900 font-bold text-xl focus:border-essa-yellow focus:ring-1 focus:ring-essa-yellow outline-none transition-all"
                            />
                        </div>
                        <p className="text-xs text-gray-500 mt-2">What a realtor might list it for.</p>
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-gray-500 mb-2 uppercase tracking-wide">Est. Repair Costs</label>
                        <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-900 font-bold">$</span>
                            <input 
                                type="number" 
                                value={repairs} 
                                onChange={(e) => setRepairs(Number(e.target.value))}
                                className="w-full bg-gray-100 border border-black/10 rounded-xl py-4 pl-8 pr-4 text-gray-900 font-bold text-xl focus:border-essa-yellow focus:ring-1 focus:ring-essa-yellow outline-none transition-all"
                            />
                        </div>
                        <p className="text-xs text-gray-500 mt-2">Painting, flooring, roof, etc. needed for MLS.</p>
                    </div>
                </div>

                {/* Comparison Grid */}
                <div className="grid md:grid-cols-2 gap-0 md:gap-12 items-start">
                    
                    {/* Left: Traditional */}
                    <Reveal direction="right" className="bg-gray-50 border border-black/10 rounded-3xl p-8 md:p-10 relative group hover:border-red-500/30 transition-colors duration-500">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white border border-black/10 px-6 py-2 rounded-full shadow-lg">
                            <span className="text-gray-600 font-bold uppercase tracking-widest text-sm">Traditional Agent</span>
                        </div>
                        
                        <div className="flex justify-between items-center mb-8 pb-8 border-b border-black/10">
                            <span className="text-gray-500">Sales Price</span>
                            <span className="text-2xl font-bold text-gray-900">{formatCurrency(homeValue)}</span>
                        </div>

                        <div className="space-y-4 mb-8 text-sm md:text-base">
                            <div className="flex justify-between items-center text-red-600">
                                <span>Agent Commissions (6%)</span>
                                <span>- {formatCurrency(commission)}</span>
                            </div>
                            <div className="flex justify-between items-center text-red-600">
                                <span>Closing Costs (2%)</span>
                                <span>- {formatCurrency(closingCosts)}</span>
                            </div>
                            <div className="flex justify-between items-center text-red-600">
                                <span>Holding Costs (4 Mo)</span>
                                <span>- {formatCurrency(holdingCosts)}</span>
                            </div>
                            <div className="flex justify-between items-center text-red-600">
                                <span>Repairs & Prep</span>
                                <span>- {formatCurrency(repairs)}</span>
                            </div>
                        </div>

                        <div className="bg-gray-900 rounded-2xl p-6 border border-black/10">
                            <div className="text-gray-400 text-sm uppercase tracking-wide mb-1">Estimated Net Pocket</div>
                            <div className="text-3xl md:text-4xl font-bold text-white">{formatCurrency(traditionalNet)}</div>
                            <div className="text-xs text-red-400 mt-2 flex items-center gap-1">
                                <i className="fa-solid fa-clock"></i> Time to sell: 60-90+ Days
                            </div>
                        </div>
                    </Reveal>

                    {/* Right: Essa */}
                    <Reveal direction="left" delay={0.2} className="mt-12 md:mt-0 bg-gradient-to-b from-essa-yellow/20 to-transparent border border-essa-yellow/50 rounded-3xl p-8 md:p-10 relative shadow-[0_0_50px_-20px_rgba(255,215,0,0.15)]">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-essa-yellow px-6 py-2 rounded-full shadow-yellow">
                            <span className="text-black font-bold uppercase tracking-widest text-sm">Essa Estates</span>
                        </div>

                        <div className="mb-8 pb-8 border-b border-essa-yellow/20">
                            <label className="block text-sm text-essa-yellow mb-2 font-bold uppercase tracking-wide">Cash Offer</label>
                            <div className="relative">
                                <span className="absolute left-0 top-1/2 -translate-y-1/2 text-essa-yellow font-bold text-2xl">$</span>
                                <input 
                                    type="number" 
                                    value={essaOffer} 
                                    onChange={(e) => setEssaOffer(Number(e.target.value))}
                                    className="w-full bg-transparent border-none p-0 pl-6 text-3xl md:text-4xl font-bold text-gray-900 focus:ring-0 placeholder-black/20"
                                />
                                <i className="fa-solid fa-pen absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 text-sm pointer-events-none opacity-50"></i>
                            </div>
                        </div>

                        <div className="space-y-4 mb-8 text-sm md:text-base">
                            <div className="flex justify-between items-center text-gray-900">
                                <span>Agent Commissions</span>
                                <span className="text-essa-yellow font-bold">$0.00</span>
                            </div>
                            <div className="flex justify-between items-center text-gray-900">
                                <span>Closing Costs</span>
                                <span className="text-essa-yellow font-bold">$0.00</span>
                            </div>
                            <div className="flex justify-between items-center text-gray-900">
                                <span>Holding Costs</span>
                                <span className="text-essa-yellow font-bold">$0.00</span>
                            </div>
                            <div className="flex justify-between items-center text-gray-900">
                                <span>Repairs & Prep</span>
                                <span className="text-essa-yellow font-bold">$0.00</span>
                            </div>
                        </div>

                        <div className="bg-essa-yellow rounded-2xl p-6 shadow-yellow relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-2xl pointer-events-none group-hover:bg-white/30 transition-colors"></div>
                            <div className="relative z-10">
                                <div className="text-black/70 text-sm uppercase tracking-wide mb-1 font-bold">Your Net Pocket</div>
                                <div className="text-3xl md:text-4xl font-bold text-black">{formatCurrency(essaNet)}</div>
                                <div className="text-xs text-black mt-2 flex items-center gap-1 font-medium">
                                    <i className="fa-solid fa-bolt"></i> Time to sell: 7-14 Days
                                </div>
                            </div>
                        </div>

                        <div className="mt-4 text-center">
                            <span className="text-xs text-gray-400">
                                *Edit the "Cash Offer" value to compare scenarios.
                            </span>
                        </div>
                    </Reveal>

                </div>
            </div>
        </section>
    );
};

export default NetProfitCalculator;