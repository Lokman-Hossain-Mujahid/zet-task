import Image from 'next/image';
import React from 'react';
import footerImg from "../../../../images/footer/AboutUs.webp"
import footerLogo from "../../../../images/footer/zet_logo_white.04e35c15.svg"
import { HiOutlinePhone } from "react-icons/hi";
import { FiMail } from "react-icons/fi";
import { FaLinkedin, FaInstagramSquare, FaFacebookSquare, FaTelegramPlane, FaWhatsappSquare } from "react-icons/fa";
import Link from 'next/link';



const Footer = () => {
    return (
        <div className='relative h-[50vh]'>
            <div className='absolute inset-0 '>
                <Image className='' src={footerImg} alt='footerLogo' fill />
            </div>
            <div className='relative z-10 flex flex-col w-[80vw] mx-auto h-full'>
                <div>
                    <Image className='mt-6 w-30' src={footerLogo} alt='footerLogo' />
                </div>
                <hr className='mt-3 mb-12' />
                <div className='relative text-lg grid grid-cols-4 w-full mx-auto text-white'>
                    <ul>
                        <li className='mb-4'>COMPANY</li>
                        <li><Link href="/about">About Us</Link></li>
                        <li className='my-1'><Link href="/partner">Partner with us</Link></li>
                        <li><Link href="/blog">Blog</Link></li>
                    </ul>
                    <ul>
                        <li className='mb-4'>LEGAL</li>
                        <li className='my-1'><a>Private Policy</a></li>
                        <li><a>Terms of Use</a></li>
                    </ul>
                    <ul>
                        <li className='mb-4'>CONTACT</li>
                        <li className='flex items-center gap-3 my-1'><FiMail className='h-4' /><a>hi@zetapp.in</a></li>
                        <li className='flex items-center gap-3'><HiOutlinePhone className='h-4' /><a>+91-7417274072</a></li>
                    </ul>
                    <ul>
                        <li className='mb-4'>SOCIAL</li>
                        <div className='flex gap-6'>
                            <li className=''><FaLinkedin className='h-7 w-7' /></li>
                            <li className=''><FaInstagramSquare className='h-7 w-7' /></li>
                            <li className=''><FaFacebookSquare className='h-7 w-7'  /></li>
                            <li className=''><FaTelegramPlane className='h-7 w-7'  /></li>
                            <li className=''><FaWhatsappSquare className='h-7 w-7'  /></li>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;