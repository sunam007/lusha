import Image from 'next/image';
import React from 'react';
import graph from '@public/icons/Unrivalled-data-quality-mobile.svg'
import Video from './video';

const ServiceItem = () => {
    return (
        <>
            <div className='text-left w-1/2'>
                <h3 className='font-bold lg:text-4xl mb-4'>
                    Pinpoint your ideal customer
                </h3>
                <p className='text-base'>
                    Easily build precise contact lists using our advanced search filters. Pull up accurate emails, work numbers, and direct dials on the right prospects in seconds.
                </p>
            </div>
            <div className='w-1/2'>
                <Video />
            </div>
        </>
    );
};

export default ServiceItem;