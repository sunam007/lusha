import FooterSection from './footerSection';
import FooterIcon from './footerIcon';
import {
    companyLinks,
    informationLinks,
    legalLinks,
    productLinks,
    resourceLinks,
    socialMediaLinks
} from './footerData';
import logo from "@public/logo/logo.svg"
import Image from 'next/image';
import "./style.css"


const Footer = () => {
    return (
        <>
            <footer className="bg-white lg:pt-20 pb-20">
                <div className="mx-auto w-full max-w-screen-xl">
                    <div className="grid grid-cols-1 px-4 py-6 lg:py-8 md:grid-cols-5">
                        <FooterSection title="Products" links={productLinks} />
                        <FooterSection title="Company" links={companyLinks} />
                        <FooterSection title="Information" links={informationLinks} />
                        <FooterSection title="Legal" links={legalLinks} />
                        <FooterSection title="Resources" links={resourceLinks} />
                    </div>
                    <div className="px-4 py-6 flex items-center justify-between">
                        <a href="#" >
                            <Image src={logo} alt='' />
                        </a>
                        <div className="flex sm:justify-center md:mt-0 lg:space-x-5 space-x-3">
                            {socialMediaLinks.map((link, index) => (
                                <FooterIcon key={index} image={link.image} href={link.href} />
                            ))}
                        </div>

                    </div>
                    <div>
                        <hr className='h-px mt-px bg-gray-200 border-0 dark:bg-gray-900' />

                        <p className='copyright pt-8 '>
                            © Copyright 2024 Lusha Systems Inc. All rights reserved.
                            <br className='lg:hidden' />
                            800 Boylston St. Suite 1410 Boston, MA 02199.
                            <br className='lg:hidden' />
                            <br className='lg:hidden' />
                            Lusha is more than just a directory of company phone numbers or a simple email finder tool.
                            <br className='lg:hidden' />
                            With our sales intelligence platform, your team can build the ultimate prospecting lists with power-ups like data enrichment and buyer intent data and land even more closed-wons. <a href='#'><span className='text-[#600dff] hover:text-[#4200c0] font-medium leading-5'>Start for free</span></a>
                        </p>
                    </div>
                </div>
            </footer>

        </>
    );
};

export default Footer;

// <footer className=''>
//     <div className='max-w-6xl mx-auto px-4 pt-16'>
//         <div className='flex justify-between items-center mb-2'>
//             <div>
//                 <a href="#">
//                     <Image src={lusha} alt='logo' />
//                 </a>
//             </div>

//             <ul className='flex space-x-3'>
//                 <li>
//                     <a href="#">
//                         <Image src={fb} alt='' />
//                     </a>
//                 </li>
//                 <li>
//                     <a href="#">
//                         <Image src={fb} alt='' />
//                     </a>
//                 </li>
//                 <li>
//                     <a href="#">
//                         <Image src={fb} alt='' />
//                     </a>
//                 </li>
//                 <li>
//                     <a href="#">
//                         <Image src={fb} alt='' />
//                     </a>
//                 </li>
//             </ul>
//         </div>
//         {/* <div className='border border-black'></div> */}
//     </div>
// </footer>