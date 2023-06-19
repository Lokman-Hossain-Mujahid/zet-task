import Image from 'next/image';
import React from 'react';
import aboutHero from "../../../public/images/AboutUs/Hero/OurMission.webp"


const AboutHero = () => {


    return (
        <div className="hero min-h-screen -mt-12">
            <div className="bg-opacity-60">
                <Image src={aboutHero} alt='' />
            </div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-2xl">
                    <h1 className="mb-5 text-4xl font-bold">OUR MISSION</h1>
                    <p className="mb-5 text-lg px-10">Enabling financial inclusion for the next billion Indians <br />
                        & making their Zindagi Set. Building a platform that enables you to sell
                        financial products & earn up to Rs. 1 lakh every month.</p>
                    <h1 className="mb-5 text-xl font-bold">EARN BETTER. LIVE BETTER.</h1>
                </div>
            </div>
        </div>
    );
};

export default AboutHero;