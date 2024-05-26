import React from 'react';
import { FaCheckCircle } from "react-icons/fa";

const Cta = () => {
    return (
        <section >
            <div className='max-w-7xl mx-auto px-4 pt-8 '>
                <div className='text-center px-16 mb-10 lg:mb-16'>
                    <div className='pt-16 lg:pt-14'>
                        <h3 className='capability-section-title'>Reach all your ideal customers from one place</h3>
                    </div>
                    <div>
                        search box
                    </div>
                </div>

                <div className='bg-purple-600'>


                    <ul className='flex justify-center items-center space-x-2'>
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