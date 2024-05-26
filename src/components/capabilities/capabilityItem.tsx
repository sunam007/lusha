import Image from 'next/image';
import React from 'react';

const CapabilityItem = ({title , description , image}) => {
    return (
        <div className='capabilities-tabs__item lg:flex justify-between mt-14'>
            <div className='lg:max-w-[385px] lg:text-left text-center'>
                <h2 className='capability-tab-title'>Get laser-focused lists</h2>
                <p className='capability-tab-text mb-10'>
                    Use our razor-sharp filters to get your list of 1,000 prospects in one go. Easily build your lists with accurate and actionable data on each single prospect. In one click, export lists to your CRM and put your workflows on autopilot.
                </p>
                <button className='capability-btn hidden lg:block'>Start Prospecting</button>
            </div>
            <div>
                <Image src={image} alt='platform' width={690} height={430} />
            </div>
        </div>
    );
};

export default CapabilityItem;