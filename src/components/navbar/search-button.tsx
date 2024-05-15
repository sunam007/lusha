import React from 'react';

const SearchButton = () => {
    return (
        <div className="relative">
            <input type="text" className="bg-[#f6f6f6] border py-[10px] pr-32 text-base font-extralight placeholder:text-sm placeholder:font-thin leading-none border-none rounded z-0  focus:outline-none active:outline-none" placeholder="Enter your work email" />
            <div className="absolute top-1 right-1">
                <button className=" text-black h-8 bg-[#ffde06] hover:bg-[#ffde06] px-3 rounded-sm text-sm focus:ring-2 focus:outline-none focus:ring-[#6f42c1]transition transition-transform delay-150 duration-300 ease-in-out ">Start for free</button>
            </div>
        </div>
    );
};

export default SearchButton;