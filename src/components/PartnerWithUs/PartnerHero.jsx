import Image from 'next/image';
import React from 'react';
import grid1 from "../../../../../images/products/decImg.ead9275f.svg";
import grid2 from "../../../../../images/products/decImg2.3cc2964a.svg";
import partnerHero from "../../../../../images/partner/hero/PartnerWithUsImage.webp"

const PartnerHero = () => {
    return (
        <div className=''>
            <div className=''>
                <div className='flex justify-between relative -z-10 md:-mt-16'>
                    <div className=''>
                        <Image className='' src={grid1} alt='Grid 1' width="341" height="452" />
                    </div>
                    <div className='mt-52'>
                        <Image className='' src={grid2} alt='Grid 2' width="386" height="452" />
                    </div>
                </div>
            </div>
            <div className='mx-auto w-[99vw] flex justify-center -mt-[400px] md:-mt-[520px]'>
                <Image src={partnerHero} alt='img' width="1550" height="500"/>
            </div>
            
        </div>
    );
};

export default PartnerHero;