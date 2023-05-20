import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import "./styles.css";
import './SwiperSection.css'

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

const SwiperSection = () => {
    return (
        <>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide >
                    <img src="https://i.ibb.co/8NT797S/low-resolution-1.jpg" alt="client-image1" className="w-full h-full"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/xGxhvM5/low-resolution-2.jpg" alt="client-image2" className="w-full h-full"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/5WJzNdC/low-resolution-3.jpg" alt="client-image3" className="w-full h-full"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/sj8K5pj/low-resolution-4.jpg" alt="client-image4" className="w-full h-full"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/yQKrq7r/low-resolution-5.jpg" alt="client-image5" className="w-full h-full"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/tQM5NdR/low-resolution-6.jpg" alt="client-image6" className="w-full h-full"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/Tw10Lkp/low-resolution-7.jpg" alt="client-image7" className="w-full h-full"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/FhJghxp/low-resolution-8.jpg" alt="client-image8" className="w-full h-full"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/frj47Xy/low-resolution.jpg" alt="client-image9" className="w-full h-full"/>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default SwiperSection;

