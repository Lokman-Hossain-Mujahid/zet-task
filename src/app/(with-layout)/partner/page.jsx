import PartnerDetails from '@/components/PartnerWithUs/PartnerDetails';
import PartnerHero from '@/components/PartnerWithUs/PartnerHero';
import PartnerWithUs from '@/components/PartnerWithUs/PartnerWithUs';
import React from 'react';

export const metadata = {
    title: 'Partner With Us | Zet',
    description: 'Zet',
}

const Partner = () => {
    return (
        <div>
            <PartnerHero/>
            <PartnerWithUs/>
            <PartnerDetails/>
        </div>
    );
};

export default Partner;