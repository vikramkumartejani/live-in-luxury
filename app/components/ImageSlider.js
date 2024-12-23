'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/autoplay'

export default function ImageSlider() {
    return (
        <div className="w-full mt-10">
            <Swiper
                spaceBetween={20}
                centeredSlides={true}
                slidesPerView={2.5}
                loop={true}
                initialSlide={1}
                speed={5000}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="w-full"
            >
                {[1, 2, 3, 1, 2, 3, 1, 2, 3].map((_, index) => (
                    <SwiperSlide key={index}>
                        <img
                            src={`/assets/about-liveinluxury${(index % 3) + 1}.jpg`}
                            alt={`Luxury lifestyle image ${(index % 3) + 1}`}
                            className="w-full h-[626px] rounded-2xl object-cover"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

