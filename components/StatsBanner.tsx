import React, { useEffect, useState, useRef } from 'react';
import Reveal from './Reveal';

// Custom hook for counting up
const useCounter = (end: number, duration: number = 2000, suffix: string = "") => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        let startTime: number | null = null;
        const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);

            // Easing function (easeOutExpo)
            const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

            setCount(Math.floor(easeProgress * end));

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [isVisible, end, duration]);

    return { count, ref, display: `${count}${suffix}` };
};

const StatItem: React.FC<{ end: number; suffix: string; label: string; delay: number }> = ({ end, suffix, label, delay }) => {
    const { count, ref, display } = useCounter(end, 2000 + delay * 500, suffix);

    return (
        <div ref={ref} className="py-8 px-4 flex flex-col items-center justify-center text-center group hover:bg-black/5 hover:backdrop-blur-lg transition-all duration-500 cursor-default relative overflow-hidden">
            {/* Subtle glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-essa-yellow/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

            <span className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-2 group-hover:scale-110 transition-transform duration-500 ease-out group-hover:text-essa-yellow group-hover:drop-shadow-[0_0_15px_rgba(255,215,0,0.6)]">
                {display}
            </span>
            <span className="text-xs font-bold uppercase tracking-widest text-gray-500 group-hover:text-gray-900 transition-colors duration-300 relative z-10">
                {label}
            </span>
        </div>
    );
};

const StatsBanner: React.FC = () => {
    return (
        <div className="relative z-20 -mt-8 mx-4 md:mx-8 lg:mx-auto max-w-7xl">
            <Reveal direction="up" delay={0.6} className="w-full">
                <section className="bg-white/80 backdrop-blur-md border border-black/5 rounded-3xl shadow-sm overflow-hidden relative">
                    {/* Animated Border Gradient at Top */}
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-essa-yellow/50 to-transparent opacity-50"></div>

                    <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-black/5">
                        <StatItem end={500} suffix="+" label="Families Helped" delay={0} />
                        <StatItem end={99} suffix="%" label="Satisfaction Rate" delay={1} />
                        <StatItem end={25} suffix="yr" label="Combined Experience" delay={2} />
                        <StatItem end={100} suffix="%" label="Paperless Process" delay={3} />
                    </div>
                </section>
            </Reveal>
        </div>
    );
};

export default StatsBanner;