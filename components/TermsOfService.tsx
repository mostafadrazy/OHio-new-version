import React, { useEffect } from 'react';
import Reveal from './Reveal';

const TermsOfService: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-100 rounded-full blur-[150px] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto relative z-10">
            <Reveal direction="down">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">Terms of Service</h1>
                <p className="text-gray-600 mb-12 text-lg">Effective Date: October 2023</p>
            </Reveal>

            <Reveal direction="up" delay={0.2}>
                <div className="prose prose-lg max-w-none text-gray-600">
                    <p>
                        Welcome to Essa Estates. By accessing our website and using our services, you agree to comply with and be bound by the following Terms of Service. Please read them carefully.
                    </p>

                    <h3 className="text-gray-900 mt-10 mb-4 text-2xl font-bold">1. Acceptance of Terms</h3>
                    <p>
                        By submitting your information on this website, you acknowledge that you have read, understood, and agree to be bound by these terms. If you do not agree, you should not use our services.
                    </p>

                    <h3 className="text-gray-900 mt-10 mb-4 text-2xl font-bold">2. No Real Estate Agency Relationship</h3>
                    <p>
                        Essa Estates is a real estate investment company, not a real estate brokerage. We buy properties directly. Using this site or submitting your information does not create an agency relationship between you and Essa Estates. We represent our own interests in all transactions.
                    </p>

                    <h3 className="text-gray-900 mt-10 mb-4 text-2xl font-bold">3. Property Offers</h3>
                    <p>
                        Any offer presented by Essa Estates is non-binding until a formal Purchase and Sale Agreement is signed by both parties. Offers are based on the information provided and our own market analysis. We reserve the right to withdraw or modify an offer if the property condition differs from the description provided.
                    </p>

                    <h3 className="text-gray-900 mt-10 mb-4 text-2xl font-bold">4. Limitation of Liability</h3>
                    <p>
                        Essa Estates shall not be liable for any direct, indirect, incidental, or consequential damages arising out of your use of this website or reliance on any information provided herein.
                    </p>

                    <h3 className="text-gray-900 mt-10 mb-4 text-2xl font-bold">5. Intellectual Property</h3>
                    <p>
                        All content on this website, including text, graphics, logos, and images, is the property of Essa Estates and is protected by copyright laws. Unauthorized use of this content is prohibited.
                    </p>

                    <h3 className="text-gray-900 mt-10 mb-4 text-2xl font-bold">6. Governing Law</h3>
                    <p>
                        These terms shall be governed by and construed in accordance with the laws of the State of Ohio.
                    </p>
                </div>
            </Reveal>
        </div>
    </div>
  );
};

export default TermsOfService;