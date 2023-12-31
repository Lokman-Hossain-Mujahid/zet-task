"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import Logo from "../../public/images/Logo/zet_new_logo.7adcc993.svg"
import Link from 'next/link';
import NavLink from './NavLink';

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
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className='bg-white py-2'>
      <nav className='md:flex items-center md:justify-between w-[100vw] md:w-[90vw] mx-auto md:mt-4'>
        <div className='flex justify-center'>
          <Image className='h-14 w-24' src={Logo} alt='Logo' />
        </div>
        <div className='md:hidden flex justify-center w-full'>
          <button
            onClick={toggleMobileMenu}
            className='text-lg bg-blue-500 text-white rounded-lg mt-2 py-1 px-5'
          >
            {isMobileMenuOpen ? 'Close' : 'Menu'}
          </button>
        </div>
        <ul
          className={`${
            isMobileMenuOpen ? 'block' : 'hidden'
          } md:flex text-center items-center justify-center gap-5 text-lg text-gray-500`}
        >
          {navLinks.map(({ path, title }) => (
            <li key={path}>
              <NavLink exact={path === '/'} activeClassName='text-blue-500' href={path}>
                {title}
              </NavLink>
            </li>
          ))}
          <button className='text-lg bg-blue-500 text-white rounded-lg py-1 px-2'>
            Download ZET
          </button>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

