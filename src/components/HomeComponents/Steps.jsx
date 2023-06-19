import React from 'react';
import "@/components/HomeComponents/Steps.css"
import googleButton from "../../../../../images/banner/downloadBtnDark.a0f01343.svg"
import Image from 'next/image';
// import bg from "../../../../../images/earningDec.b2e9943b.svg"

const Steps = () => {
  return (
    <div className='pparallelogram-wrapper '>
      <div className='pparallelogram '>
        <div className=''>
          <div className='text-center'>
            <h2 className='text-2xl font-bold text-white pt-[250px] md:pt-72'>Start Earning in 3 Easy Steps

            </h2>
            <p className='md:text-3xl text-white font-bold mt-6'>We have create the app the make your earning easy

            </p>
          </div>
          <div className='grid grid-cols-3 gap-2 md:gap-0 px-1 md:px-0'>
            <div className='md:mt-40 mt-10 text-white md:w-[20vw] mx-auto text-center '>
              <h2 className='md:text-3xl btn btn-info text-white'>STEP 1</h2>
              <p className='md:text-2xl font-bold my-8'>Download the App and Sign up as a ZET Agent </p>
              <a href="https://play.google.com/store/apps/details?id=in.onecode.app"><Image className='md:w-[10vw] mx-auto' src={googleButton} alt='button' /></a>
            </div>
            <div className='md:mt-40 mt-10 text-white md:w-[20vw] mx-auto  text-center '>
              <h2 className='md:text-3xl btn btn-info text-white'>STEP 2</h2>
              <p className='md:text-2xl font-bold my-8'>Register your customers and Recommend financial products </p>
              <a href="https://play.google.com/store/apps/details?id=in.onecode.app"><Image className='md:w-[10vw] mx-auto' src={googleButton} alt='button' /></a>
            </div>
            <div className='md:mt-40 mt-10 text-white md:w-[20vw] mx-auto  text-center '>
              <h2 className='md:text-3xl btn btn-info text-white'>STEP 3</h2>
              <p className='md:text-2xl font-bold my-8'> Start earning upto 1 lakh Rupees every month </p>
              <a href="https://play.google.com/store/apps/details?id=in.onecode.app"><Image className='md:w-[10vw] mx-auto' src={googleButton} alt='button' /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;