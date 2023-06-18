"use client"

import React from 'react';
import founder1 from "../../../../../images/AboutUs/founders/Manish.webp"
import founder2 from "../../../../../images/AboutUs/founders/Yash.webp"
import founder3 from "../../../../../images/AboutUs/founders/Lokesh.webp"
import AboutFooter from "../../../../../images/AboutUs/footer/AboutUsFooter.webp"
import Image from 'next/image';
import { FaLinkedin } from "react-icons/fa";
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutFounders = () => {

    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false,
        })
    }, [])

    return (
        <div className='bg-slate-100'>
            <div className='w-[75vw] md:h-[100vh] mx-auto'>
                <div className='text-center py-10 md:py-20'>
                    <h2 className='text-4xl font-bold'>Meet our Founders</h2>
                    <p className='text-gray-500 text-xl mt-2'>Few words from founders desk</p>
                </div>
                <div data-aos="fade-up" className='md:flex gap-24 md:mt-14'>
                    <div>
                        <Image src={founder1} alt='img' />
                        <div className='flex justify-between items-center mt-6'>
                            <div>
                                <h2 className='text-2xl text-gray-700'>Manish Shara</h2>
                                <p className='text-xl text-gray-600'>Co-Founder & CEO</p>
                            </div>
                            <div className='text-4xl'>
                                <a href="https://www.linkedin.com/in/manishshara/"><FaLinkedin /></a>
                            </div>
                        </div>
                    </div>
                    <div className='mt-6 md:mt-0'>
                        <Image src={founder2} alt='img' />
                        <div className='flex justify-between items-center mt-6'>
                            <div>
                                <h2 className='text-2xl text-gray-700'>Yash Desai</h2>
                                <p className='text-xl text-gray-600'>Co-Founder</p>
                            </div>
                            <div className='text-4xl'>
                                <a href="https://www.linkedin.com/in/yash-desai-20a3b5b1/"><FaLinkedin /></a>
                            </div>
                        </div>
                    </div>
                    <div className='mt-6 md:mt-0'>
                        <Image src={founder3} alt='img' />
                        <div className='flex justify-between items-center mt-6'>
                            <div>
                                <h2 className='text-2xl text-gray-700'>Lokesh Agarwal</h2>
                                <p className='text-xl text-gray-600'>CTO</p>
                            </div>
                            <div className='text-4xl'>
                                <a href="https://www.linkedin.com/in/lokesh198/"><FaLinkedin /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mb-1 mt-6 md:mt-0'>
                <Image src={AboutFooter} alt='footer' />
            </div>
        </div>
    );
};

export default AboutFounders;