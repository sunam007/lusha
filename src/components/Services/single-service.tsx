import Image from 'next/image';
import React from 'react';
import graph from '@public/icons/Unrivalled-data-quality-mobile.svg'
import Video from './video';

const ServiceItem = () => {
    return (
        <>
            <div className='flex flex-column flex-wrap items-center gap-y-4 lg:gap-y-4 even:flex-row-reverse'>
                <div className='text-center lg:text-left lg:w-1/2'>
                    <h3 className='font-bold text-[32px] text-[#151417] mb-4'>
                        Pinpoint your ideal customer
                    </h3>
                    <p className='text-base'>
                        Easily build precise contact lists using our advanced search filters. Pull up accurate emails, work numbers, and direct dials on the right prospects in seconds.
                    </p>
                </div>
                <div className='w-full lg:w-1/2'>
                    <Video />
                </div>
            </div>

        </>
    );
};

export default ServiceItem;