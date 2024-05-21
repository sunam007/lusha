import Image from 'next/image';
import React from 'react';
import revenue from "@public/icons/Revenue_icon.svg";


const AttributeItem = ({ logo, caption }) => {
    return (
        <div className="flex flex-col items-center mx-6 my-6 lg:my-8 w-[122px] h-[80px]">

            <div className="flex justify-center items-center w-[56px] h-[56px]">
                <Image src={logo} width={56} height={56} alt="icon" />
            </div>
            <p className="mt-2 text-sm font-semibold">
                {caption}
            </p>
        </div>
    );
};

export default AttributeItem;