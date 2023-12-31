"use client"

import React, { useState } from 'react';
import grid1 from "../../public/images/products/decImg.ead9275f.svg";
import grid2 from "../../public/images/products/decImg2.3cc2964a.svg";
import Image from 'next/image';
import product1 from "../../public/images/products/AccountSave.webp"
import product2 from "../../public/images/products/BNPL.webp"
import product3 from "../../public/images/products/CC.webp"
import product4 from "../../public/images/products/Loan.webp"
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Tilt from 'react-parallax-tilt'


const ProductsOnZet = () => {

    const [scale, setScale] = useState(1.10);

    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false,
        })
    }, [])

    return (
        <div className='bg-blue-50 md:h-[100vh]'>
            <div className='text-center mb-8 md:pt-20'>
                <h1 className='font-bold text-2xl'>Products on ZET</h1>
                <h1 className='text-xl text-gray-500'>We are trusted by best brands in the country</h1>
            </div>
            <div data-aos="fade-up" className='grid md:grid-cols-2 md:pb-4 pb-0 gap-10 w-[90vw] md:w-[80vw] mx-auto relative z-10'>
                <Tilt scale={scale} transitionSpeed={2000}>
                    <div className='flex gap-4 items-center bg-green-100 hover:bg-pink-50 rounded px-10 py-6'>
                        <div>
                            <Image className='md:h-52 md:w-64  grayscale hover:grayscale-0' src={product3} alt='product1' />
                        </div>
                        <div className='mt-2'>
                            <h1 className='text-xl font-bold'>CREDIT CARDS</h1>
                            <p className='text-gray-500'>100% Contactless Application Process with Instant Approval From Top Banks.</p>
                        </div>
                    </div>
                </Tilt>
                <Tilt scale={scale} transitionSpeed={2000}>
                    <div className='flex gap-4 items-center bg-yellow-100 hover:bg-pink-50  rounded px-10 py-6'>
                        <div>
                            <Image className='md:h-52 md:w-64  grayscale hover:grayscale-0 ' src={product4} alt='product1' />
                        </div>
                        <div className='mt-2'>
                            <h1 className='text-xl font-bold'>LOANS</h1>
                            <p className='text-gray-500'>100% online process. Instant offers. Affordable Rate of Interest on loans.</p>
                        </div>
                    </div>
                </Tilt>
                <Tilt scale={scale} transitionSpeed={1000}>
                    <div className='flex gap-4 items-center bg-red-100  hover:bg-pink-50  rounded px-10 py-6'>
                        <div>
                            <Image className='md:h-52 md:w-64  grayscale hover:grayscale-0' src={product2} alt='product1' />
                        </div>
                        <div className='mt-2'>
                            <h1 className='text-xl font-bold'>BUY NOW PAY LATER</h1>
                            <p className='text-gray-500'>Short-term financing that allows consumers to make purchases and pay for them over time.</p>
                        </div>
                    </div>
                </Tilt>
                <Tilt scale={scale} transitionSpeed={2000}>
                    <div className='flex gap-4 items-center bg-orange-100 hover:bg-pink-50  rounded px-10 py-6'>
                        <div>
                            <Image className='md:h-52 md:w-64   grayscale hover:grayscale-0' src={product1} alt='product1' />
                        </div>
                        <div className='mt-2'>
                            <h1 className='text-xl font-bold'>SAVING ACCOUNTS</h1>
                            <p className='text-gray-500'>ZET offers range of savings account that suits your personal needs for the banking.</p>
                        </div>
                    </div>
                </Tilt>
            </div>
            <div className=''>
                <div className='flex justify-between'>
                    <div className='absolute top-[200%] md:top-[100%]'>
                        <Image className='' src={grid1} alt='Grid 1' width="341" height="452" />
                    </div>
                    <div className='absolute top-[320%] right-0 md:top-[141%]'>
                        <Image className='' src={grid2} alt='Grid 2' width="386" height="452" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsOnZet;
