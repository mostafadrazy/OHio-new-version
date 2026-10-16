import React, { useState, useEffect, useRef } from 'react';
import Reveal from './Reveal';

const TestimonialsSection: React.FC = () => {
    const testimonials = [
        {
            quote: "I recently sold my house to Essa and it was the smoothest process ever! The transparency was refreshing, and moving out in 2 weeks was totally stress-free.",
            name: "Alex Buckmaster",
            location: "Dayton, Ohio",
            role: "Verified Seller",
            img: "https://i.pravatar.cc/150?img=11"
        },
        {
            quote: "We inherited a property that needed significant repairs we couldn't afford. Essa gave us a fair cash offer within 24 hours and handled all the closing costs.",
            name: "Sarah Jenkins",
            location: "Columbus, Ohio",
            role: "Inherited Property",
            img: "https://i.pravatar.cc/150?img=5"
        },
        {
            quote: "I needed to relocate for a job and didn't have months to wait for a traditional sale. Essa closed in just 9 days. Truly professional and efficient.",
            name: "Michael Ross",
            location: "Cincinnati, Ohio",
            role: "Relocation",
            img: "https://i.pravatar.cc/150?img=3"
        },
        {
            quote: "No hidden fees, no agents, no nonsense. They did exactly what they said they would do. Best real estate experience I've had in 20 years.",
            name: "David & Linda Chen",
            location: "Cleveland, Ohio",
            role: "Downsizing",
            img: "https://i.pravatar.cc/150?img=8"
        },
        {
            quote: "The process was completely digital and paperless until closing. As someone who cares about sustainability, I loved their eco-friendly approach.",
            name: "Jessica Alverez",
            location: "Dayton, Ohio",
            role: "Eco-Conscious Seller",
            img: "https://i.pravatar.cc/150?img=9"
        }
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const timeoutRef = useRef<ReturnType<typeof setInterval> | null>(null);

    const nextSlide = () => {
        setActiveIndex((current) => (current + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
    };

    useEffect(() => {
        if (isPaused) return;

        timeoutRef.current = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => {
            if (timeoutRef.current) clearInterval(timeoutRef.current);
        };
    }, [isPaused, testimonials.length]);

    return (
        <section className="py-24 bg-neutral-100 text-gray-900 relative overflow-hidden border-b border-black/5">

            {/* Background patterns */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-black/5 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-essa-yellow/10 rounded-full blur-[80px] pointer-events-none"></div>

            <div className="max-w-6xl mx-auto px-4 text-center relative z-10">

                <Reveal direction="down">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-10 text-essa-yellow border border-black/5 shadow-sm">
                        <i className="fa-solid fa-quote-left text-3xl"></i>
                    </div>
                </Reveal>

                {/* Carousel Window */}
                <div
                    className="relative mb-12 group"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {/* Navigation Arrows (Visible on hover/mobile) - Positioned outside mask */}
                    <button
                        onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                        className="absolute left-0 md:-left-12 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white hover:bg-essa-yellow hover:text-black border border-black/10 flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 shadow-md text-gray-600"
                    >
                        <i className="fa-solid fa-chevron-left"></i>
                    </button>
                    <button
                        onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                        className="absolute right-0 md:-right-12 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white hover:bg-essa-yellow hover:text-black border border-black/10 flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 shadow-md text-gray-600"
                    >
                        <i className="fa-solid fa-chevron-right"></i>
                    </button>

                    {/* Masked Sliding Track */}
                    <div
                        className="overflow-hidden"
                        style={{
                            maskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
                            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)'
                        }}
                    >
                        <div
                            className="flex transition-transform duration-700 cubic-bezier(0.25, 1, 0.5, 1)"
                            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                        >
                            {testimonials.map((item, index) => (
                                <div
                                    key={index}
                                    className="min-w-full px-4 md:px-16 flex flex-col items-center justify-start select-none"
                                >
                                    <div className="flex justify-center gap-2 text-essa-yellow mb-8">
                                        {[1, 2, 3, 4, 5].map(i => <i key={i} className="fa-solid fa-star text-xl md:text-2xl drop-shadow-lg"></i>)}
                                    </div>

                                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-10 leading-tight font-sans text-gray-900 max-w-4xl mx-auto min-h-[120px] md:min-h-[160px] flex items-center justify-center">
                                        "{item.quote}"
                                    </h2>

                                    <div className="flex items-center justify-center gap-5 bg-white pr-8 pl-2 py-2 rounded-full border border-black/5 shadow-sm">
                                        <div className="w-14 h-14 rounded-full bg-gray-100 overflow-hidden border-2 border-essa-yellow shadow-sm shrink-0">
                                            <img src={item.img} alt={item.name} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                                        </div>
                                        <div className="text-left">
                                            <p className="font-bold text-lg text-gray-900 leading-tight">{item.name}</p>
                                            <div className="flex items-center gap-2 text-gray-500 text-xs md:text-sm">
                                                <div className="w-1.5 h-1.5 rounded-full bg-essa-yellow"></div>
                                                <span className="uppercase tracking-wide">{item.role} • {item.location}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Indicators */}
                <div className="flex justify-center gap-2 mb-16 relative z-20">
                    {testimonials.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActiveIndex(idx)}
                            className={`h-1.5 rounded-full transition-all duration-500 ${idx === activeIndex
                                    ? 'w-8 bg-essa-yellow'
                                    : 'w-2 bg-black/10 hover:bg-black/20'
                                }`}
                            aria-label={`Go to slide ${idx + 1}`}
                        />
                    ))}
                </div>

                <Reveal delay={0.2} direction="up">
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-40 text-gray-500 grayscale hover:grayscale-0 transition-all duration-500">
                        <div className="flex items-center gap-2">
                            <i className="fa-brands fa-google text-2xl"></i>
                            <span className="text-xl font-bold tracking-[0.2em] cursor-default">GOOGLE</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <i className="fa-solid fa-building-columns text-2xl"></i>
                            <span className="text-xl font-bold tracking-[0.2em] cursor-default">BBB</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <i className="fa-solid fa-house text-2xl"></i>
                            <span className="text-xl font-bold tracking-[0.2em] cursor-default">ZILLOW</span>
                        </div>
                    </div>
                </Reveal>

            </div>
        </section>
    );
};

export default TestimonialsSection;