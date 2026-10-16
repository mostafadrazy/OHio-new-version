import React, { useEffect } from 'react';
import Reveal from './Reveal';

const PrivacyPolicy: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-white pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-essa-yellow/10 rounded-full blur-[150px] pointer-events-none"></div>

            <div className="max-w-4xl mx-auto relative z-10">
                <Reveal direction="down">
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
                    <p className="text-gray-600 mb-12 text-lg">Last Updated: October 2023</p>
                </Reveal>

                <Reveal direction="up" delay={0.2}>
                    <div className="prose prose-lg max-w-none text-gray-600">
                        <p>
                            At Essa Estates ("we", "us", "our"), we respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
                        </p>

                        <h3 className="text-gray-900 mt-10 mb-4 text-2xl font-bold">1. Information We Collect</h3>
                        <p>We collect information that you voluntarily provide to us when expressing interest in selling your home. This includes:</p>
                        <ul className="list-disc pl-6 space-y-2 mb-6">
                            <li><strong>Contact Information:</strong> Name, email address, and phone number.</li>
                            <li><strong>Property Details:</strong> Address, property condition, asking price, and photos.</li>
                            <li><strong>Usage Data:</strong> Information on how you interact with our website (via cookies and analytics).</li>
                        </ul>

                        <h3 className="text-gray-900 mt-10 mb-4 text-2xl font-bold">2. How We Use Your Information</h3>
                        <p>We use your data for the sole purpose of facilitating the home selling process:</p>
                        <ul className="list-disc pl-6 space-y-2 mb-6">
                            <li>To generate a fair cash offer for your property.</li>
                            <li>To communicate with you regarding your property inquiry.</li>
                            <li>To improve our website functionality and customer service.</li>
                            <li>To comply with legal obligations and property transaction requirements.</li>
                        </ul>

                        <h3 className="text-gray-900 mt-10 mb-4 text-2xl font-bold">3. Data Sharing & Security</h3>
                        <p>
                            <strong>We do not sell your personal information to third-party marketing agencies.</strong> We may share your information with trusted service providers (e.g., title companies, escrow agents) strictly to complete your real estate transaction. We implement industry-standard security measures, including 256-bit SSL encryption, to protect your data.
                        </p>

                        <h3 className="text-gray-900 mt-10 mb-4 text-2xl font-bold">4. Your Rights</h3>
                        <p>
                            You have the right to request access to the personal information we hold about you or to request its deletion. To exercise these rights, please contact us at Info@essaestates.com.
                        </p>

                        <h3 className="text-gray-900 mt-10 mb-4 text-2xl font-bold">5. Contact Us</h3>
                        <p>
                            If you have questions about this policy, please contact us:<br />
                            Email: Info@essaestates.com<br />
                            Phone: +1 (937) 520-9357
                        </p>
                    </div>
                </Reveal>
            </div>
        </div>
    );
};

export default PrivacyPolicy;