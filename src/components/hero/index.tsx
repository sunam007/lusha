import React from 'react';
import SearchButton from '../navbar/search-button';
import Image from 'next/image';
import rating from "@public/icons/ratings.svg"
import ccpa from "@public/icons/ccpa-compliant.svg"
import gdpr from "@public/icons/GDPRcompliant.svg"
import iso from "@public/icons/iso.svg"
import hero from "@public/hero_bg_removed.png"
import Video from './video'

const Hero = () => {
    return (
        <section>
            <div className='bg-[#6610f2]'>
                <div className='max-w-7xl mx-auto px-4 pt-16'>
                    <div className='flex lg:px-4'>
                        <div className='w-full lg:w-1/2' >
                            <h1 className='text-white mb-4 font-black text-6xl tracking-tighter leading-none text-center lg:text-left'>Reach the right <br /> decision makers</h1>
                            <p className='text-white mb-6 font-medium text-xl text-center lg:text-left'>Sell more and close more with the most accurate B2B <br />
                                company and contact data.
                            </p>
                            <div className='flex'>
                                <SearchButton />
                            </div>
                            <div className='mt-4'>
                                <Image src={rating} alt='rating' />
                            </div>
                            <div className='flex flex-col lg:flex-row my-[88px] space-y-4 lg:space-y-0 lg:space-x-4'>
                                <Image src={ccpa} alt='ccpa' />
                                <Image src={gdpr} alt='gdpr' />
                                <Image src={iso} alt='iso' />
                            </div>
                        </div>

                        <div className='hidden lg:block w-1/2 '>
                            {/* <Video /> */}
                            {/* <video src="../../../public/video/hero_vid.mp4" autoPlay muted loop></video> */}
                            <Image src={hero} alt='hero' width={1200} height={800} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero