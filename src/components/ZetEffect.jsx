"use client"

import React, { useEffect, useRef, useState } from 'react';
import '@/components/ZetEffect.css';
import sliderBg from '../../public/images/middleTextSliderBG/peeps1.webp';
import Image from 'next/image';

const ZetEffect = () => {
  

  return (
    <div className='parallelogram-wrapper'>
      <div className='parallelogram'>
        <div className='inner-parallelogram flex items-center'>
          <Image className='md:h-[53vh] h-[30vh] mt-[100px] w-1/2 mix-blend-luminosity' src={sliderBg} alt='img' />
          <div className='md:-ml-20'>
            <h2 className='md:text-2xl font-bold text-white'>THE ZET EFFECT</h2>
            <p className='md:text-3xl text-white md:font-bold mt-6'>We helped customers in more than 50 cities to get to their first financial product</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZetEffect;

