import React from 'react';
import heroImg from "../../../../images/banner/HeroImgNew.webp"
import googPlay from "../../../../images/banner/downloadBtnDark.a0f01343.svg"
import Image from 'next/image';

const HomeBanner = () => {
    return (
        <div className='bg-blue-100 bg-opacity-50 w-[80vw] rounded mx-auto flex justify-around items-center px-16 mt-24'>
            <div className='font-bold'>
                <h1 className='text-4xl'>Become a Financial Advisor and <span className='text-blue-600'>Earn Rs.1 Lakh/Month</span></h1>
                <h2 className='font-normal text-xl my-6'>No Investment required</h2>
                <Image className='w-32 ml-4' src={googPlay} alt='google button'/>
            </div>
            <div>
                <Image className='w-[500px] -mt-16' src={heroImg} alt=''/>
            </div>
        </div>
    );
};

export default HomeBanner;