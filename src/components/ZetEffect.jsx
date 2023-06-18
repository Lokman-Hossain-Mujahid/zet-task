import React from 'react';
import '@/components/ZetEffect.css';
import sliderBg from '../../../../images/middle text slider bg/peeps1.webp'
import Image from 'next/image';

const ZetEffect = () => {
  return (
    <div className='parallelogram-wrapper'>
      <div className='parallelogram'>
        <div className='inner-parallelogram flex items-center'>
          <Image className='h-[53vh] mt-[100px] w-1/2 mix-blend-luminosity' src={sliderBg} alt='img' />
          <div>
            <h2 className='text-2xl font-bold text-white'>THE ZET EFFECT</h2>
            <div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZetEffect;
