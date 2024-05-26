import React from 'react';
import Navigation from './navigation';
import "./style.css"

const Capabilities = () => {
    return (
        <section className='bg-[#f6f6f6]'>
            <div className='max-w-7xl mx-auto px-4 pt-8 '>
                <div className='pt-16 lg:pt-14'>
                    <h3 className='capability-section-title'>Reach all your ideal customers from one place</h3>
                </div>

                <div className='pt-10 lg:py-[72px]'>
                    <Navigation />
                </div>

            </div>
        </section>
    );
};

export default Capabilities;