import Image from 'next/image';
import React from 'react';

const ImprovementCard = ({ image }) => {
    return (
        <div className='z-20 relative group '>
            <div className='h-[198px] w-[222px] border-2 border-[#ececec] hover:border-black rounded-lg bg-white px-8 py-6 grid z-10 hover:-translate-y-4 transition-all delay-100 duration-200 ease-in '>
                <h3 className='font-black text-[44px] leading-[48px] text-[#151417]' >3X</h3>
                <p className='row-span-2 leading-5 mt-1 text-[#151417] font-normal'>More outbound leads</p>
                <Image src={image} alt='' />
            </div>
            <div className='invisible group-hover:visible h-[125px] group-hover:h-[110px] w-[222px] rounded-b-lg  bg-[#4e0bcd] absolute -left-[10px] top-[84px] -z-10 transition-all delay-100 duration-200 ease-in'></div>
        </div>
    );
};

export default ImprovementCard;