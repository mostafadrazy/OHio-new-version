import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Reveal from './Reveal';

const FAQItem: React.FC<{ question: string; answer: string; isOpen: boolean; onClick: () => void }> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-black/10 last:border-0">
      <button 
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
        onClick={onClick}
      >
        <span className={`text-xl font-bold transition-colors duration-300 ${isOpen ? 'text-essa-yellow' : 'text-gray-900 group-hover:text-essa-yellow'}`}>
          {question}
        </span>
        <div className={`w-8 h-8 rounded-full border border-black/10 flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-essa-yellow text-black rotate-45 border-essa-yellow' : 'text-gray-900 group-hover:border-essa-yellow'}`}>
          <i className="fa-solid fa-plus"></i>
        </div>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mb-6' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-gray-600 leading-relaxed pr-8">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How is selling to Essa Estates different from listing with an agent?",
      answer: "The traditional market involves repairs, open houses, agent commissions (usually 6%), and months of uncertainty. We remove all of that. We buy your property directly for cash, as-is. This means no fees, no repairs, and you choose the closing date."
    },
    {
      question: "How do you determine the offer price for my home?",
      answer: "We analyze current market data, recent sales in your neighborhood (comps), and the specific condition of your property. We factor in the costs of necessary renovations and our target margin to arrive at a fair, transparent cash offer."
    },
    {
      question: "Are there really no fees or commissions?",
      answer: "Correct. Zero. We are not real estate agents, so we don't charge commissions. Additionally, we pay for all standard closing costs, including title insurance and transfer taxes. The offer price we agree on is the amount you receive at closing."
    },
    {
      question: "Do I need to clean, repair, or stage the house?",
      answer: "No. We buy homes in 'as-is' condition. You don't need to paint, fix the roof, or even sweep the floors. Take what you want and leave the rest—trash, old furniture, whatever. We handle the cleanup."
    },
    {
      question: "Am I obligated to accept the offer?",
      answer: "Not at all. Our assessment and offer process is 100% free and comes with zero obligation. You can review our offer, shop it around, or simply say no. We believe in providing value first."
    },
    {
      question: "How fast can we close?",
      answer: "We can typically close in as little as 7 days if the title is clear. However, we work on your timeline. If you need 60 days to find a new place or pack up, we can schedule the closing for whenever you are ready."
    },
    {
      question: "What types of properties do you buy?",
      answer: "We buy single-family homes, condos, duplexes, multi-family properties, and even some commercial real estate. We handle all situations including foreclosure, probate, divorce, storm damage, and tired landlords."
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-28 pb-20 overflow-x-hidden">
      
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-essa-yellow/10 rounded-full blur-[150px]"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
            <Reveal direction="down">
                <span className="inline-block py-1 px-3 rounded-full bg-essa-yellow/10 border border-essa-yellow/20 text-essa-yellow text-xs font-bold uppercase tracking-widest mb-6 hover:bg-essa-yellow hover:text-black transition-colors duration-300">
                    Common Questions
                </span>
                <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
                    Everything you <br/>
                    <span className="text-gray-900">need to know.</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
                    Transparency is the core of our modern selling process. Here are answers to the most frequent questions we receive from Ohio homeowners.
                </p>
            </Reveal>
        </div>

        {/* FAQ List */}
        <div className="bg-white border border-black/10 rounded-[2.5rem] p-8 md:p-12 shadow-sm relative overflow-hidden">
            {/* Decorative Top Gradient */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-essa-yellow via-white to-essa-yellow opacity-50"></div>
            
            <Reveal direction="up" className="divide-y divide-black/10">
                <div>
                    {faqs.map((faq, index) => (
                        <FAQItem 
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openIndex === index}
                            onClick={() => toggleFAQ(index)}
                        />
                    ))}
                </div>
            </Reveal>
        </div>

        {/* Still have questions CTA */}
        <Reveal direction="up" delay={0.2}>
            <div className="mt-16 text-center bg-gray-50 border border-black/10 rounded-3xl p-8 backdrop-blur-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Still have questions?</h3>
                <p className="text-gray-600 mb-8 max-w-lg mx-auto">
                    We're happy to explain every detail of the agreement, the closing process, or our valuation method.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a href="tel:19375209357" className="bg-gray-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-essa-yellow hover:text-black transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] shadow-lg hover:shadow-[0_10px_30px_rgba(255,215,0,0.4)] hover:-translate-y-1 flex items-center justify-center gap-2">
                        <i className="fa-solid fa-phone"></i> +1 (937) 520-9357
                    </a>
                    <Link to="/sell" className="bg-transparent border border-black/20 text-gray-900 px-8 py-3 rounded-xl font-bold hover:bg-black/5 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1 flex items-center justify-center gap-2">
                        Get Cash Offer <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                </div>
            </div>
        </Reveal>

      </div>
    </div>
  );
};

export default FAQ;