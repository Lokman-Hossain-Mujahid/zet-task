"use client"

import Image from 'next/image';
import React from 'react';
import whyChooseHero from "../../../public/images/whyChooseUs/whyUsHero.webp"
import whyChooseGrid from "../../../public/images/whyChooseUs/bgImg.webp"
import whyChooseIcon1 from "../../../public/images/whyChooseUs/customerSupport.5780cd23.svg"
import whyChooseIcon2 from "../../../public/images/whyChooseUs/Fin_products.0e8a0582.svg"
import whyChooseIcon3 from "../../../public/images/whyChooseUs/financialProduct.1b3d6eec.svg"
import whyChooseIcon4 from "../../../public/images/whyChooseUs/Icon_support.c8382fc1.svg"
import whyChooseIcon5 from "../../../public/images/whyChooseUs/quick_payout.1d689e09.svg"
import whyChooseIcon6 from "../../../public/images/whyChooseUs/zero_investment.d5743aab.svg"
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const WhyChooseUs = () => {

    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false,
        })
    }, [])

    return (
        <div className='md:flex md:h-[80vh] w-[90vw] md:w-[70vw] mx-auto items-center'>
            <div className='w-1/3'>
                <div className='absolute text-center ml-10 mt-4 md:mt-28 md:-ml-10'>
                    <h2 className='text-xl font-bold'>Why <span className='text-blue-600'>Choose Us</span></h2>
                    <p>Why we are loved by our customers</p>
                </div>
                <Image className='md:w-[250px] md:ml-0 ml-24' src={whyChooseGrid} alt='img' />
                <Image className='md:absolute -mt-[200px] md:-mt-[480px] ml-24 md:-ml-7' src={whyChooseHero} alt='img' />
            </div>
            <div data-aos="fade-up" className='md:w-3/4 mt-20 md:mt-0 grid grid-cols-2 md:grid-cols-3 gap-20'>
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