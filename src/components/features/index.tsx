import React from 'react';
import Image from 'next/image';
import graph from '@public/icons/Unrivalled-data-quality-mobile.svg'
import clock from '@public/icons/clock.svg'
import arrow from '@public/icons/arrow-target.svg'
import FeatureItem from './single-feature';

const Features = () => {
    return (
        <section>
            <div className='max-w-7xl mx-auto px-4 pt-16'>
                <div>
                    <h2 className="text-center text-[#151417] text-3xl leading-9 font-bold mb-4 tracking-tight">Spend more time selling</h2>
                </div>
                <div className='flex flex-col lg:flex-row'>
                   <FeatureItem/>
                   <FeatureItem/>
                   <FeatureItem/>
                </div>
            </div>
        </section>
    );
};

export default Features;