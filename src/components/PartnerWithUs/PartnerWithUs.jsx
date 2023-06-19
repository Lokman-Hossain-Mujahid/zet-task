"use client"

import React, { useState } from 'react';
import partner1 from "../../../public/images/partner/partner with us/PartnerBrands.webp"
import partner2 from "../../../public/images/partner/partner with us/PincodesServed.webp"
import partner3 from "../../../public/images/partner/partner with us/FinancialAdvicers.webp"
import Image from 'next/image';
import Tilt from 'react-parallax-tilt'

const PartnerWithUs = () => {

    const [scale, setScale] = useState(1.05);


    return (
        <div className='w-[80vw] mx-auto mt-10 mb-10'>
            <div>
                <h2 className='text-4xl font-bold text-gray-700'>Partner With Us</h2>
                <p className='text-xl mt-4'>Join us in our journey of expanding the distribution of financial products & services to all corners of India. We will help you increase your visibility in tier 2, 3 & 4 cities and towns of India and get quality customers at a fraction of the cost.</p>
            </div>
            <div className='md:flex md:gap-6 mt-10'>
                <Tilt scale={scale}>
                    <div>
                        <Image className='w-[496px]' src={partner1} alt='partner1' />
                    </div>
                </Tilt>
                <Tilt scale={scale}>
                    <div>
                        <Image className='w-[496px] mt-6 md:mt-0' src={partner2} alt='partner1' />
                    </div>
                </Tilt>
                <Tilt scale={scale}>
                    <div>
                        <Image className='w-[496px] mt-6 md:mt-0' src={partner3} alt='partner1' />
                    </div>
                </Tilt>
            </div>
        </div>
    );
};

export default PartnerWithUs;