import React from 'react';
import featured1 from "../../../public/images/AboutUs/featured/EconomicTimes.webp"
import featured2 from "../../../public/images/AboutUs/featured/Inc42.webp"
import featured3 from "../../../public/images/AboutUs/featured/mint.webp"
import featured4 from "../../../public/images/AboutUs/featured/YourStory.webp"
import featured5 from "../../../public/images/AboutUs/featured/BusinessStandard.webp"
import Image from 'next/image';

const GotFeatured = () => {
    return (
        <div className='h-[50vh]  bg-slate-50 mt-10'>
            <div className='w-[80vw] mx-auto'>
                <div>
                    <h2 className='text-4xl font-bold py-16 text-gray-700'>Got Featured</h2>
                </div>
                <div className='flex gap-2'>
                    <div>
                        <a href="https://economictimes.indiatimes.com/tech/funding/onecode-has-raised-13-million-in-fresh-funding-led-by-general-catalyst/articleshow/90571172.cms"><Image src={featured1} alt='img' /></a>
                    </div>
                    <div>
                        <a href="https://inc42.com/buzz/fintech-startup-onecode-raises-13mn-in-series-a-round-led-by-general-catalyst/"><Image src={featured2} alt='img' /></a>
                    </div>
                    <div>
                        <a href="https://www.livemint.com/companies/start-ups/onecode-raises-5-million-led-by-sequoia-s-surge-and-nexus-venture-partners-11626329270757.html"><Image src={featured3} alt='img' /></a>
                    </div>
                    <div>
                        <a href="https://yourstory.com/2022/03/funding-alert-onecode-series-a-general-catalyst-financial-services"><Image src={featured4} alt='img' /></a>
                    </div>
                    <div>
                        <a href="https://www.business-standard.com/article/companies/onecode-raises-5-mn-led-by-sequoia-capital-s-surge-nexus-venture-partners-121071500470_1.html"><Image src={featured5} alt='img' /></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GotFeatured;