"use client"

import React, { useState } from 'react';
import invComp1 from "../../../public/images/AboutUs/investors/InvCompany1.webp"
import invComp2 from "../../../public/images/AboutUs/investors/InvCompany2.webp"
import invComp3 from "../../../public/images/AboutUs/investors/InvCompany3.webp"
import invComp4 from "../../../public/images/AboutUs/investors/InvCompany4.webp"
import Image from 'next/image';
import inv1 from "../../../public/images/AboutUs/investors/Inv1.webp"
import inv2 from "../../../public/images/AboutUs/investors/Inv2.webp"
import inv3 from "../../../public/images/AboutUs/investors/Inv3.webp"
import inv4 from "../../../public/images/AboutUs/investors/Inv4.webp"
import inv5 from "../../../public/images/AboutUs/investors/Inv5.webp"
import inv6 from "../../../public/images/AboutUs/investors/Inv6.webp"
import inv7 from "../../../public/images/AboutUs/investors/Inv7.webp"
import inv8 from "../../../public/images/AboutUs/investors/Inv8.webp"
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Tilt from 'react-parallax-tilt'

const AboutInvestors = () => {

    const [scale, setScale] = useState(1.05);

    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false,
        })
    }, [])

    return (
        <div>
            <div className='w-[77vw] mx-auto mb-40'>
                <div>
                    <h2 className='text-4xl font-bold py-16 text-gray-700'>Meet the Investors</h2>
                </div>
                <div data-aos="fade-up" className='flex gap-32 mb-32 px-4'>
                    <div>
                        <Image src={invComp1} alt='img' />
                    </div>
                    <div>
                        <Image src={invComp2} alt='img' />
                    </div>
                    <div>
                        <Image src={invComp3} alt='img' />
                    </div>
                    <div>
                        <Image src={invComp4} alt='img' />
                    </div>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-5 gap-28'>
                    <Tilt scale={scale}>
                        <div>
                            <Image src={inv1} alt='img' />
                            <h2 className='mt-4 text-lg'>Kunal Shah</h2>
                            <p className='text-gray-400'>Founder, CRED</p>
                        </div>
                    </Tilt>
                    <Tilt scale={scale}>
                        <div>
                            <Image src={inv2} alt='img' />
                            <h2 className='mt-4 text-lg'>Gaurav Munjal</h2>
                            <p className='text-gray-400'>Founder, UNACADEMY</p>
                        </div>
                    </Tilt>
                    <Tilt scale={scale}>
                        <div>
                            <Image src={inv3} alt='img' />
                            <h2 className='mt-4 text-lg'>Aakrit Vaish</h2>
                            <p className='text-gray-400'>Co-Founder, HAPTIK</p>
                        </div>
                    </Tilt>
                    <Tilt scale={scale}>
                        <div>
                            <Image src={inv4} alt='img' />
                            <h2 className='mt-4 text-lg'>Harshil Mathur</h2>
                            <p className='text-gray-400'>Founder, RAZORPAY</p>
                        </div>
                    </Tilt>
                    <Tilt scale={scale}>
                        <div>
                            <Image src={inv5} alt='img' />
                            <h2 className='mt-4 text-lg'>Vidit Aatrey</h2>
                            <p className='text-gray-400'>Founder & CEO, MEESHO</p>
                        </div>
                    </Tilt>
                    <Tilt scale={scale}>
                        <div>
                            <Image src={inv6} alt='img' />
                            <h2 className='mt-4 text-lg'>Amrish Rau</h2>
                            <p className='text-gray-400'>CEO, PINELABS</p>
                        </div>
                    </Tilt>
                    <Tilt scale={scale}>
                        <div>
                            <Image src={inv7} alt='img' />
                            <h2 className='mt-4 text-lg'>Lalit Keshre</h2>
                            <p className='text-gray-400'>CEO, GROWW</p>
                        </div>
                    </Tilt>
                    <Tilt scale={scale}>
                        <div>
                            <Image src={inv8} alt='img' />
                            <h2 className='mt-4 text-lg'>Gokul Rajaram</h2>
                            <p className='text-gray-400'>Product, DOORDASH</p>
                        </div>
                    </Tilt>
                </div>
            </div>
        </div>
    );
};

export default AboutInvestors;