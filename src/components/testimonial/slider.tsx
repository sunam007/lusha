import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
import Card from './card';


const Slider = () => {
    return (
        <Swiper
            spaceBetween={30}
            slidesPerView={3}
            initialSlide={1}
            modules={[Pagination, Autoplay]}
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: true,
            }}
            pagination={{
                // el: '.swiper-pagination',
                clickable: true,
                dynamicBullets: true,
                // renderBullet: function (index, className) {

                //     for (let i = 0; i < 5; i++) {
                //         console.log(i);
                //       }

                //     console.log(index);
                //     if (index < 2 ) {
                //         return '<span class="' + className + '">' + (index + 1) + '</span>';
                //     }
                //     return '<span class="' + className + '">' + (index + 1) + '</span>';
                // },
            }}

            breakpoints={{
                0: {
                    slidesPerView: 1,
                },
                400: {
                    slidesPerView: 1,
                },
                736: {
                    slidesPerView: 2,
                },
                1000: {
                    slidesPerView: 3
                },

            }}
        >
            <SwiperSlide>
                <Card />
            </SwiperSlide>
            <SwiperSlide>
                <Card />
            </SwiperSlide>
            <SwiperSlide>
                <Card />
            </SwiperSlide>
            <SwiperSlide>
                <Card />
            </SwiperSlide>
            <SwiperSlide>
                <Card />
            </SwiperSlide>
            <SwiperSlide>
                <Card />
            </SwiperSlide>

        </Swiper >
    );
};

export default Slider;