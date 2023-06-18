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
        </div>
    );
};

export default AboutPage;