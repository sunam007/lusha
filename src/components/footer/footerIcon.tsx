import Image from 'next/image';
import React from 'react';

const FooterIcon = ({ image, href }) => {
    return (
        <a href={href} className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
            <Image src={image} alt='' />
        </a>
    );
};

export default FooterIcon;
