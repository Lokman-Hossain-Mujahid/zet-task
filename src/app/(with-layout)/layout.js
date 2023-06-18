import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React from 'react';

const withLaOut = ({ children }) => {
    return (
        <div>
            <Navbar/>
            <hr className='' />
            {children}
            <Footer/>
        </div>
    );
};

export default withLaOut;