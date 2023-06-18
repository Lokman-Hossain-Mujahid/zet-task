import AboutEvolution from '@/components/AboutUs/AboutEvolution';
import AboutFounders from '@/components/AboutUs/AboutFounders';
import AboutHero from '@/components/AboutUs/AboutHero';
import AboutInvestors from '@/components/AboutUs/AboutInvestors';
import GotFeatured from '@/components/AboutUs/GotFeatured';
import React from 'react';

export const metadata = {
    title: 'About | Zet',
    description: 'Zet',
}

const AboutPage = () => {
    return (
        <div>
            <AboutHero/>
            <AboutEvolution/>
            <GotFeatured/>
            <AboutInvestors/>
            <AboutFounders/>
        </div>
    );
};

export default AboutPage;