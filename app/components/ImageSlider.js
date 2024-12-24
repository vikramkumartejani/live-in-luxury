"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";

export default function ImageSlider() {
  return (
    <div className="w-full mt-10">
      <Swiper
        spaceBetween={24}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true}
        initialSlide={1}
        speed={1000}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: {
            spaceBetween: 20,
          },
          768: {
            spaceBetween: 30,
          },
          1024: {
            spaceBetween: 40,
          },
          1280: {
            spaceBetween: 50,
          },
          2000: {
            spaceBetween: 80,
          },
        }}
        modules={[Autoplay]}
        className="w-full"
      >
        {[1, 2, 3, 1, 2, 3, 1, 2, 3].map((_, index) => (
          <SwiperSlide
            key={index}
            className="xl:!w-[1005px] lg:!w-[800px] md:!w-[600px] sm:!w-[450px] !w-[295px] max-w-full"
          >
            <img
              src={`/assets/about-liveinluxury${(index % 3) + 1}.jpg`}
              alt={`Luxury lifestyle image ${(index % 3) + 1}`}
              className="w-full md:h-[626px] h-[384px] rounded-[16px] object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
