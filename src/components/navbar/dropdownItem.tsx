import React from 'react';
import "./navbar.css"
import email from "@public/icons/email.png"
import Image from 'next/image';

const DropdownItem = ({ sectionTitle, itemArr }) => {
    return (
        <ul className='w-52 pr-6 border-b lg:border-b-0 lg:border-r border-solid last:border-0'>
            <li className='sm:pt-6 sm:pb-12 pt-6 pb-3'>
                <h2 className="dropdown-section-title">{sectionTitle}</h2>
            </li>
            {
                itemArr.map(item => {
                    return (
                        <li key={item?.id} className='mb-8'>
                            <a href="#" >
                                <div className="flex items-start space-x-3 rounded-lg">

                                    <Image src={email} width={24} height={24} alt='' />

                                    <div className='space-y-2'>
                                        <h2 className="dropdown-item-title">{item?.itemTitle}</h2>
                                        <span className="dropdown-item-description">{item?.description}</span>
                                    </div>
                                </div>
                            </a>
                        </li>
                    )
                })
            }
        </ul>
    );
};

export default DropdownItem;