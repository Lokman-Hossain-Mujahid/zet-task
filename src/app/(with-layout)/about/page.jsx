import AboutEvolution from '@/components/AboutUs/AboutEvolution';
import AboutHero from '@/components/AboutUs/AboutHero';
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
        </div>
    );
};

export default AboutPage;