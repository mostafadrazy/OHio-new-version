import React from 'react';
import { Link } from 'react-router-dom';
import Reveal from './Reveal';

const ConditionsSection: React.FC = () => {
    const conditions = [
        {
            title: "Structural Issues",
            desc: "Foundation cracks, roof damage, or safety concerns.",
            icon: "fa-house-crack"
        },
        {
            title: "Inherited Properties",
            desc: "Navigating probate, wills, or unwanted inherited assets.",
            icon: "fa-scroll"
        },
        {
            title: "Foreclosure",
            desc: "Behind on payments or facing auction? We can help.",
            icon: "fa-gavel"
        },
        {
            title: "Divorce",
            desc: "Quick, equitable liquidation for a fresh start.",
            icon: "fa-scale-balanced"
        },
        {
            title: "Problem Tenants",
            desc: "Tired of eviction notices and rental fatigue.",
            icon: "fa-user-xmark"
        },
        {
            title: "Job Relocation",
            desc: "Need to move fast for work? Sell in days, not months.",
            icon: "fa-briefcase"
        },
        {
            title: "Unpaid Taxes",
            desc: "Resolving liens or back tax issues efficiently.",
            icon: "fa-file-invoice-dollar"
        },
        {
            title: "Fire Damage",
            desc: "Selling as-is. No cleanup or restoration required.",
            icon: "fa-fire"
        },
        {
            title: "Unfinished Work",
            desc: "Ran out of renovation funds? We'll take over.",
            icon: "fa-paint-roller"
        },
    ];

    return (
        <section className="py-32 bg-white text-gray-900 relative">

            {/* Background Ambience */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-black/[0.02] rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                    <Reveal className="max-w-3xl">
                        <div>
                            <span className="text-essa-yellow font-bold tracking-[0.2em] uppercase text-xs mb-4 block">We Handle Everything</span>
                            <h2 className="text-5xl md:text-7xl font-bold text-gray-900 leading-[0.95] tracking-tight">
                                Any condition. <br />
                                <span className="text-gray-500">Any situation.</span>
                            </h2>
                        </div>
                    </Reveal>
                    <Reveal delay={0.2} direction="left" className="md:text-right max-w-sm">
                        <p className="text-gray-600 text-lg font-light leading-relaxed">
                            We buy properties as-is. No cleaning, no repairs, no inspections. Just a simple, clean break.
                        </p>
                    </Reveal>
                </div>

                {/* Modern Grid Layout */}
                <Reveal delay={0.3} direction="up" className="w-full">
                    <div className="border-t border-l border-black/10">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                            {conditions.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="group relative border-b border-r border-black/10 p-10 md:p-12 transition-all duration-500 bg-white hover:bg-black hover:z-10 hover:shadow-2xl"
                                >
                                    {/* Hover Accent Line */}
                                    <div className="absolute top-0 left-0 w-full h-1 bg-essa-yellow transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

                                    {/* Icon - Floating Top Right */}
                                    <div className="absolute top-10 right-10 text-2xl text-gray-300 group-hover:text-essa-yellow transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-12">
                                        <i className={`fa-solid ${item.icon}`}></i>
                                    </div>

                                    {/* Content */}
                                    <div className="mt-8">
                                        <div className="text-xs font-mono text-gray-400 mb-4 opacity-50 group-hover:text-essa-yellow group-hover:opacity-100 transition-all">0{idx + 1}</div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:translate-x-2 transition-transform duration-300 group-hover:text-white">{item.title}</h3>
                                        <p className="text-gray-500 font-light leading-relaxed group-hover:text-gray-300 transition-colors">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Reveal>

                {/* Bottom Callout */}
                <div className="mt-24 pt-12 border-t border-black/10 flex flex-col md:flex-row items-center justify-between gap-10">
                    <Reveal delay={0.4} className="max-w-2xl text-center md:text-left">
                        <h4 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">Every situation is unique.</h4>
                        <p className="text-gray-500 text-lg font-light leading-relaxed">
                            Don't see your specific circumstances listed? We've successfully navigated almost every real estate scenario imaginable. Reach out to our specialists to craft a custom solution.
                        </p>
                    </Reveal>
                    <Reveal delay={0.6} direction="left" className="w-full md:w-auto flex justify-center md:justify-end">
                        <Link to="/contact" className="flex items-center justify-center gap-3 bg-black text-white px-10 py-5 w-full md:w-auto rounded-2xl font-bold uppercase tracking-wider text-sm hover:bg-essa-yellow hover:text-black transition-all duration-500 shadow-lg hover:shadow-[0_15px_30px_rgba(255,215,0,0.3)] hover:-translate-y-1 active:scale-95 group whitespace-nowrap">
                            Contact Our Team <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
                        </Link>
                    </Reveal>
                </div>

            </div>
        </section>
    );
};

export default ConditionsSection;