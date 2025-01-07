'use client'

import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const AboutUs = () => {
    const [slidesPerView, setSlidesPerView] = useState(4);
    const [swiper1, setSwiper1] = useState(null);
    const [swiper2, setSwiper2] = useState(null);
    const [activeIndex1, setActiveIndex1] = useState(0);
    const [activeIndex2, setActiveIndex2] = useState(0);

    const projectsOne = [
        {
            id: 1,
            image: '/assets/aboutus.svg',
            title: 'Mandra Heights',
            price: '$240k - 300k',
            location: 'Main Junction, Bangalore',
            bhk: '1, 2, 3 BHK',
            sqft: '520 - 1400 Sq Ft',
        },
        {
            id: 2,
            image: '/assets/aboutus1.svg',
            title: 'Serene Towers',
            price: '$280k - 350k',
            location: 'Green Park, Mumbai',
            bhk: '2, 3 BHK',
            sqft: '750 - 1600 Sq Ft',
        },
        {
            id: 3,
            image: '/assets/aboutus2.svg',
            title: 'Skyline Residency',
            price: '$320k - 400k',
            location: 'Whitefield, Bangalore',
            bhk: '3, 4 BHK',
            sqft: '1200 - 2000 Sq Ft',
        },
        {
            id: 4,
            image: '/assets/aboutus3.svg',
            title: 'Riverside Apartments',
            price: '$200k - 280k',
            location: 'Adyar, Chennai',
            bhk: '1, 2 BHK',
            sqft: '600 - 1100 Sq Ft',
        },
        {
            id: 5,
            image: '/assets/aboutus.svg',
            title: 'Mandra Heights',
            price: '$240k - 300k',
            location: 'Main Junction, Bangalore',
            bhk: '1, 2, 3 BHK',
            sqft: '520 - 1400 Sq Ft',
        },
        {
            id: 6,
            image: '/assets/aboutus1.svg',
            title: 'Serene Towers',
            price: '$280k - 350k',
            location: 'Green Park, Mumbai',
            bhk: '2, 3 BHK',
            sqft: '750 - 1600 Sq Ft',
        },
        {
            id: 7,
            image: '/assets/aboutus2.svg',
            title: 'Skyline Residency',
            price: '$320k - 400k',
            location: 'Whitefield, Bangalore',
            bhk: '3, 4 BHK',
            sqft: '1200 - 2000 Sq Ft',
        },
        {
            id: 8,
            image: '/assets/aboutus3.svg',
            title: 'Riverside Apartments',
            price: '$200k - 280k',
            location: 'Adyar, Chennai',
            bhk: '1, 2 BHK',
            sqft: '600 - 1100 Sq Ft',
        },
    ];

    const projectsTwo = [
        {
            id: 9,
            image: '/assets/aboutus.svg',
            title: 'Mandra Heights',
            price: '$240k - 300k',
            location: 'Main Junction, Bangalore',
            bhk: '1, 2, 3 BHK',
            sqft: '520 - 1400 Sq Ft',
        },
        {
            id: 10,
            image: '/assets/aboutus1.svg',
            title: 'Serene Towers',
            price: '$280k - 350k',
            location: 'Green Park, Mumbai',
            bhk: '2, 3 BHK',
            sqft: '750 - 1600 Sq Ft',
        },
        {
            id: 11,
            image: '/assets/aboutus2.svg',
            title: 'Skyline Residency',
            price: '$320k - 400k',
            location: 'Whitefield, Bangalore',
            bhk: '3, 4 BHK',
            sqft: '1200 - 2000 Sq Ft',
        },
        {
            id: 12,
            image: '/assets/aboutus3.svg',
            title: 'Riverside Apartments',
            price: '$200k - 280k',
            location: 'Adyar, Chennai',
            bhk: '1, 2 BHK',
            sqft: '600 - 1100 Sq Ft',
        },
        {
            id: 13,
            image: '/assets/aboutus.svg',
            title: 'Mandra Heights',
            price: '$240k - 300k',
            location: 'Main Junction, Bangalore',
            bhk: '1, 2, 3 BHK',
            sqft: '520 - 1400 Sq Ft',
        },
        {
            id: 14,
            image: '/assets/aboutus1.svg',
            title: 'Serene Towers',
            price: '$280k - 350k',
            location: 'Green Park, Mumbai',
            bhk: '2, 3 BHK',
            sqft: '750 - 1600 Sq Ft',
        },
        {
            id: 15,
            image: '/assets/aboutus2.svg',
            title: 'Skyline Residency',
            price: '$320k - 400k',
            location: 'Whitefield, Bangalore',
            bhk: '3, 4 BHK',
            sqft: '1200 - 2000 Sq Ft',
        },
        {
            id: 16,
            image: '/assets/aboutus3.svg',
            title: 'Riverside Apartments',
            price: '$200k - 280k',
            location: 'Adyar, Chennai',
            bhk: '1, 2 BHK',
            sqft: '600 - 1100 Sq Ft',
        },
    ];

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setSlidesPerView(1);
            } else if (window.innerWidth < 1024) {
                setSlidesPerView(2);
            } else if (window.innerWidth < 1280) {
                setSlidesPerView(3);
            } else {
                setSlidesPerView(4);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const CustomPagination = ({ swiper, activeIndex, totalSlides }) => {
        return (
            <div className="flex justify-center mt-6">
                {Array.from({ length: totalSlides }).map((_, index) => (
                    <button
                        key={index}
                        className={`w-2 h-2 rounded-full mx-1 transition-all duration-300 ${
                            index === activeIndex ? 'bg-[#E1BC8A] w-4' : 'bg-gray-300'
                        }`}
                        onClick={() => swiper.slideTo(index)}
                    />
                ))}
            </div>
        );
    };

    const ProjectCard = ({ project }) => (
        <div
            className="flex flex-col w-full  border bg-white rounded-[12px] transform transition-all duration-500 ease-in-out"
            style={{ boxShadow: '2px 8px 24px 0px #0000000F' }}
        >
            <div>
                <Image
                    src={project.image}
                    alt={project.title}
                    width={290}
                    height={173}
                    className="rounded-t-[12px] w-full"
                />
            </div>
            <div className="bg-white rounded-b-xl px-2.5 py-4 lg:p-4">
                <div className="flex items-center justify-between gap-2">
                    <h2 className="text-[#1E2A38] text-[16px] font-normal">{project.title}</h2>
                </div>
                <h4 className="text-[#555555] text-sm leading-[17.64px] font-normal mt-2">{project.price}</h4>
                <div className="mt-5 space-y-4">
                    <div className="flex items-center gap-3">
                        <Image src="/assets/location.svg" alt="location" width={20} height={20} />
                        <h3 className="text-[#777777] text-[14px] font-normal leading-[17px]">{project.location}</h3>
                    </div>
                    <div className="flex items-center gap-3">
                        <Image src="/assets/bed.svg" alt="bed" width={20} height={20} />
                        <h3 className="text-[#777777] text-[14px] font-normal leading-[17px]">{project.bhk}</h3>
                    </div>
                    <div className="flex items-center gap-3">
                        <Image src="/assets/square.svg" alt="square" width={20} height={20} />
                        <h3 className="text-[#777777] text-[14px] font-normal leading-[17px]">{project.sqft}</h3>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div className="pt-10 md:pt-[50px] pb-[67px] max-w-[1440px] w-full mx-auto px-4 md:px-10 lg:px-10 xl:px-24">
            <div className="text-center">
                <h2 className="text-[#1E2A38] text-[25px] md:text-[32px] leading-[40px] font-semibold mb-3 md:mb-6">About Us</h2>
                <p className="text-[#777777] text-base md:text-[18px] leading-[27px] font-normal">
                    These are the leading projects we're working on in your city!
                </p>
            </div>
            
            {/* Slider One */}
            <div className="mt-8 md:mt-14 relative">
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={24}
                    slidesPerView={slidesPerView}
                    onSwiper={setSwiper1}
                    onSlideChange={(swiper) => setActiveIndex1(swiper.activeIndex)}
                >
                    {projectsOne.map((project) => (
                        <SwiperSlide key={project.id}>
                            <ProjectCard project={project} />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <CustomPagination swiper={swiper1} activeIndex={activeIndex1} totalSlides={projectsOne.length - slidesPerView + 1} />
            </div>

            {/* Slider Two */}
            <div className="mt-10 relative">
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={24}
                    slidesPerView={slidesPerView}
                    onSwiper={setSwiper2}
                    onSlideChange={(swiper) => setActiveIndex2(swiper.activeIndex)}
                >
                    {projectsTwo.map((project) => (
                        <SwiperSlide key={project.id}>
                            <ProjectCard project={project} />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <CustomPagination swiper={swiper2} activeIndex={activeIndex2} totalSlides={projectsTwo.length - slidesPerView + 1} />
            </div>
        </div>
    );
};

export default AboutUs;

