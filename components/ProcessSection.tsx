import React from 'react';
import Reveal from './Reveal';

const ProcessSection: React.FC = () => {
    const steps = [
        {
            icon: <i className="fa-solid fa-phone text-2xl"></i>,
            step: "01",
            title: "Call",
            desc: "Submit your address and property condition. It's confidential and takes < 2 minutes.",
        },
        {
            icon: <i className="fa-solid fa-dollar-sign text-2xl"></i>,
            step: "02",
            title: "Cash",
            desc: "We analyze local data to generate a fair, no-obligation cash offer within 24 hours.",
        },
        {
            icon: <i className="fa-solid fa-calendar-check text-2xl"></i>,
            step: "03",
            title: "Close",
            desc: "You pick the move-out date. We handle all paperwork and cover 100% of closing costs.",
        }
    ];

    return (
        <section id="process" className="py-32 bg-neutral-100 relative overflow-hidden text-gray-900">

            {/* Background Ambience */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-black/[0.02] rounded-full blur-3xl pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8 border-b border-black/10 pb-8">
                    <Reveal className="max-w-2xl">
                        <div>
                            <span className="text-essa-yellow font-bold tracking-widest uppercase text-xs mb-3 block">The Process</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                                Sell With C's <br />
                                <span className="text-gray-500">in 3 simple steps.</span>
                            </h2>
                        </div>
                    </Reveal>
                    <div className="mb-2">
                        <Reveal delay={0.2} direction="left">
                            <button className="hidden md:flex items-center gap-3 bg-essa-yellow text-black px-6 py-3 rounded-xl font-bold uppercase tracking-wide text-sm transition-all duration-500 hover:bg-black hover:text-white shadow-[0_4px_14px_rgba(255,215,0,0.3)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.2)] hover:-translate-y-1 active:scale-95 group">
                                Start your offer <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
                            </button>
                        </Reveal>
                    </div>
                </div>

                {/* Steps Container */}
                <div className="relative grid md:grid-cols-3 gap-12">

                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-[88px] left-0 w-full h-px bg-black/10 z-0"></div>

                    {steps.map((item, idx) => (
                        <div key={idx} className="relative group cursor-default">
                            <Reveal delay={idx * 0.2} direction="up" className="h-full">
                                {/* 1. Large Number (Above Line) */}
                                <div className="mb-10 pl-4 md:pl-0">
                                    <span className="text-6xl md:text-8xl font-bold text-black/10 group-hover:text-essa-yellow transition-all duration-500 block md:text-center group-hover:-translate-y-2">
                                        {item.step}
                                    </span>
                                </div>

                                {/* 2. Icon Node (On Line) */}
                                <div className="relative z-10 flex justify-start md:justify-center mb-8">
                                    <div className="w-16 h-16 rounded-full bg-white border border-black/10 flex items-center justify-center group-hover:border-essa-yellow group-hover:shadow-[0_0_30px_rgba(255,215,0,0.4)] transition-all duration-500 group-hover:scale-110 z-20">
                                        <div className="text-gray-900 group-hover:text-essa-yellow transition-colors duration-300 transform group-hover:scale-110">
                                            {item.icon}
                                        </div>
                                    </div>
                                    {/* Connecting Line (Mobile Only - Vertical) */}
                                    {idx !== steps.length - 1 && (
                                        <div className="md:hidden absolute top-16 left-8 w-px h-full bg-black/10 -ml-px"></div>
                                    )}
                                </div>

                                {/* 3. Text Content (Below Line) */}
                                <div className="md:text-center pl-4 md:pl-0">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-essa-yellow transition-colors duration-300">{item.title}</h3>
                                    <p className="text-gray-600 font-light leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                                        {item.desc}
                                    </p>
                                </div>
                            </Reveal>
                        </div>
                    ))}
                </div>

                {/* Mobile Call to Action */}
                <div className="mt-16 md:hidden">
                    <button className="flex items-center justify-center gap-3 w-full sm:w-auto bg-essa-yellow text-black px-8 py-4 rounded-xl font-bold uppercase tracking-wide text-sm transition-all duration-500 hover:bg-black hover:text-white shadow-[0_4px_14px_rgba(255,215,0,0.3)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.2)] hover:-translate-y-1 active:scale-95 group mx-auto">
                        Start your offer <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
                    </button>
                </div>

            </div>
        </section>
    );
};

export default ProcessSection;