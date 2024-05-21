import React from 'react';
import Video from './video';

const Item = () => {
    return (
        <>
            <div className='flex flex-column flex-wrap items-center gap-y-4 lg:gap-y-4 odd:flex-row-reverse'>
                <div className='text-center lg:text-left lg:w-1/2'>
                    <h3 className='font-bold text-[32px] text-[#151417] mb-4'>
                        The freshest data you can find
                    </h3>
                    <p className='text-base'>
                        Join the largest community and work with the cleanest data day in, day out. Share your network’s contact info, get accurate data, free credits, and access to early features.
                    </p>
                </div>
                <div className='w-full lg:w-1/2'>
                    <Video />
                </div>
            </div>

        </>
    );
};

export default Item;