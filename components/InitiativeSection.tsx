import React from 'react';
import Reveal from './Reveal';

const InitiativeSection: React.FC = () => {
    return (
        <section id="initiative" className="py-32 bg-neutral-950 relative overflow-hidden text-white">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            <div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-essa-yellow/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Left Content Column */}
                    <div className="relative">
                        <Reveal direction="right">
                            <div>
                                {/* Section Tag */}
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-12 h-px bg-essa-yellow"></div>
                                    <span className="text-essa-yellow font-bold tracking-[0.2em] uppercase text-xs">Our Purpose</span>
                                </div>

                                {/* Headline */}
                                <h2 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-8">
                                    More than just <br />
                                    <span className="relative inline-block">
                                        a cash offer.
                                        {/* Underline decorative */}
                                        <svg className="absolute w-full h-3 -bottom-1 left-0 text-essa-yellow" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.00025 6.99997C25.7201 5.20035 73.2447 2.17478 197.971 3" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /></svg>
                                    </span>
                                </h2>

                                {/* Description */}
                                <p className="text-xl text-gray-400 font-light leading-relaxed mb-10 border-l-2 border-white/10 pl-6">
                                    "We believe real estate should regenerate neighborhoods, not just extract value from them. Every home we restore creates a ripple effect of stability and pride in the community."
                                </p>

                                {/* Bullet Points (Modern) */}
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4 group">
                                        <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-essa-yellow group-hover:text-black group-hover:scale-110 transition-all duration-300 shrink-0">
                                            <i className="fa-solid fa-seedling"></i>
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold text-lg">Sustainable Development</h4>
                                            <p className="text-sm text-gray-500 mt-1">Using energy-efficient materials to lower costs for future families.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 group">
                                        <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-essa-yellow group-hover:text-black group-hover:scale-110 transition-all duration-300 shrink-0">
                                            <i className="fa-solid fa-people-roof"></i>
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold text-lg">Community First</h4>
                                            <p className="text-sm text-gray-500 mt-1">Partnering with local housing programs to prevent displacement.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* CTA Button */}
                                <div className="mt-12">
                                    <button className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-essa-yellow hover:text-black transition-colors shadow-[0_0_30px_rgba(255,215,0,0.1)] hover:shadow-[0_0_30px_rgba(255,215,0,0.4)]">
                                        See Our Impact
                                    </button>
                                </div>
                            </div>
                        </Reveal>
                    </div>

                    {/* Right Image Composition */}
                    <div className="relative h-[600px] w-full mt-12 lg:mt-0">
                        <Reveal direction="left" delay={0.3} className="w-full h-full">
                            <div className="relative w-full h-full">
                                {/* 1. Main Background Image (Tall) */}
                                <div className="absolute top-0 right-0 w-[85%] h-[90%] rounded-[2.5rem] overflow-hidden border border-white/10 group">
                                    <img
                                        src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=2070&auto=format&fit=crop"
                                        alt="Restored Neighborhood Home"
                                        className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 transform group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                                </div>

                                {/* 2. Overlapping Image (Bottom Left) */}
                                <div className="absolute bottom-0 left-0 w-[55%] h-[45%] rounded-[2rem] overflow-hidden border-4 border-neutral-900 shadow-2xl group z-20">
                                    <img
                                        src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2000&auto=format&fit=crop"
                                        alt="Community Planning"
                                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-700 filter sepia-[0.2]"
                                    />
                                </div>

                                {/* 3. Graphic Text Block (Top Left - Floating) */}
                                <div className="absolute top-12 left-0 z-30 bg-essa-yellow p-6 rounded-2xl shadow-yellow max-w-[180px]">
                                    <span className="block text-4xl font-extrabold text-black mb-1">500+</span>
                                    <span className="block text-xs font-bold uppercase tracking-wider text-black/80 leading-tight">Families<br />Assisted</span>
                                </div>

                                {/* 4. Decorative Circle (Behind) */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-white/10 rounded-full -z-10 animate-spin-slow opacity-20 border-dashed"></div>
                            </div>
                        </Reveal>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default InitiativeSection;