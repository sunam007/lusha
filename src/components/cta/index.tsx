import React from 'react';
import { FaCheckCircle } from "react-icons/fa";

import "./style.css"
// import SearchButton from '../navbar/search-button';
import SearchButton from '@/components/navbar/search-button';
import CtaButton from '../ctaButton';

const Cta = () => {
    return (
        <section className='bg-[#600dff]'>
            <div className=''>
                <div className='max-w-7xl mx-auto px-4 pt-8 lg:mb-16 mb-10'>
                    <div className='text-center px-16 space-y-7'>
                        <div className='pt-16 lg:pt-14'>
                            <h3 className='small-title'>Reach all your ideal customers from one place</h3>
                        </div>
                        <div>
                            <CtaButton />
                        </div>
                    </div>
                </div>

            </div>
            <div className='bg-[#5b0cf2] z-10'>
                <div className='max-w-7xl mx-auto hidden lg:flex justify-center items-center h-10 '>
                    <ul className='flex justify-center items-center space-x-2 text-white text-xs'>
                        <li className='inline-flex items-center space-x-1'>
                            <FaCheckCircle />
                            <span>Free contact shows a month</span>
                        </li>
                        <li className='inline-flex items-center space-x-1'>
                            <FaCheckCircle />
                            <span>Free contact shows a month</span>
                        </li>
                        <li className='inline-flex items-center space-x-1'>
                            <FaCheckCircle />
                            <span>Free contact shows a month</span>
                        </li>
                        <li className='inline-flex items-center space-x-1'>
                            <FaCheckCircle />
                            <span>Free contact shows a month</span>
                        </li>
                    </ul>
                </div>
            </div>



        </section>
    );
};

export default Cta;