"use client"
import React, { useState } from 'react';
import logo from "@public/logo/logo.svg"
import Image from 'next/image';
import DropdownItem from './dropdownItem';
import SearchButton from './search-button';

const DROPDOWN_DATA = [
    {
        id: 1,
        secttionTitle: "Overview",
        children: [
            {
                id: 1,
                itemTitle: "The platform",
                description: "Learn about the features and benefits of our platform."
            },
            {
                id: 2,
                itemTitle: "Our Data",
                description: "Discover the data we collect and how we use it to improve our services."
            },
            {
                id: 3,
                itemTitle: "Our Data Privacy + Security",
                description: "Understand our commitment to data privacy and the measures we take to secure your information."
            },
        ]
    },
    {
        id: 2,
        secttionTitle: "Products",
        children: [
            {
                id: 4,
                itemTitle: "Product A",
                description: "Explore the features and capabilities of Product A."
            },
            {
                id: 5,
                itemTitle: "Product B",
                description: "Learn how Product B can help your business grow."
            },
            {
                id: 6,
                itemTitle: "Product C",
                description: "Find out why Product C is the right choice for your needs."
            },
        ]
    },
    {
        id: 3,
        secttionTitle: "Support",
        children: [
            {
                id: 7,
                itemTitle: "Customer Support",
                description: "Get assistance from our dedicated customer support team."
            },
            {
                id: 8,
                itemTitle: "FAQ",
                description: "Find answers to frequently asked questions."
            },
            {
                id: 9,
                itemTitle: "Contact Us",
                description: "Reach out to us for any inquiries or additional support."
            },
        ]
    },
    {
        id: 4,
        secttionTitle: "Company",
        children: [
            {
                id: 10,
                itemTitle: "About Us",
                description: "Learn more about our company's mission and values."
            },
            {
                id: 11,
                itemTitle: "Careers",
                description: "Explore career opportunities and join our team."
            },
            {
                id: 12,
                itemTitle: "News",
                description: "Stay updated with the latest news and announcements."
            },
        ]
    }
];

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [showMegaMenu, setShowMegaMenu] = useState(false);
    return (

        <nav
            className="bg-[#6610f2] hover:bg-white  text-white hover:text-black fixed w-full z-20 top-0 start-0 transition delay-150 duration-200 ease-in-out py-2 group">

            <div className="max-w-7xl flex flex-wrap justify-between lg:justify-start mx-auto px-4 py-2">
                <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse mr-10 ">
                    <Image src={logo} width={92} height={32} alt='logo' className='invert group-hover:invert-0 transition delay-150 duration-200 ease-in-out' />
                </a>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <button
                        data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm  rounded-lg md:hidden  focus:outline-none focus:ring-2" aria-controls="navbar-sticky" aria-expanded="false" onClick={() => setShowMenu(!showMenu)}>

                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>

                {/* navbar menus */}

                <div
                    className={`items-center justify-between w-full md:flex md:w-auto md:order-1 mr-24 ${showMenu ? "" : "hidden"}`} id="navbar-sticky">
                    <ul
                        className="flex flex-col p-4 md:p-0 mt-4 font-medium lg:space-x-10 md:flex-row md:mt-0 md:border-0">

                        <li>
                            <button
                                className="flex items-center justify-between w-full py-2 px-3 rounded md:w-auto md:hover:bg-transparent md:border-0  md:p-0 font-medium text-base leading-loose"
                                onClick={() => setShowMegaMenu(!showMegaMenu)}>
                                Why Lusha ?
                                <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6" >
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                </svg>
                            </button>
                        </li>

                        <li >
                            <a href="#" className="block py-2 px-3  md:p-0 font-medium text-base leading-loose" aria-current="page">Solutions</a>
                        </li>

                        <li>
                            <a href="#" className="block py-2 px-3  md:p-0 font-medium text-base leading-loose" aria-current="page">Pricing</a>
                        </li>

                        <li>
                            <a href="#" className="block py-2 px-3  md:p-0 font-medium text-base leading-loose" aria-current="page">Resources</a>
                        </li>
                    </ul>
                </div>

                <div
                    className={`items-center justify-between w-full md:flex md:w-auto md:order-1 hidden lg:block`} id="navbar-sticky">
                    <ul
                        className="flex flex-col items-center p-4 md:p-0 mt-4 font-medium space-x-10 md:flex-row md:mt-0 md:border-0">

                        <li>
                            <a href="#" className="block py-2 px-3  md:p-0 font-medium text-base leading-loose" aria-current="page">Contact Sales</a>
                        </li>

                        <li>
                            <a href="#" className="block py-2 px-3  md:p-0 font-medium text-base leading-loose" aria-current="page">Login</a>
                        </li>
                        <li>
                            <SearchButton/>
                        </li>

                    </ul>
                </div>

                {/* mega menu */}
            </div>
            {
                showMegaMenu
                &&
                <div id="mega-menu-full-dropdown" className="mt-1 border-gray-200 shadow-sm bg-gray-50 md:bg-white border-y dark:bg-gray-800 dark:border-gray-600">

                    <div
                        className="grid max-w-screen-xl px-4 py-5 mx-auto sm:grid-cols-5  md:px-6">
                        {
                            DROPDOWN_DATA.map(section =>
                                <DropdownItem
                                    key={section.id}
                                    sectionTitle={section.secttionTitle}
                                    itemArr={section.children} />)
                        }

                    </div>
                </div>
            }

        </nav>
    );
};

export default Navbar;