import React from 'react';
import SearchButton from '../navbar/search-button';

const Hero = () => {
    return (
        <div className='bg-[#6610f2]'>
            <div className='max-w-7xl mx-auto'>
                <h1>Reach the right decision makers</h1>
                <p>Sell more and close more with the most accurate B2B
                    company and contact data.
                </p>
                <SearchButton/>
            </div>
        </div>
    );
};

export default Hero