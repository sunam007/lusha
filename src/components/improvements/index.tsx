import Image from 'next/image';
import React from 'react';
import ImprovementCard from './improvementCard';
import carto from "@public/images/carto.svg"
import devere from "@public/images/devere-logo.svg"
import oracle from "@public/images/oracle-netsuite-logo.svg"
import insight from "@public/images/insight-global-logo.svg"

import "./style.css"

const Improvements = () => {
    return (
        <section className=''>
            <div className='max-w-7xl mx-auto px-4 pt-16 '>
                <div className='relative min-h-[200px]'>
                    <h2 className="text-center text-[#151417] text-3xl leading-9 font-bold mb-4 tracking-tight">Top revenue teams rely on Lusha to smash their goals</h2>
                </div>

            </div>
            <div className='bg-[#600dff]'>
                <div className='max-w-7xl mx-auto px-4 pt-8 '>
                    <div className='improvement-wrapper flex justify-between flex-wrap'>
                        <ImprovementCard image={devere} />
                        <ImprovementCard image={carto} />
                        <ImprovementCard image={insight} />
                        <ImprovementCard image={oracle} />
                        <ImprovementCard image={oracle} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Improvements;