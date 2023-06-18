import Image from 'next/image';
import React from 'react';
import whyChooseHero from "../../../../../images/why choose us/whyUsHero.webp"
import whyChooseGrid from "../../../../../images/why choose us/bgImg.webp"
import whyChooseIcon1 from "../../../../../images/why choose us/customerSupport.5780cd23.svg"
import whyChooseIcon2 from "../../../../../images/why choose us/Fin_products.0e8a0582.svg"
import whyChooseIcon3 from "../../../../../images/why choose us/financialProduct.1b3d6eec.svg"
import whyChooseIcon4 from "../../../../../images/why choose us/Icon_support.c8382fc1.svg"
import whyChooseIcon5 from "../../../../../images/why choose us/quick_payout.1d689e09.svg"
import whyChooseIcon6 from "../../../../../images/why choose us/zero_investment.d5743aab.svg"

const WhyChooseUs = () => {
    return (
        <div className='flex h-[80vh] w-[70vw] mx-auto items-center'>
            <div className='w-1/3'>
                <div className='absolute text-center mt-28 -ml-10'>
                    <h2 className='text-xl font-bold'>Why <span className='text-blue-600'>Choose Us</span></h2>
                    <p>Why we are loved by our customers</p>
                </div>
                <Image className='w-[250px] h-' src={whyChooseGrid} alt='img' />
                <Image className='absolute -mt-[480px] -ml-7' src={whyChooseHero} alt='img' />
            </div>
            <div className='w-3/4 grid grid-cols-3 gap-20'>
                <div>
                    <Image src={whyChooseIcon6} alt='img' />
                    <h1 className='text-xl font-bold mt-4'>Zero Investment</h1>
                    <p>Build your business without any investment</p>
                </div>
                <div>
                    <Image src={whyChooseIcon5} alt='img' />
                    <h1 className='text-xl font-bold mt-4'>Quick Payout</h1>
                    <p>Direct Payout in your bank account in short time</p>
                </div>
                <div>
                    <Image src={whyChooseIcon2} alt='img' />
                    <h1 className='text-xl font-bold mt-4'>Limitless Earnings</h1>
                    <p>Direct Payout in your bank account in short time</p>
                </div>
                <div>
                    <Image src={whyChooseIcon4} alt='img' />
                    <h1 className='text-xl font-bold mt-4'>Training & Upskilling</h1>
                    <p>Get trained by finance and sales experts</p>
                </div>
                <div>
                    <Image src={whyChooseIcon1} alt='img' />
                    <h1 className='text-xl font-bold mt-4'>Customer Support</h1>
                    <p>Access tools and content to build relationship</p>
                </div>
                <div>
                    <Image src={whyChooseIcon3} alt='img' />
                    <h1 className='text-xl font-bold mt-4'>Financial Products</h1>
                    <p>Trustworthy & high-rated products & categories</p>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;