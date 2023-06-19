"use client"

import React from 'react';
import heroImg from "../../../../images/banner/HeroImgNew.webp"
import googPlay from "../../../../images/banner/downloadBtnDark.a0f01343.svg"
import Image from 'next/image';
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const HomeBanner = () => {

    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false,
        })
    }, [])

    return (
        <div data-aos="fade-up" className='bg-blue-100 bg-opacity-50 md:w-[80vw] rounded mx-auto md:flex justify-around items-center px-4 py-4 md:py-0 md:px-16 mt-24'>
            <div className='font-bold'>
                <h1 className='text-4xl'>Become a Financial Advisor and <span className='text-blue-600'>Earn Rs.1 Lakh/Month</span></h1>
                <h2 className='font-normal text-xl my-6'>No Investment required</h2>
                <Image className='w-32 mb-4 md:mb-0 md:ml-4' src={googPlay} alt='google button'/>
            </div>
            <div>
                <Image className='md:w-[500px] md:-mt-16' src={heroImg} alt=''/>
            </div>
        </div>
    );
};

export default HomeBanner;