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
        <section className='bg-[#6610f2]'>
            <div className='max-w-7xl mx-auto px-4 pt-16 '>
                <div className='flex min-h-[560px] lg:py-20 pt-16'>
                    <div className='relative z-10'>

                        <h1 className='text-white mb-4 lg:font-black lg:text-6xl lg:leading-none text-center lg:text-left text-5xl  font-bold '>Reach the right <br /> decision makers</h1>

                        <p className='text-white mb-6 font-medium text-xl text-center lg:text-left'>Sell more and close more with the most accurate B2B <br />
                            company and contact data.
                        </p>

                        <div className='flex'>
                            <SearchButton />
                        </div>

                        <div className='mt-4'>
                            <Image src={rating} alt='rating' />
                        </div>

                        <div className='flex flex-col lg:flex-row lg:my-[88px] my-[40px] space-y-4 lg:space-y-0 lg:space-x-4'>
                            <Image src={ccpa} alt='ccpa' />
                            <Image src={gdpr} alt='gdpr' />
                            <Image src={iso} alt='iso' />
                        </div>
                    </div>

                    <Video />
                </div>
            </div>
        </section>
    );
};

{/* <video src="../../../public/video/hero_vid.mp4" autoPlay muted loop></video> */ }
{/* <Image src={hero} alt='hero' width={1200} height={800} /> */ }

export default Hero