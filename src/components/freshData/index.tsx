import React from 'react';
import Item from './item';

const FreshData = () => {
    return (
        <section>
            <div className='max-w-7xl mx-auto px-4 pt-16'>
                <div className='flex flex-col flex-wrap '>
                    <Item />
                </div>
            </div>
        </section>
    );
};

export default FreshData;