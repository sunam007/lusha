import React from 'react';

// { image, name, company, rating, testimonial, statValue, statLabel }

const Card = () => (
    <div className="bg-white shadow-md rounded-lg border border-[#ececec] w-[320px] h-[390px] pt-12 px-6 pb-7" >
        <div className='flex flex-col justify-between'>
            <div className="flex items-center mb-4">
                <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
            </div>

            <p className="mb-4 text-xl leading-8 font-semibold  text-[#151417] -tracking-[1px]">“I honestly couldn’t imagine working without Lusha, it’s a game changer.”</p>

            <div className="flex items-center mb-6 ">
                <img className="w-14 h-14 rounded-full mr-4" src="https://picsum.photos/300" alt="Eric Lindroos" />
                <div>
                    <h3 className="text-[#151417] text-base font-semibold leading-relaxed">
                        <strong>Eric Lindroos</strong>
                    </h3>
                    <p className="text-base leading-relaxed text-[#8b8b8b] font-medium">Ippon Tech</p>
                </div>
            </div>

            <div className='border-b border-gray-200'></div>

            <div className="pt-4">
                <h3 className="text-[32px] leading-9 font-bold text-[#151417] mb-1">99%</h3>
                <p className="text-base leading-relaxed text-[#151417] font-medium">
                    <strong> More meetings</strong>
                </p>
            </div>
        </div>
    </div>
);

export default Card;