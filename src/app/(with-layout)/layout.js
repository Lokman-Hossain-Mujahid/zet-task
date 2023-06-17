import Navbar from '@/components/Navbar';
import React from 'react';

const withLaOut = ({ children }) => {
    return (
        <div>
            <Navbar/>
            <hr className='my-2' />
            {children}
            <footer>Footer</footer>
        </div>
    );
};

export default withLaOut;