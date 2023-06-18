import React from 'react';
import partner1 from "../../../../../images/partner/partner with us/PartnerBrands.webp"
import partner2 from "../../../../../images/partner/partner with us/PincodesServed.webp"
import partner3 from "../../../../../images/partner/partner with us/FinancialAdvicers.webp"
import Image from 'next/image';

const PartnerWithUs = () => {
    return (
        <div className='w-[80vw] mx-auto mt-10 mb-10'>
            <div>
                <h2 className='text-4xl font-bold text-gray-700'>Partner With Us</h2>
                <p className='text-xl mt-4'>Join us in our journey of expanding the distribution of financial products & services to all corners of India. We will help you increase your visibility in tier 2, 3 & 4 cities and towns of India and get quality customers at a fraction of the cost.</p>
            </div>
            <div className='md:flex gap-6 mt-10'>
                <div>
                    <Image className='w-[496px]' src={partner1} alt='partner1'/>
                </div>
                <div>
                    <Image className='w-[496px]' src={partner2} alt='partner1'/>
                </div>
                <div>
                    <Image className='w-[496px]' src={partner3} alt='partner1'/>
                </div>
            </div>
        </div>
    );
};

export default PartnerWithUs;