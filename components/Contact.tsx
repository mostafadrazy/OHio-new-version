import React, { useState, useEffect } from 'react';
import Reveal from './Reveal';
import ContactFooter from './ContactFooter';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const [isFocused, setIsFocused] = useState<string | null>(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Placeholder for form submission
        console.log("Form Submitted", formData);
        alert("Thanks for reaching out! We'll get back to you soon.");
        setFormData({ name: '', email: '', phone: '', message: '' });
    };

    return (
        <div className="bg-white min-h-screen pt-32 pb-0">
            {/* Hero Section */}
            <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20 lg:mb-32">
                <div className="absolute top-0 right-10 w-[600px] h-[600px] bg-essa-yellow/5 rounded-full blur-[120px] pointer-events-none"></div>
                <div className="absolute top-40 left-0 w-[400px] h-[400px] bg-black/[0.02] rounded-full blur-[100px] pointer-events-none"></div>

                <div className="relative z-10 grid lg:grid-cols-2 gap-16 lg:gap-24">
                    {/* Left: Text & Info */}
                    <div className="flex flex-col justify-center">
                        <Reveal>
                            <span className="text-essa-yellow font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Get In Touch</span>
                            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-[1.05] tracking-tight mb-8">
                                Let's talk about <br />
                                <span className="text-gray-400">your property.</span>
                            </h1>
                            <p className="text-xl text-gray-600 font-light leading-relaxed mb-12 max-w-md">
                                Whether you have questions about the process, want a custom solution, or need immediate assistance—we're here to help.
                            </p>
                        </Reveal>

                        <Reveal delay={0.2}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 border-t border-black/5 pt-12">
                                <div className="group">
                                    <div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center mb-6 group-hover:bg-essa-yellow transition-colors duration-300">
                                        <i className="fa-regular fa-envelope text-gray-900 text-lg group-hover:text-black"></i>
                                    </div>
                                    <span className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Email Us</span>
                                    <a href="mailto:Info@essaestates.com" className="text-xl font-medium text-gray-900 hover:text-essa-yellow transition-colors">Info@essaestates.com</a>
                                </div>
                                <div className="group">
                                    <div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center mb-6 group-hover:bg-essa-yellow transition-colors duration-300">
                                        <i className="fa-solid fa-phone text-gray-900 text-lg group-hover:text-black"></i>
                                    </div>
                                    <span className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Call Us</span>
                                    <a href="tel:19375209357" className="text-xl font-medium text-gray-900 hover:text-essa-yellow transition-colors">+1 (937) 520-9357</a>
                                    <span className="block text-sm text-gray-500 mt-2">Mon - Sat • 8am - 6pm</span>
                                </div>
                            </div>
                        </Reveal>
                    </div>

                    {/* Right: Contact Form */}
                    <div className="relative">
                        <Reveal delay={0.3} direction="up" className="h-full">
                            <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-black/5 h-full relative overflow-hidden group/card">
                                {/* Decorative line */}
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-essa-yellow via-essa-yellow to-transparent transform origin-left scale-x-0 group-hover/card:scale-x-100 transition-transform duration-700 ease-out"></div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-8">Send us a message</h3>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-gray-500 uppercase tracking-wide">Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                onFocus={() => setIsFocused('name')}
                                                onBlur={() => setIsFocused(null)}
                                                className={`w-full bg-neutral-50 px-5 py-4 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none transition-all duration-300 border ${isFocused === 'name' ? 'border-essa-yellow ring-1 ring-essa-yellow bg-white' : 'border-transparent hover:bg-neutral-100'}`}
                                                placeholder="John Doe"
                                                required
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-gray-500 uppercase tracking-wide">Phone</label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                onFocus={() => setIsFocused('phone')}
                                                onBlur={() => setIsFocused(null)}
                                                className={`w-full bg-neutral-50 px-5 py-4 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none transition-all duration-300 border ${isFocused === 'phone' ? 'border-essa-yellow ring-1 ring-essa-yellow bg-white' : 'border-transparent hover:bg-neutral-100'}`}
                                                placeholder="(555) 000-0000"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-500 uppercase tracking-wide">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            onFocus={() => setIsFocused('email')}
                                            onBlur={() => setIsFocused(null)}
                                            className={`w-full bg-neutral-50 px-5 py-4 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none transition-all duration-300 border ${isFocused === 'email' ? 'border-essa-yellow ring-1 ring-essa-yellow bg-white' : 'border-transparent hover:bg-neutral-100'}`}
                                            placeholder="john@example.com"
                                            required
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-500 uppercase tracking-wide">Message</label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            onFocus={() => setIsFocused('message')}
                                            onBlur={() => setIsFocused(null)}
                                            rows={4}
                                            className={`w-full bg-neutral-50 px-5 py-4 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none transition-all duration-300 border resize-none ${isFocused === 'message' ? 'border-essa-yellow ring-1 ring-essa-yellow bg-white' : 'border-transparent hover:bg-neutral-100'}`}
                                            placeholder="How can we help you?"
                                            required
                                        ></textarea>
                                    </div>

                                    <button type="submit" className="w-full bg-black text-white px-8 py-5 rounded-xl font-bold uppercase tracking-wide text-sm transition-all duration-500 hover:bg-essa-yellow hover:text-black shadow-[0_10px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_10px_30px_rgba(255,215,0,0.4)] hover:-translate-y-1 active:scale-[0.98] mt-4 flex items-center justify-center gap-3 group">
                                        Send Message <i className="fa-solid fa-paper-plane group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"></i>
                                    </button>
                                </form>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            <ContactFooter />
        </div>
    );
};

export default Contact;
