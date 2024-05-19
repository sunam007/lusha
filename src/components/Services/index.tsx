import React from 'react';
import Image from 'next/image';
import graph from '@public/icons/Unrivalled-data-quality-mobile.svg'
import clock from '@public/icons/clock.svg'
import arrow from '@public/icons/arrow-target.svg'
import FeatureItem from './single-service';
import Video from './video';
import ServiceItem from './single-service';

const Services = () => {
    return (
        <section>
            <div className='max-w-7xl mx-auto px-4 pt-16'>
                <div>
                    <h2 className='text-center lg:pt-24 lg:mb-12 font-bold lg:text-4xl'>Run your sales cycles like a sprint</h2>
                </div>

                <div className='flex flex-row odd:flex-row-reverse items-center'>
                    <ServiceItem />
                </div>
            </div>
        </section>
    );
};

export default Services;