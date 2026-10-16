import React from 'react';
import Hero from './Hero';
import HomeMotion from './HomeMotion';
import LandingServices from './LandingServices';
import LandingStats from './LandingStats';
import LandingFeatures from './LandingFeatures';
import LandingConstruction from './LandingConstruction';
import LandingInsurance from './LandingInsurance';
import LandingInvestments from './LandingInvestments';
import LandingInsights from './LandingInsights';
import LandingFAQ from './LandingFAQ';
import LandingFooter from './LandingFooter';
import './home.css';

const Home: React.FC = () => (
  <HomeMotion>
    <Hero />
    <LandingServices />
    <LandingStats />
    <LandingFeatures />
    <LandingConstruction />
    <LandingInsurance />
    <LandingInvestments />
    <LandingInsights />
    <LandingFAQ />
    <LandingFooter />
  </HomeMotion>
);
export default Home;
