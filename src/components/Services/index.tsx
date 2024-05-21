import ServiceItem from './single-service';

const Services = () => {
    return (
        <section>
            <div className='max-w-7xl mx-auto px-4 pt-16'>

                <div className='hidden lg:block '>
                    <h2 className='text-center lg:pt-24 lg:mb-12 font-bold text-[32px]'>Run your sales cycles like a sprint</h2>
                </div>

                <div className='flex flex-col flex-wrap '>
                    <ServiceItem />
                    <ServiceItem />
                    <ServiceItem />
                </div>
            </div>
        </section>
    );
};

// flex-row odd:flex-row-reverse items-center

export default Services;