import React from 'react';
import Marquee from 'react-fast-marquee';
import sliderImg1 from "../../public/images/marque/Amex.webp"
import sliderImg2 from "../../public/images/marque/Aufin.webp"
import sliderImg3 from "../../public/images/marque/Axis.webp"
import sliderImg4 from "../../public/images/marque/Bajaj.webp"
import sliderImg5 from "../../public/images/marque/BOB.webp"
import sliderImg6 from "../../public/images/marque/Icici.webp"
import sliderImg7 from "../../public/images/marque/Idfc.webp"
import sliderImg8 from "../../public/images/marque/IndusInd.webp"
import sliderImg9 from "../../public/images/marque/StandardChartered.webp"
import sliderImg10 from "../../public/images/marque/YesBank.webp"
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';


const MarqueeSlider = () => {
    return (
        <div className='w-[80vw] mx-auto mt-32'>
            <div className='text-center mb-8'>
                <h1 className='font-bold text-2xl'>Top Brands on ZET</h1>
                <h1 className='text-xl text-gray-500'>We are trusted by best brand in the country</h1>
            </div>
            <div>
                <Marquee>
                    <div className='border rounded py-2 px-4 m-3'>
                        <Image className='h-14 w-30' src={sliderImg1} alt='slider1'/>
                    </div>
                    <div className='border rounded py-2 px-4 m-3'>
                        <Image className='h-14 w-30' src={sliderImg2} alt='slider1'/>
                    </div>
                    <div className='border rounded py-2 px-4 m-3'>
                        <Image className='h-14 w-30' src={sliderImg3} alt='slider1'/>
                    </div>
                    <div className='border rounded py-2 px-4 m-3'>
                        <Image className='h-14 w-30' src={sliderImg4} alt='slider1'/>
                    </div>
                    <div className='border rounded py-2 px-4 m-3'>
                        <Image className='h-14 w-30' src={sliderImg5} alt='slider1'/>
                    </div>
                    <div className='border rounded py-2 px-4 m-3'>
                        <Image className='h-14 w-30' src={sliderImg6} alt='slider1'/>
                    </div>
                    <div className='border rounded py-2 px-4 m-3'>
                        <Image className='h-14 w-30' src={sliderImg7} alt='slider1'/>
                    </div>
                    <div className='border rounded py-2 px-4 m-3'>
                        <Image className='h-14 w-30' src={sliderImg8} alt='slider1'/>
                    </div>
                    <div className='border rounded py-2 px-4 m-3'>
                        <Image className='h-14 w-30' src={sliderImg9} alt='slider1'/>
                    </div>
                    <div className='border rounded py-2 px-4 m-3'>
                        <Image className='h-14 w-30' src={sliderImg10} alt='slider1'/>
                    </div>
                </Marquee>
            </div>
        </div>
    );
};

export default MarqueeSlider;