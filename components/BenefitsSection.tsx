import React from 'react';
import Reveal from './Reveal';

const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      colSpan: "md:col-span-2",
      title: "Zero Commissions",
      desc: "Skip the 6% agent fee. We don't charge a dime to make an offer, and you keep 100% of the sale price.",
      icon: "fa-hand-holding-dollar",
      image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop"
    },
    {
      colSpan: "md:col-span-1",
      title: "We Pay Costs",
      desc: "Title insurance, transfer taxes, escrow fees—we cover typical closing costs (~2% value).",
      icon: "fa-file-invoice-dollar",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1000&auto=format&fit=crop"
    },
    {
      colSpan: "md:col-span-1",
      title: "Sell As-Is",
      desc: "No repairs. No cleaning. We buy properties in any condition.",
      icon: "fa-hammer",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1000&auto=format&fit=crop"
    },
    {
      colSpan: "md:col-span-2",
      title: "Speed & Sustainability",
      desc: "Receive a fair offer in 24 hours. Close on your timeline with a 99% digital, paperless process.",
      icon: "fa-leaf",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop"
    }
  ];

  return (
    <section id="benefits" className="py-24 bg-neutral-950 relative overflow-hidden text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <Reveal direction="up">
            <div>
              <span className="text-essa-yellow font-bold tracking-widest uppercase text-xs mb-3 block opacity-80">Why Choose Essa</span>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                The modern way to sell.
              </h2>
              <p className="text-gray-400 text-lg font-medium leading-relaxed">
                We've replaced the friction of the old market with a streamlined, private, and premium experience.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">
          {benefits.map((item, index) => (
            <div key={index} className={`${item.colSpan} group relative rounded-[2.5rem] overflow-hidden bg-neutral-900 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_-12px_rgba(255,215,0,0.15)] border-2 border-transparent hover:border-essa-yellow`}>
              <Reveal className="h-full w-full" delay={index * 0.1}>
                <div className="h-full w-full relative flex flex-col p-8 md:p-10">

                  {/* Image Background with Overlay */}
                  <div className="absolute inset-0 z-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-10 group-hover:opacity-40"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/60 to-transparent opacity-100 group-hover:opacity-90 transition-opacity duration-500"></div>
                  </div>

                  {/* Top Row: Icon & Index */}
                  <div className="relative z-10 flex justify-between items-start mb-auto">
                    <div className="w-16 h-16 rounded-2xl bg-essa-yellow/20 group-hover:bg-essa-yellow flex items-center justify-center text-essa-yellow group-hover:text-black transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-sm">
                      <i className={`fa-solid ${item.icon} text-2xl`}></i>
                    </div>
                    <span className="text-6xl font-bold text-white/5 group-hover:text-white/10 transition-colors duration-500 font-sans">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Bottom Row: Content */}
                  <div className="relative z-10 transform transition-transform duration-500 group-hover:translate-x-2">
                    <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-essa-yellow flex items-center gap-3">
                      {item.title}
                      <i className="fa-solid fa-arrow-right text-lg opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 text-black bg-essa-yellow rounded-full w-8 h-8 flex items-center justify-center"></i>
                    </h3>
                    <p className="text-gray-400 font-medium leading-relaxed text-lg max-w-md group-hover:text-gray-200 transition-colors">
                      {item.desc}
                    </p>
                  </div>

                </div>
              </Reveal>
            </div>
          ))}
        </div>

      </div>

      {/* Inline styles for the shine animation */}
      <style>{`
        @keyframes shine {
            0% { left: -100%; opacity: 0; }
            50% { opacity: 1; }
            100% { left: 100%; opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default BenefitsSection;