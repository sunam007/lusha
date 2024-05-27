import Image from 'next/image';
import React from 'react';
import lusha from "@public/logo/logo.svg"
import fb from "@public/icons/facebook.svg"

const Footer = () => {
    return (
        <footer className=''>
            <div className='max-w-6xl mx-auto px-4 pt-16'>
                <div className='flex justify-between items-center mb-2'>
                    <div>
                        <a href="#">
                            <Image src={lusha} alt='logo' />
                        </a>
                    </div>

                    <ul className='flex space-x-3'>
                        <li>
                            <a href="#">
                                <Image src={fb} alt='' />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <Image src={fb} alt='' />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <Image src={fb} alt='' />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <Image src={fb} alt='' />
                            </a>
                        </li>
                    </ul>
                </div>
                {/* <div className='border border-black'></div> */}
            </div>
        </footer>
    );
};

export default Footer;