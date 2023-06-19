import Image from 'next/image';
import React from 'react';
import evolutionImg from "../../../public/images/AboutUs/Evolution/Growth.webp"

const AboutEvolution = () => {
    return (
        <div className='mt-4 w-[80vw] mx-auto'>
            <div className='text-center mb-20'>
                <h2 className='text-4xl font-bold'>How we evolved over the years</h2>
            </div>
            <div>
                <Image src={evolutionImg} alt='img'/>
            </div>
        </div>
    );
};

export default AboutEvolution;