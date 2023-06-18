import Image from 'next/image';
import React from 'react';
import Logo from "../../../../images/Logo/zet_new_logo.7adcc993.svg"
import Link from 'next/link';

const navLinks = [
    {
        path: '/',
        title: 'Home',
    },
    {
        path: '/about',
        title: 'About Us',
    },
    {
        path: '/partner',
        title: 'Partner With Us',
    },
    {
        path: '/blog',
        title: 'Blogs',
    },
]


const Navbar = () => {
    return (
        <div>
            <nav className='md:flex items-center md:justify-between w-[100vw] md:w-[90vw] mx-auto mt-4'>
                <div className='flex justify-center'><Image className='h-14 w-24' src={Logo} alt='Logo' /></div>
                <ul className='md:flex text-center items-center justify-center gap-5 text-lg text-gray-500'>
                    {
                        navLinks.map(({ path, title }) => (
                            <li key={path}>
                                <Link href={path}>{title}</Link>
                            </li>
                        ))
                    }
                    <button className='text-lg bg-blue-500 text-white rounded-lg py-1 px-2'>Download ZET</button>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;