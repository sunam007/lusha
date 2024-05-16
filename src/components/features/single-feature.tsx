import Image from 'next/image';
import React from 'react';
import graph from '@public/icons/Unrivalled-data-quality-mobile.svg'

const FeatureItem = () => {
    return (
        <div className='flex px-9 flex-col items-center space-x-4'>
            <Image src={graph} width={140} height={104} alt='' className='w-[140px] h-[104px]' />
            <div className='text-center '>
                <h3 className='my-4 text-xl font-semibold'>Unrivaled data quality</h3>
                <p>Enhance your sales game with globally compliant and accurate data. <strong> Trusted by 1M users. </strong> </p>
            </div>
        </div>
    );
};

export default FeatureItem;