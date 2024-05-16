import React from 'react';
import google from "@public/logo/GoogleLogo.svg";
import seismic from "@public/logo/seismic-1.svg";
import sisense from "@public/logo/Sisenselogo.svg";
import zendesk from "@public/logo/Zendesk.svg";
import yotpo from "@public/logo/yotpo-1.svg";
import Image from 'next/image';

const LogoContainer = () => {
    return (
        <section>
            <div className='max-w-7xl mx-auto bg-["#fff"]'>
                <div className='flex lg:justify-center flex-wrap lg:flex-nowrap my-4 lg:my-0'>
                    <Image src={google} width={150} height={50} className='lg:m-8 mx-4 my-1 ' alt='hero' />
                    <Image src={seismic} width={150} height={50} className='lg:m-8 mx-4 my-1 ' alt='hero' />
                    <Image src={sisense} width={150} height={50} className='lg:m-8 mx-4 my-1 ' alt='hero' />
                    <Image src={yotpo} width={150} height={50} className='hidden lg:block lg:m-8 mx-4 my-1 ' alt='hero' />
                    <Image src={zendesk} width={150} height={50} className='lg:m-8 mx-4 my-1 ' alt='hero' />
                </div>
            </div>
        </section>
    );
};

export default LogoContainer;