"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Businessman",
    image: "/assets/testimonial-profile.png",
    text: "Live in Luxury made the entire process effortless. From the initial search to closing, the team's dedication and attention to detail were exceptional. My new home exceeds all expectations, offering elegance and comfort in every corner.",
  },
  {
    id: 2,
    name: "Businessman",
    image: "/assets/testimonial-profile.png",
    text: "Live in Luxury made the entire process effortless. From the initial search to closing, the team's dedication and attention to detail were exceptional. My new home exceeds all expectations, offering elegance and comfort in every corner.",
  },
  {
    id: 3,
    name: "Businessman",
    image: "/assets/testimonial-profile.png",
    text: "Live in Luxury made the entire process effortless. From the initial search to closing, the team's dedication and attention to detail were exceptional. My new home exceeds all expectations, offering elegance and comfort in every corner.",
  },
  {
    id: 4,
    name: "Businessman",
    image: "/assets/testimonial-profile.png",
    text: "Live in Luxury made the entire process effortless. From the initial search to closing, the team's dedication and attention to detail were exceptional. My new home exceeds all expectations, offering elegance and comfort in every corner.",
  },
  {
    id: 5,
    name: "Businessman",
    image: "/assets/testimonial-profile.png",
    text: "Live in Luxury made the entire process effortless. From the initial search to closing, the team's dedication and attention to detail were exceptional. My new home exceeds all expectations, offering elegance and comfort in every corner.",
  },
  {
    id: 6,
    name: "Businessman",
    image: "/assets/testimonial-profile.png",
    text: "Live in Luxury made the entire process effortless. From the initial search to closing, the team's dedication and attention to detail were exceptional. My new home exceeds all expectations, offering elegance and comfort in every corner.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative bg-[#E5C49B] py-[96px] overflow-hidden">
      <div className="">
        <div className="text-center mb-[56px] px-4">
          <h2 className="text-white lg:text-[32px] md:text-[26px] text-[20px] font-[400] mb-[16px]">
            What Our Customers Say
          </h2>
          <p className="text-white max-w-[742px] lg:text-[18px] md:text-[16px] text-[14px] font-[700] mx-auto">
            Hear from our satisfied clients who have found their dream homes
            with Live in Luxury. Their stories reflect our commitment to
            providing exceptional properties and unparalleled service.
          </p>
        </div>

        <Swiper
          modules={[Autoplay]}
          centeredSlides={true}
          slidesPerView={"auto"}
          spaceBetween={0}
          speed={500}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="testimonials-swiper"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide
              key={testimonial.id}
              className="xl:!w-[783px] lg:!w-[600px] md:!w-[400px] sm:!w-[350px] !w-[258px] max-w-full swiper-slide-custom"
            >
              <div className="bg-white rounded-[24px] p-[21px] relative transition-all duration-500">
                <Image
                  src="/assets/quote-down.png"
                  alt="quote"
                  width={90}
                  height={90}
                  className="absolute lg:w-[90px] md:w-[60px] w-[32px] lg:h-[90px] md:h-[60px] h-[32px] right-4 top-4"
                />
                <div className="flex flex-col items-center">
                  <Image
                    src={testimonial.image}
                    alt="profile"
                    width={64}
                    height={64}
                    className="w-[64px] h-[64px] rounded-full md:mb-[41px] mb-[36px]"
                  />
                  <h3 className="lg:text-[18px] md:text-[16px] text-[14px] text-[#555555] font-[400] md:mb-[50px] mb-[40px]">
                    {testimonial.name}
                  </h3>
                  <p className="text-[#777777] lg:text-[18px] md:text-[16px] sm:text-[14px] text-[12px] font-[400] text-center w-full">
                    {testimonial.text}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
