import React from 'react';

const CtaButton = () => {
    return (
        <div >
            <input type="text" className="bg-[#f6f6f6] lg:min-w-[370px] min-w-[240px] lg:min-h-[44px] min-h-[30px] border py-4 px-6 text-sm font-extralight placeholder:text-sm placeholder:font-thin leading-none border-none rounded z-0  focus:outline-none active:outline-none" placeholder="Enter your work email" />

            <button className=" text-black h-10 bg-[#ffde06] hover:bg-[#ffde06] px-5 rounded text-sm focus:ring-2 focus:outline-none focus:ring-[#6f42c1]transition transition-transform delay-150 duration-300 ease-in-out relative -left-[124px]">Start for free</button>
        </div>
    );
};

export default CtaButton;