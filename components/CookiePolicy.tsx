import React, { useEffect } from 'react';
import Reveal from './Reveal';

const CookiePolicy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-essa-yellow/10 rounded-full blur-[200px] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto relative z-10">
            <Reveal direction="down">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">Cookie Policy</h1>
                <p className="text-gray-600 mb-12 text-lg">Understanding how we use cookies.</p>
            </Reveal>

            <Reveal direction="up" delay={0.2}>
                <div className="prose prose-lg max-w-none text-gray-700">
                    <p>
                        This Cookie Policy explains what cookies are, how Essa Estates uses them, and your choices regarding their use.
                    </p>

                    <h3 className="text-gray-900 mt-10 mb-4 text-2xl font-bold">What are Cookies?</h3>
                    <p>
                        Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit a website. They are widely used to make websites work more efficiently and to provide information to the owners of the site.
                    </p>

                    <h3 className="text-gray-900 mt-10 mb-4 text-2xl font-bold">How We Use Cookies</h3>
                    <p>We use cookies for the following purposes:</p>
                    <ul className="list-disc pl-6 space-y-2 mb-6">
                        <li><strong>Essential Cookies:</strong> These are necessary for the website to function properly (e.g., secure form submissions).</li>
                        <li><strong>Analytics Cookies:</strong> We use tools like Google Analytics to understand how visitors interact with our site (e.g., which pages are visited most). This data is anonymized.</li>
                        <li><strong>Functional Cookies:</strong> These remember your preferences, such as your recently viewed location in the map search.</li>
                    </ul>

                    <h3 className="text-gray-900 mt-10 mb-4 text-2xl font-bold">Managing Your Preferences</h3>
                    <p>
                        Most web browsers allow you to control cookies through their settings preferences. However, if you limit the ability of websites to set cookies, you may worsen your overall user experience, since it will no longer be personalized to you.
                    </p>
                    <p className="mt-4">
                        To manage cookies, please visit your browser's help pages:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mb-6 mt-2">
                        <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noreferrer" className="text-essa-yellow hover:underline">Google Chrome</a></li>
                        <li><a href="https://support.apple.com/en-us/HT201265" target="_blank" rel="noreferrer" className="text-essa-yellow hover:underline">Safari</a></li>
                        <li><a href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences" target="_blank" rel="noreferrer" className="text-essa-yellow hover:underline">Firefox</a></li>
                    </ul>
                </div>
            </Reveal>
        </div>
    </div>
  );
};

export default CookiePolicy;